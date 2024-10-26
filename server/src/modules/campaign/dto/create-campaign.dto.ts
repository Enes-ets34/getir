import { IsNotEmpty, IsString, IsUrl, IsOptional } from 'class-validator';

export class CreateCampaignDto {
  @IsNotEmpty()
  @IsString()
  title: string;

  @IsOptional()
  @IsString()
  description?: string;

  @IsOptional()
  @IsUrl()
  imageUrl?: string;

  @IsOptional()
  @IsUrl()
  url?: string;
}
