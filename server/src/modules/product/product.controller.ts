import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Body,
  Param,
  UseGuards,
  Query,
  NotFoundException,
} from '@nestjs/common';
import { ProductService } from './product.service';
import { UpdateProductDto } from './dto/update-product.dto';
import { CreateProductDto } from './dto/create-product.dto';

import {
  GetAccessToRouteGuard,
  IsAdminGuard,
} from 'middlewares/authorization/auth.middleware';
import { FindProductsDto } from './dto/find-products.dto';
import { Types } from 'mongoose';

@Controller('products')
export class ProductController {
  constructor(private readonly productService: ProductService) {}

  @Get()
  async getAllProducts() {
    return this.productService.getAll();
  }
  @Get('filter')
  async findProductsByCategory(@Query() filterDto: FindProductsDto) {
    const products =
      await this.productService.findProductsByCategory(filterDto);
    return {
      status: 'success',
      data: products,
    };
  }
  @Get(':slug')
  async getSingleProduct(@Param('slug') slug: string) {
    const product = await this.productService.getSingleProduct(slug);

    return {
      status: 'success',
      data: product,
    };
  }

  @Post('create')
  @UseGuards(GetAccessToRouteGuard, IsAdminGuard)
  async createCategory(@Body() CreateProductDto: CreateProductDto) {
    return this.productService.create(CreateProductDto);
  }

  @Put('update/:id')
  @UseGuards(GetAccessToRouteGuard, IsAdminGuard)
  async updateCategory(
    @Param('id') id: string,
    @Body() UpdateProductDto: UpdateProductDto,
  ) {
    return this.productService.update(id, UpdateProductDto);
  }

  @Delete('delete/:id')
  @UseGuards(GetAccessToRouteGuard, IsAdminGuard)
  async deleteCategory(@Param('id') id: string) {
    return this.productService.delete(id);
  }
}
