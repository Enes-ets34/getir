import {
  Controller,
  Put,
  UseGuards,
  Req,
  Body,
  Post,
  Param,
  Get,
  Delete,
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

  @UseGuards(GetAccessToRouteGuard)
  @Get('/user-addresses')
  async getAddressByUserId(@Req() req: IGetUserAuthInfoRequest) {
    const userId = req.user?.id;

    if (!userId) {
      throw new Error('User ID not found');
    }

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
  @UseGuards(GetAccessToRouteGuard)
  @Delete('/delete/:id')
  async delete(@Param('id') id: string) {
    const addressId = id;

    await this.addressService.delete(addressId);

    return {
      status: 'success',
      message: 'address silindi',
    };
  }
}
