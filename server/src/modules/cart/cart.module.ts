import { Module } from '@nestjs/common';
import { CartService } from './cart.service';
import { CartController } from './cart.controller';
import { GetAccessToRouteGuard } from 'middlewares/authorization/auth.middleware';
import { MongooseModule } from '@nestjs/mongoose';
import { CartSchema } from './schemas/cart.schema';
import { ProductService } from '@product/product.service';
import { ProductSchema } from '@product/schemas/product.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: 'Cart', schema: CartSchema },
      { name: 'Product', schema: ProductSchema },
    ]),
  ],
  providers: [CartService, GetAccessToRouteGuard, ProductService],
  controllers: [CartController],
})
export class CartModule {}
