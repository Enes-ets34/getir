import { Module } from '@nestjs/common';
import { ProductService } from './product.service';
import { ProductController } from './product.controller';
import { GetAccessToRouteGuard } from 'middlewares/authorization/auth.middleware';
import { IsAdminGuard } from 'middlewares/authorization/auth.middleware';
import { MongooseModule } from '@nestjs/mongoose';
import { ProductSchema } from './schemas/product.schema';
import { CategorySchema, SubCategorySchema } from '@category/schemas/category.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: 'Product', schema: ProductSchema },
      { name: 'SubCategory', schema: SubCategorySchema },
      { name: 'Category', schema: CategorySchema },
    ]),
  ],
  controllers: [ProductController],
  providers: [ProductService, GetAccessToRouteGuard, IsAdminGuard],
})
export class ProductModule {}
