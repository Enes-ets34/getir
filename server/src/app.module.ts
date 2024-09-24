import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppConfigModule } from '@config/config.module';
import { AuthModule } from '@auth/auth.module';
import { UserModule } from '@user/user.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost:27017/getir-clone', {}),
    AppConfigModule,
    AuthModule,
    UserModule,
  ],
})
export class AppModule {}
