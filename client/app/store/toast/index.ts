import { create } from 'zustand';
import { ToastProps, ToastEnum } from '@/components/toast/toast.types';

interface ToastState {
  toasts: ToastProps[];
  addToast: (message: string, type: ToastEnum, duration?: number) => void;
  removeToast: (id: string) => void;
}

export const useToastStore = create<ToastState>((set) => ({
  toasts: [],
  
  addToast: (message, type, duration = 3000) => {
    const id = Math.random().toString(36).substring(7);
    
    set((state) => ({
      toasts: [...state.toasts, { id, message, type }],
    }));
    setTimeout(() => {
      set((state) => ({
        toasts: state.toasts.filter((toast) => toast.id !== id),
      }));
    }, duration);
  },

  removeToast: (id) =>
    set((state) => ({
      toasts: state.toasts.filter((toast) => toast.id !== id),
    })),
}));
