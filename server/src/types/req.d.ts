import { Request } from 'express';
export interface IGetUserAuthInfoRequest extends Request {
  user: {
    id: string;
    full_name: string;
    isAdmin?:boolean
  };
}
