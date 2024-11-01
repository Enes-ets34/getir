import {
  Controller,
  Post,
  Body,
  Get,
  Patch,
  Delete,
  UseGuards,
  Req,
  NotFoundException,
} from '@nestjs/common';
import { GetAccessToRouteGuard } from 'middlewares/authorization/auth.middleware';
import { CartService } from './cart.service';
import { CreateCartDto } from './dto/create-cart.dto';
import { UpdateCartDto } from './dto/update-cart.dto';
import { Cart } from './schemas/cart.schema';
import { Request } from 'express';

interface IGetUserCartRequest extends Request {
  user?: {
    id: string;
    full_name: string;
    isAdmin?: boolean;
  };
}

@Controller('cart')
@UseGuards(GetAccessToRouteGuard)
export class CartController {
  constructor(private readonly cartService: CartService) {}

  @Post()
  async createCart(
    @Req() req: IGetUserCartRequest,
    @Body() createCartDto: CreateCartDto,
  ): Promise<{ status: string; data: Cart }> {
    const userId = req.user?.id;
    const result = await this.cartService.create({ ...createCartDto, userId });

    if ('message' in result) {
      throw new NotFoundException(result.message);
    }

    return {
      status: 'success',
      data: result,
    };
  }

  @Patch()
  async updateCart(
    @Req() req: IGetUserCartRequest,
    @Body() updateCartDto: UpdateCartDto,
  ): Promise<{ status: string; data: Cart }> {
    const userId = req.user?.id;
    const result = await this.cartService.update({ ...updateCartDto, userId });

    if ('status' in result) {
      throw new NotFoundException(result.message);
    }

    return {
      status: 'success',
      data: result,
    };
  }

  @Get()
  async getCart(
    @Req() req: IGetUserCartRequest,
  ): Promise<{ status: string; data: Cart }> {
    const userId = req.user?.id;
    const cart = await this.cartService.getCartByUserId(userId);

    return {
      status: 'success',
      data: cart,
    };
  }

  @Delete()
  async deleteCart(
    @Req() req: IGetUserCartRequest,
  ): Promise<{ status: string; message: string }> {
    const userId = req.user?.id;
    await this.cartService.delete(userId);

    return {
      status: 'success',
      message: 'Cart deleted successfully.',
    };
  }
}
