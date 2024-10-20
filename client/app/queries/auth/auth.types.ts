export interface LoginRequest {
  email: string;
  password: string;
  phoneNumber?:string
}

export interface RegisterRequest {
  name: string;
  email: string;
  password: string;
  phoneNumber?:string
}

export interface AuthResponse {
  token: string;
  user: {
    id: string;
    name: string;
    email: string;
    phoneNumber?:string
  };
}
