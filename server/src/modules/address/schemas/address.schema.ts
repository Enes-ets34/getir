import { Schema, Document } from 'mongoose';
import { Prop, Schema as MongooseSchema, SchemaFactory } from '@nestjs/mongoose';
import {
  IsNotEmpty,
  IsString,
} from 'class-validator';

@MongooseSchema()
export class Address extends Document {
  @Prop({ required: true })
  @IsNotEmpty()
  @IsString()
  userId: string;

  @Prop({ required: true })
  @IsNotEmpty()
  @IsString()
  contactName: string;

  @Prop({ required: true })
  @IsNotEmpty()
  @IsString()
  city: string;

  @Prop({ required: true })
  @IsNotEmpty()
  @IsString()
  country: string;

  @Prop({ required: true })
  @IsNotEmpty()
  @IsString()
  address: string;

  @Prop({ required: true })
  @IsNotEmpty()
  zipCode: string;

  @Prop({ required: true })
  @IsNotEmpty()
  phone: string;
}
export const AddressSchema = SchemaFactory.createForClass(Address);
