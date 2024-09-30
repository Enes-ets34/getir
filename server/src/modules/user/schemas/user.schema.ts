import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import * as bcrypt from 'bcrypt';
import { IsString, Length, Matches, IsEmail } from 'class-validator';

@Schema({ collection: 'users' })
export class User extends Document {
  @Prop({ required: true })
  fullName: string;

  @Prop({
    unique: true,
    required: true,
    validate: {
      validator: function (v: string) {
        // Türk telefon numarası için regex
        return /^(\+90)?5\d{9}$/.test(v);
      },
      message: (props) => `${props.value} geçersiz bir telefon numarası!`,
    },
  })
  @Matches(/^(\+90)?5\d{9}$/, { message: 'Geçersiz telefon numarası formatı!' })
  phone: string;

  @Prop({
    unique: true,
    required: true,
  })
  @IsEmail({}, { message: 'Geçerli bir e-posta adresi giriniz.' })
  email: string;

  @Prop({
    required: true,
    minlength: [6, 'Şifre minimum 6 karakter olmalıdır.'],
  })
  @IsString()
  @Length(6, undefined, { message: 'Şifre minimum 6 karakter olmalıdır.' })
  password: string;

  @Prop({ default: false })
  isAdmin: boolean;
}

export const UserSchema = SchemaFactory.createForClass(User);

UserSchema.pre<User>('save', async function (next) {
  if (!this.isModified('password')) return next();

  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
  next();
});
