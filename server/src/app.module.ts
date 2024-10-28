import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppConfigModule } from '@config/config.module';
import { AuthModule } from '@auth/auth.module';
import { UserModule } from '@user/user.module';
import { CampaignModule } from '@campaign/campaign.module';
import { CategoryModule } from '@category/category.module';

import { APP_FILTER } from '@nestjs/core';
import { AllExceptionsFilter } from 'filters/all-exceptions.filter';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost:27017/getir-clone', {}),
    AppConfigModule,
    AuthModule,
    UserModule,
    CampaignModule,
    CategoryModule,
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
