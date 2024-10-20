import {create} from 'zustand';
import {AuthState} from './authStore.types';

export const useAuthStore = create<AuthState>(set => ({
  user: null,
  access_token: null,
  setUser: user => set({user}),
  setAccessToken: access_token => set({access_token}),
  logout: () => set({user: null}),
}));
