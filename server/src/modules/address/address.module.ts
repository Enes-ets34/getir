import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AddressService } from './address.service';
import { AddressController } from './address.controller';
import { AddressSchema } from './schemas/address.schema';
import { GetAccessToRouteGuard } from 'middlewares/authorization/auth.middleware';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Address', schema: AddressSchema }]),
  ],
  providers: [AddressService, GetAccessToRouteGuard],
  controllers: [AddressController],
  exports: [AddressService],
})
export class AddressModule {}
