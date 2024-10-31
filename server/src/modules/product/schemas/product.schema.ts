import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { slugify } from 'helpers/slugify.helpers';
import { Document, Types } from 'mongoose';

@Schema({ timestamps: true })
export class Product extends Document {
  @Prop({ required: true })
  title: string;

  @Prop()
  imageUrl: string;

  @Prop()
  description: string;

  @Prop({ unique: true })
  slug: string;

  @Prop({ type: Types.ObjectId, ref: 'Category', required: true })
  category: Types.ObjectId;

  @Prop({ type: Types.ObjectId, ref: 'SubCategory', required: true })
  subCategory: Types.ObjectId;
}

const ProductSchema = SchemaFactory.createForClass(Product);

ProductSchema.pre<Product>('save', function (next) {
  if (this.isModified('title') || this.isNew) {
    this.slug = slugify(this.title);
  }
  next();
});

export { ProductSchema };
