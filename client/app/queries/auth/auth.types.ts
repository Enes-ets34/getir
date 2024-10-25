import { User } from "../users/user.types";

export interface LoginRequest {
  password: string;
  phone?: string;
}

export interface RegisterRequest {
  fullName: string;
  email: string;
  password: string;
  phone?: string;
}

export interface AuthResponse {
  access_token: string;
  user: User;
  status?:string;
  message?: string;
}
export interface AuthErrorResponse extends Error {
  statusCode: number;
  timestamp: string;
  path: string;
  messages: string[];
}
export interface TestTokenResponse {
  message?:string
}