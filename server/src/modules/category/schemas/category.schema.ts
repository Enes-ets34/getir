import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { slugify } from 'helpers/slugify.helpers';
import { Document, Types } from 'mongoose';

@Schema({ timestamps: true })
export class SubCategory {
  @Prop({ required: true })
  title: string;
}

export const SubCategorySchema = SchemaFactory.createForClass(SubCategory);

@Schema({ timestamps: true })
export class Category extends Document {
  @Prop({ required: true })
  title: string;

  @Prop()
  imageUrl: string;

  @Prop({ unique: true })
  slug: string;

  @Prop({ type: [SubCategorySchema], default: [] })
  subCategories: Types.Array<SubCategory>;
}

const CategorySchema = SchemaFactory.createForClass(Category);

CategorySchema.pre<Category>('save', function (next) {
  if (this.isModified('title') || this.isNew) {
    this.slug = slugify(this.title);
  }
  next();
});

export { CategorySchema };
