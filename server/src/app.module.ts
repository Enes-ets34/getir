import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppConfigModule } from '@config/config.module';
import { AuthModule } from '@auth/auth.module';
import { UserModule } from '@user/user.module';
import { CampaignModule } from '@campaign/campaign.module';
import { CategoryModule } from '@category/category.module';
import { ProductModule } from '@product/product.module';

import { APP_FILTER } from '@nestjs/core';
import { AllExceptionsFilter } from 'filters/all-exceptions.filter';

@Module({
  imports: [
    MongooseModule.forRoot(process.env.MONGO_URI, {}),
    AppConfigModule,
    AuthModule,
    UserModule,
    CampaignModule,
    CategoryModule,
    ProductModule,
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
