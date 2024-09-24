import { Injectable } from '@nestjs/common';
import { CreateUserDto } from '@user/dto/create-user.dto';
import { User } from '@user/schemas/user.schema';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
  constructor(
    @InjectModel(User.name)
    private readonly userModel: Model<User>,
  ) {}

  async register(createUserDto: CreateUserDto): Promise<User> {
    const { password, ...userData } = createUserDto;

    // Şifreyi hashle
    const hashedPassword = await bcrypt.hash(password, 10);

    const user = new this.userModel({
      ...userData,
      password: hashedPassword,
    });

    return user.save();
  }
}
