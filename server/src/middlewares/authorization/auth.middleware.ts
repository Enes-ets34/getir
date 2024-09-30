import { Injectable, CanActivate, ExecutionContext, ForbiddenException, UnauthorizedException } from '@nestjs/common';
import * as jwt from 'jsonwebtoken';
import {
  isTokenIncluded,
  getAccessTokenFromHeader,
} from 'helpers/auth/tokenHelpers.helper';
import { IGetUserAuthInfoRequest } from 'types/req';

@Injectable()
export class GetAccessToRouteGuard implements CanActivate {
  canActivate(context: ExecutionContext): boolean {
    const request = context.switchToHttp().getRequest<IGetUserAuthInfoRequest>();
    const { JWT_SECRET_KEY } = process.env;

    // Token kontrolü
    if (!isTokenIncluded(request)) {
      throw new UnauthorizedException('You are not authorized for this route.');
    }

    const access_token = getAccessTokenFromHeader(request);
    
    try {
      const decoded = jwt.verify(access_token, JWT_SECRET_KEY) as jwt.JwtPayload;
      request.user = {
        id: decoded.id,
        full_name: decoded.full_name,
      };
      return true; // Yetkilendirme başarılı
    } catch (error) {
      throw new ForbiddenException('You are not authorized for this route.');
    }
  }
}
