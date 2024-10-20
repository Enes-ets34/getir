export enum ToastEnum {
    SUCCESS = 'success',
    WARNING = 'warning',
    ERROR = 'error',
    INFO = 'info',
  }
  
  export interface ToastProps {
    id: string;
    message: string;
    type: ToastEnum;
    duration?: number;
  }
  