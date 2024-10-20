import {
  Controller,
  Post,
  Body,
  HttpCode,
  Get,
  Res,
  UseGuards,
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { CreateUserDto } from '@user/dto/create-user.dto';
import { LoginUserDto } from './dto/login-user.dto'; // Auth altında içe aktar
import { sendJwtToClient } from 'helpers/auth/tokenHelpers.helper';
import { Response } from 'express';
import { GetAccessToRouteGuard } from 'middlewares/authorization/auth.middleware';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('register')
  async register(@Body() createUserDto: CreateUserDto) {
    const { user, token } = await this.authService.register(createUserDto);
    return {
      status: 'success',
      user,
      access_token: token,
    };
  }
  @HttpCode(200)
  @Post('login')
  async login(@Body() loginUserDto: LoginUserDto, @Res() res: Response) {
    const { user, token } = await this.authService.login(loginUserDto);
    sendJwtToClient(user, res);
    return {
      status: 'success',
      user,
      access_token: token,
    };
  }
  @Get('logout')
  @UseGuards(GetAccessToRouteGuard)
  async logout(@Res() res: Response) {
    return this.authService.logout(res);
  }
  @Get('test')
  @UseGuards(GetAccessToRouteGuard)
  async test(@Res() res: Response) {
    return res.status(200).json({ message: 'Erişim başarılı!' });
  }
}
