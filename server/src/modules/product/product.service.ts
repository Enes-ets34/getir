import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Product } from './schemas/product.schema';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { FindProductsDto } from './dto/find-products.dto';

@Injectable()
export class ProductService {
  constructor(
    @InjectModel(Product.name) private productModel: Model<Product>,
  ) {}

  async getAll(): Promise<{ status: string; data: Product[] }> {
    const products = await this.productModel.find().exec();
    return {
      status: 'success',
      data: products,
    };
  }

  async create(
    CreateProductDto: CreateProductDto,
  ): Promise<{ status: string; data: Product }> {
    const newProduct = new this.productModel(CreateProductDto);
    const savedProduct = await newProduct.save();
    return {
      status: 'success',
      data: savedProduct,
    };
  }

  async update(
    id: string,
    UpdateProductDto: UpdateProductDto,
  ): Promise<{ status: string; data: Product }> {
    const updatedProduct = await this.productModel.findByIdAndUpdate(
      id,
      UpdateProductDto,
      { new: true },
    );

    if (!updatedProduct) {
      throw new NotFoundException('Kategori bulunamadı');
    }

    return {
      status: 'success',
      data: updatedProduct,
    };
  }

  async delete(id: string): Promise<{ status: string; message: string }> {
    const deletedProduct = await this.productModel.findByIdAndDelete(id);
    if (!deletedProduct) {
      throw new NotFoundException('Ürün bulunamadı');
    }
    return {
      status: 'success',
      message: `${deletedProduct?.title} Ürünü başarıyla silindi...`,
    };
  }

  async findProductsByCategory(filterDto: FindProductsDto) {
    const { categoryId } = filterDto;

    const products = await this.productModel
      .find(categoryId ? { category: categoryId } : {})
      .populate({
        path: 'category',
        select: 'subCategories',
      })
      .exec();

    const groupedProducts = products.reduce((acc, product) => {
      // @ts-ignore
      const foundSubCategory = product.category?.subCategories?.find(
        (sub) => sub._id.toString() === product.subCategory,
      );

      const subCategoryId = foundSubCategory ? foundSubCategory._id : null;
      const subCategoryTitle = foundSubCategory
        ? foundSubCategory.title
        : 'Unknown';

      // Gruplama işlemi
      if (!acc[subCategoryTitle]) {
        acc[subCategoryTitle] = {
          subCategoryId: subCategoryId,
          subCategory: subCategoryTitle,
          products: [],
        };
      }

      acc[subCategoryTitle].products.push({
        _id: product._id,
        title: product.title,
        imageUrl: product.imageUrl,
        description: product.description,
        slug: product.slug,
        price:product.price,
        discountedPrice:product?.discountedPrice
      });

      return acc;
    }, {});
    return Object.values(groupedProducts);
  }
  async getSingleProduct(slug: string): Promise<Product> {
    const product = await this.productModel.findOne({ slug }).exec();

    if (!product) {
      throw new NotFoundException('Product not found'); 
    }

    return product; 
  }
}
