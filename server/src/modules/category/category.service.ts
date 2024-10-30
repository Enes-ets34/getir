import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Category } from './schemas/category.schema';
import { CreateCategoryDto } from './dto/create-category.dto';
import { UpdateCategoryDto } from './dto/update-category.dto';

@Injectable()
export class CategoryService {
  constructor(
    @InjectModel(Category.name) private categoryModel: Model<Category>,
  ) {}

  async getAll(): Promise<{ status: string; data: Category[] }> {
    const categories = await this.categoryModel.find().exec();
    return {
      status: 'success',
      data: categories,
    };
  }

  async create(
    CreateCategoryDto: CreateCategoryDto,
  ): Promise<{ status: string; data: Category }> {
    const newCategory = new this.categoryModel(CreateCategoryDto);
    const savedCategory = await newCategory.save();
    return {
      status: 'success',
      data: savedCategory,
    };
  }

  async update(
    id: string,
    UpdateCategoryDto: UpdateCategoryDto,
  ): Promise<{ status: string; data: Category }> {
    const updatedCategory = await this.categoryModel.findByIdAndUpdate(
      id,
      UpdateCategoryDto,
      { new: true },
    );

    if (!updatedCategory) {
      throw new NotFoundException('Kategori bulunamadı');
    }

    return {
      status: 'success',
      data: updatedCategory,
    };
  }

  async delete(id: string): Promise<{ status: string; message: string }> {
    const deletedCategory = await this.categoryModel.findByIdAndDelete(id);
    if (!deletedCategory) {
      throw new NotFoundException('Kategori bulunamadı');
    }
    return {
      status: 'success',
      message: `${deletedCategory?.title} Kategori başarıyla silindi...`,
    };
  }
}
