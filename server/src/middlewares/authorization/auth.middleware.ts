import {
  Injectable,
  CanActivate,
  ExecutionContext,
  ForbiddenException,
  UnauthorizedException,
  NestMiddleware,
} from '@nestjs/common';
import * as jwt from 'jsonwebtoken';
import {
  isTokenIncluded,
  getAccessTokenFromHeader,
} from 'helpers/auth/tokenHelpers.helper';
import { IGetUserAuthInfoRequest } from 'types/req';
import { NextFunction } from 'express';

@Injectable()
export class GetAccessToRouteGuard implements CanActivate {
  canActivate(context: ExecutionContext): boolean {
    const request = context
      .switchToHttp()
      .getRequest<IGetUserAuthInfoRequest>();
    const { JWT_SECRET_KEY } = process.env;

    if (!isTokenIncluded(request)) {
      throw new UnauthorizedException('You are not authorized for this route.');
    }

    const access_token = getAccessTokenFromHeader(request);

    try {
      const decoded = jwt.verify(
        access_token,
        JWT_SECRET_KEY,
      ) as jwt.JwtPayload;
      request.user = {
        id: decoded.id,
        full_name: decoded.full_name,
        isAdmin: decoded.isAdmin,
      };
      return true;
    } catch (error) {
      throw new ForbiddenException('You are not authorized for this route.');
    }
  }
}
@Injectable()
export class IsAdminGuard implements CanActivate {
  canActivate(context: ExecutionContext): boolean {
    const request = context.switchToHttp().getRequest<IGetUserAuthInfoRequest>();
    
    if (!request.user || !request.user.isAdmin) {
      throw new ForbiddenException('Yalnızca admin bu işlemi gerçekleştirebilir.');
    }
    return true;
  }
}
