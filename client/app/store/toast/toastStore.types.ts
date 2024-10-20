export interface Toast {
  id: string;
  message: string;
  type: 'success' | 'error' | 'info';
}

export interface ToastState {
  toasts: Toast[];
  addToast: (message: string, type: 'success' | 'error' | 'info') => void;
  removeToast: (id: string) => void;
}