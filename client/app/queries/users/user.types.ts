
export interface User {
  id: string;
  fullName: string;
  email: string;
  phone?: string;
  password?:string
}
export interface UpdateUserRequest {
  fullName: string;
  email: string;
}

export interface UpdateUserResponse {
  status: string;
  message: string;
  user: User;
}