import {
  Controller,
  Put,
  UseGuards,
  Req,
  Body,
  Post,
  Param,
  Get,
} from '@nestjs/common';
import { AddressService } from './address.service';
import { UpdateAddressDto } from './dto/update-address.dto';
import { GetAccessToRouteGuard } from 'middlewares/authorization/auth.middleware';
import { CreateAddressDto } from './dto/create-address.dto';
interface IGetUserAuthInfoRequest extends Request {
  user?: {
    id: string;
    full_name: string;
  };
}
@Controller('addresses')
export class AddressController {
  constructor(private readonly addressService: AddressService) {}

   // Kullanıcıya ait adresleri almak
   @UseGuards(GetAccessToRouteGuard)
   @Get('/user-addresses')
   async getAddressByUserId(
     @Req() req: IGetUserAuthInfoRequest,
   ) {
     const userId = req.user?.id;
     
     if (!userId) {
       throw new Error('User ID not found');  // User ID bulunmazsa hata
     }
 
     // Kullanıcıya ait adresleri al
     const addresses = await this.addressService.getAddressByUserId(userId);
 
     return {
       status: 'success',
       data: addresses,
     };
   }
  @UseGuards(GetAccessToRouteGuard)
  @Post('/create')
  async create(
    @Req() req: IGetUserAuthInfoRequest,
    @Body() createAddressDto: CreateAddressDto,
  ) {
    const userId = req.user?.id;
    const address = await this.addressService.create({
      ...createAddressDto,
      userId,
    });

    return {
      status: 'success',
      data: address,
    };
  }

  @UseGuards(GetAccessToRouteGuard)
  @Put('/update/:id')
  async update(
    @Param('id') id: string,
    @Body() updateAddressDto: UpdateAddressDto,
  ) {
    const addressId = id;

    const updatedAddress = await this.addressService.update(
      addressId,
      updateAddressDto,
    );

    return {
      status: 'success',
      data: updatedAddress,
    };
  }
}
