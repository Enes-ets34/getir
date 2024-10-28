import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Body,
  Param,
  UseGuards,
  Req,
} from '@nestjs/common';
import { CategoryService } from './category.service';
import { UpdateCategoryDto } from './dto/update-category.dto';
import { CreateCategoryDto } from './dto/create-category.dto';
import {
  GetAccessToRouteGuard,
  IsAdminGuard,
} from 'middlewares/authorization/auth.middleware';

@Controller('categories')
@UseGuards(GetAccessToRouteGuard)
export class CategoryController {
  constructor(private readonly categoryService: CategoryService) {}

  @Get()
  async getAllCategories() {
    return this.categoryService.getAll();
  }

  @Post('create')
  @UseGuards(IsAdminGuard)
  async createCategory(
    @Body() CreateCategoryDto: CreateCategoryDto,
  ) {
    return this.categoryService.create(CreateCategoryDto);
  }

  @Put('update/:id')
  @UseGuards(IsAdminGuard)
  async updateCategory(
    @Param('id') id: string,
    @Body() UpdateCategoryDto: UpdateCategoryDto,
  ) {
    return this.categoryService.update(id, UpdateCategoryDto);
  }

  @Delete('delete/:id')
  @UseGuards(IsAdminGuard)
  async deleteCategory(
    @Param('id') id: string,
  ) {
    return this.categoryService.delete(id);
  }
}
