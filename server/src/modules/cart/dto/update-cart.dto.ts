import {
  IsMongoId,
  IsArray,
  ValidateNested,
  IsOptional,
  IsNotEmpty,
} from 'class-validator';
import { Type } from 'class-transformer';
import { ProductItemDto } from './create-cart.dto';

export class UpdateCartDto {
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ProductItemDto)
  @IsOptional()
  products?: ProductItemDto[];
}
