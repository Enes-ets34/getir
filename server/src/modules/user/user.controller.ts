import { Controller, Put, UseGuards, Req, Body } from '@nestjs/common';
import { UserService } from './user.service';
import { UpdateUserDto } from './dto/update-user.dto';
import { GetAccessToRouteGuard } from 'middlewares/authorization/auth.middleware';
interface IGetUserAuthInfoRequest extends Request {
  user?: {
    id: string;
    full_name: string;
  };
}
@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @UseGuards(GetAccessToRouteGuard)
  @Put('update')
  async update(
    @Req() req: IGetUserAuthInfoRequest,
    @Body() updateUserDto: UpdateUserDto,
  ) {
    const userId = req.user.id;
    const updatedUser = await this.userService.update(userId, updateUserDto);

    return {
      status: 'success',
      message: 'Kullanıcı güncellendi',
      user: updatedUser,
    };
  }
}
