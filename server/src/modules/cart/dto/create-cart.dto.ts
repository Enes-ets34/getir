import {
  IsMongoId,
  IsNumber,
  IsOptional,
  IsArray,
  ValidateNested,
  IsNotEmpty,
} from 'class-validator';
import { Type } from 'class-transformer';
import { Types } from 'mongoose';

export class ProductItemDto {
  @IsMongoId()
  @IsNotEmpty()
  product: Types.ObjectId | string

  @IsNumber()
  @IsNotEmpty()
  quantity: number;
}

export class CreateCartDto {
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ProductItemDto)
  @IsOptional()
  products?: ProductItemDto[];
}
