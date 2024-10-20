import {User} from '@/queries/auth/auth.types';

export interface AuthState {
  user: User | null;
  access_token: string | null;
  setUser: (user: User | null) => void;
  setAccessToken: (access_token: string | null) => void;
  logout: () => void;
}