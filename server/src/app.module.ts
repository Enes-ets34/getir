import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppConfigModule } from '@config/config.module';
import { AuthModule } from '@auth/auth.module';
import { UserModule } from '@user/user.module';
import { CampaignModule } from '@campaign/campaign.module';
import { CategoryModule } from '@category/category.module';
import { ProductModule } from '@product/product.module';
import { CartModule } from './modules/cart/cart.module';

import { APP_FILTER } from '@nestjs/core';
import { AllExceptionsFilter } from 'filters/all-exceptions.filter';
import { AddressModule } from '@address/address.module';

@Module({
  imports: [
    MongooseModule.forRoot(process.env.MONGO_URI, {}),
    AppConfigModule,
    AuthModule,
    UserModule,
    CampaignModule,
    CategoryModule,
    ProductModule,
    CartModule,
    AddressModule,
  ],
  providers: [
    {
      provide: APP_FILTER,
      useClass: AllExceptionsFilter,
    },
  ],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {}
}
