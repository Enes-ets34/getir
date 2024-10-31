import { IsMongoId, IsOptional } from 'class-validator';

export class FindProductsDto {
  @IsMongoId()
  @IsOptional()
  categoryId?: string;
}
