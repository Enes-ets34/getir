import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, Types } from 'mongoose';
import { Cart } from './schemas/cart.schema';
import { CreateCartDto, ProductItemDto } from './dto/create-cart.dto';
import { UpdateCartDto } from './dto/update-cart.dto';
import { ProductService } from '@product/product.service';

@Injectable()
export class CartService {
  constructor(
    @InjectModel(Cart.name) private readonly cartModel: Model<Cart>,
    private readonly productService: ProductService,
  ) {}

  async create(
    createCartDto: CreateCartDto & { userId: string },
  ): Promise<Cart | { message: string }> {
    const { userId, products } = createCartDto;

    let cart = await this.cartModel.findOne({ userId });

    if (cart) {
      cart = (await this.update({ userId, products })) as Cart;
      return cart;
    } else {
      const totalPrice = await this.calculateTotalPrice(products);

      const newCart = new this.cartModel({
        userId,
        products: products.map((product) => ({
          product: new Types.ObjectId(product.product),
          quantity: product.quantity,
        })),
        totalPrice,
      });

      const savedCart = await newCart.save();
      return savedCart.populate('products.product');
    }
  }

  async update(
    updateCartDto: UpdateCartDto & { userId: string },
  ): Promise<Cart | { status: string; message: string }> {
    const { userId, products } = updateCartDto;
    const cart = await this.cartModel.findOne({ userId });

    if (!cart) {
      throw new NotFoundException('Cart not found for this user');
    }

    const existingProducts = new Map(
      cart.products.map((product) => [product.product.toString(), product]),
    );

    for (const product of products) {
      const existingProduct = existingProducts.get(product.product as string);

      if (existingProduct) {
        existingProduct.quantity += product.quantity;

        if (existingProduct.quantity <= 0) {
          existingProducts.delete(product.product as string);
        }
      } else {
        if (product.quantity > 0) {
          existingProducts.set(product.product as string, {
            product: new Types.ObjectId(product.product),
            quantity: product.quantity,
          });
        }
      }
    }

    cart.products = Array.from(existingProducts.values());

    if (cart.products.length === 0) {
      return await this.delete(userId);
    }

    cart.totalPrice = await this.calculateTotalPrice(cart.products);

    const updatedCart = await cart.save();
    return updatedCart.populate('products.product');
  }

  async getCartByUserId(userId: string): Promise<Cart> {
    const cart = await this.cartModel
      .findOne({ userId })
      .populate('products.product');

    if (!cart) {
      throw new NotFoundException('Cart not found for this user');
    }

    return cart;
  }

  async delete(userId: string): Promise<{ status: string; message: string }> {
    const result = await this.cartModel.deleteOne({ userId });

    if (result.deletedCount === 0) {
      throw new NotFoundException('Cart not found for this user');
    }
    return {
      status: 'success',
      message: `Cart başarıyla silindi...`,
    };
  }

  private async calculateTotalPrice(
    products: ProductItemDto[],
  ): Promise<number> {
    let totalPrice = 0;

    for (const item of products) {
      const product = await this.productService.getSingleProductById(
        item.product as Types.ObjectId,
      );
      const price = product.discountedPrice ?? product.price;
      totalPrice += price * item.quantity;
    }

    return totalPrice;
  }
}
