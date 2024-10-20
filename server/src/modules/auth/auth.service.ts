import {
  Injectable,
  ConflictException,
  UnauthorizedException,
} from '@nestjs/common';
import { CreateUserDto } from '@user/dto/create-user.dto';
import { LoginUserDto } from './dto/login-user.dto'; // Auth altında içe aktar
import { User } from '@user/schemas/user.schema';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import * as bcrypt from 'bcrypt';
import { generateJwtToken } from 'utils/jwt.utils'; // JWT utils'ini içe aktar
import { Response } from 'express'; // Express Response türünü içe aktar

@Injectable()
export class AuthService {
  constructor(
    @InjectModel(User.name)
    private readonly userModel: Model<User>,
  ) {}

  async register(
    createUserDto: CreateUserDto,
  ): Promise<{ user: User; token: string }> {
    const existingUser = await this.userModel.findOne({
      email: createUserDto.email,
    });
    if (existingUser) {
      throw new ConflictException('Bu kullanıcı zaten mevcut');
    }

    const user = new this.userModel(createUserDto);
    await user.save();

    const token = generateJwtToken(user._id.toString(), user.fullName);

    return { user, token };
  }

  async login(
    loginUserDto: LoginUserDto,
  ): Promise<{ user: User; token: string }> {
    const { phone, password } = loginUserDto;

    const user = await this.userModel.findOne({ phone }).select('+password');
    if (!user) {
      throw new UnauthorizedException('Geçersiz numara veya şifre');
    }

    try {
      const isPasswordValid = await bcrypt.compare(password, user.password);
      if (!isPasswordValid) {
        throw new UnauthorizedException('Geçersiz numara veya şifre');
      }
    } catch (error) {
      throw new UnauthorizedException('Şifre kontrolü sırasında hata oluştu');
    }

    const token = generateJwtToken(user._id.toString(), user.fullName);

    user.password = undefined;

    return { user, token };
  }

  async logout(res: Response): Promise<void> {
    res
      .status(200)
      .cookie('access_token', null, {
        expires: new Date(Date.now()),
        httpOnly: true,
        secure: false,
        sameSite: 'lax',
      })
      .json({ status: 'success', message: 'logout successfully' });
  }
}
