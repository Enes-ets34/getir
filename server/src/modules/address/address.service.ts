import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Address } from './schemas/address.schema';
import { CreateAddressDto } from './dto/create-address.dto';
import { UpdateAddressDto } from './dto/update-address.dto';

@Injectable()
export class AddressService {
  constructor(@InjectModel('Address') private addressModel: Model<Address>) {}

  async getAddressByUserId(userId: string): Promise<Address[]> {
    const addresses = await this.addressModel.find({ userId }).exec();

    if (!addresses || addresses.length === 0) {
      throw new NotFoundException('No addresses found for this user');
    }

    return addresses;
  }

  async create(
    createAddressDto: CreateAddressDto & { userId: string },
  ): Promise<Address | { message: string }> {
    const newAddress = new this.addressModel(createAddressDto);
    return newAddress.save();
  }

  async update(
    addressId: string,
    updateAddressDto: UpdateAddressDto,
  ): Promise<Address> {
    const updatedAddress = await this.addressModel
      .findByIdAndUpdate(addressId, updateAddressDto, { new: true })
      .exec();

    if (!updatedAddress) {
      throw new NotFoundException('Address not found');
    }

    return updatedAddress;
  }
  async delete(
    addressId: string,
  ): Promise<{ status: string; message: string }> {
    const result = await this.addressModel.deleteOne({ _id: addressId });

    if (result.deletedCount === 0) {
      throw new NotFoundException('Address not found for this user');
    }
    return {
      status: 'success',
      message: `Address başarıyla silindi...`,
    };
  }
}
