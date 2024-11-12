import { Document } from 'mongoose';
import {
  Prop,
  Schema as MongooseSchema,
  SchemaFactory,
} from '@nestjs/mongoose';
import { IsDecimal, IsNotEmpty, IsNumber, IsString } from 'class-validator';

@MongooseSchema()
export class Address extends Document {
  @Prop({ required: true })
  @IsNotEmpty()
  @IsString()
  userId: string;
  
  @Prop()
  @IsNotEmpty()
  @IsString()
  title: string;
  
  @Prop()
  @IsNotEmpty()
  @IsString()
  address: string;
  
  @Prop()
  @IsNotEmpty()
  @IsString()
  apartment: string;
  
  @Prop()
  @IsNotEmpty()
  @IsString()
  description: string;
  
  @Prop()
  @IsNotEmpty()
  @IsString()
  floor: string;
  
  @Prop()
  @IsNotEmpty()
  @IsString()
  number: string;
  
  @Prop()
  @IsNotEmpty()
  @IsNumber()
  lat: number;
  
  @Prop()
  @IsNotEmpty()
  @IsNumber()
  long: number;
}
export const AddressSchema = SchemaFactory.createForClass(Address);
