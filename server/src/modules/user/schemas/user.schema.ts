import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import * as bcrypt from 'bcrypt';
import { Matches } from 'class-validator';
import * as jwt from 'jsonwebtoken'; // jsonwebtoken kütüphanesini içe aktar

@Schema({ collection: 'users' })
export class User extends Document {
  @Prop({ required: true })
  fullName: string;

  @Prop({
    unique: true,
    required: true,
    validate: {
      validator: function (v: string) {
        return /^(\+90)?5\d{9}$/.test(v);
      },
      message: (props) => `${props.value} geçersiz bir telefon numarası!`,
    },
  })
  @Matches(/^(\+90)?5\d{9}$/, { message: 'Geçersiz telefon numarası formatı!' })
  phone: string;

  @Prop({ unique: true, required: true })
  email: string;

  @Prop({
    required: true,
    minlength: [6, 'Şifre minimum 6 karakter olmalıdır.'],
  })
  password: string;

  @Prop({ default: false })
  isAdmin: boolean;

  @Prop({ default: Date.now })
  createdAt: Date;

  // JWT oluşturma fonksiyonu
  generateJwtFromUser(): string {
    const { JWT_SECRET_KEY, JWT_EXPIRE } = process.env;

    const payload = {
      id: this.id,
      full_name: this.fullName,
    };

    const token = jwt.sign(payload, JWT_SECRET_KEY, {
      expiresIn: JWT_EXPIRE,
    });

    return token;
  }
}

export const UserSchema = SchemaFactory.createForClass(User);

UserSchema.pre<User>('save', async function (next) {
  if (!this.isModified('password')) return next();

  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
  next();
});
