import { IsNotEmpty, IsString, IsUrl, IsOptional, ValidateNested } from 'class-validator';
import { Type } from 'class-transformer';

class SubCategoryDto {
  @IsNotEmpty()
  @IsString()
  title: string;

}

export class CreateCategoryDto {
  @IsNotEmpty()
  @IsString()
  title: string;

  @IsOptional()
  @IsUrl()
  imageUrl?: string;

  @IsOptional()
  @ValidateNested({ each: true })
  @Type(() => SubCategoryDto)
  subCategories?: SubCategoryDto[];
}
