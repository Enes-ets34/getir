export interface LoginRequest {
  password: string;
  phone?: string;
}
export interface User {
  id: string;
  fullName: string;
  email: string;
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
  status?:string
}
