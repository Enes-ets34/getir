import { Module } from '@nestjs/common';
import { CategoryService } from './category.service';
import { CategoryController } from './category.controller';
import { GetAccessToRouteGuard } from 'middlewares/authorization/auth.middleware';
import { IsAdminGuard } from 'middlewares/authorization/auth.middleware';
import { MongooseModule } from '@nestjs/mongoose';
import { CategorySchema } from './schemas/category.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Category', schema: CategorySchema }]),
  ],
  controllers: [CategoryController],
  providers: [CategoryService, GetAccessToRouteGuard, IsAdminGuard],
})
export class CategoryModule {}
