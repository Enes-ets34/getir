'use client';
import React from 'react';
import {getToastItemStyle, toastStyles} from './toast.styles';
import {ToastProps} from './toast.types';
import {useToastStore} from '@/store/toast';
import {AnimatePresence} from 'framer-motion';
import Icon from '../icon/Icon';
import Colors from '@/theme/Colors';
import AnimatedWrapper from '@/components/animated/Animated';

const Toast: React.FC = () => {
  const {toasts, removeToast} = useToastStore();

  return (
    <div className={toastStyles.wrapper}>
      <AnimatePresence>
        {toasts.map((toast: ToastProps) => (
          <AnimatedWrapper key={toast.id}>
            <div
              className={getToastItemStyle(toast.type)}
              onClick={() => removeToast(toast.id)}>
              <div className={toastStyles.content}>
                <p className="font-medium">{toast.message}</p>
                <button
                  onClick={() => removeToast(toast.id)}
                  className={toastStyles.close}>
                  <Icon
                    source={'close'}
                    color={Colors.black}
                    size={{width: 12, height: 12}}
                  />
                </button>
              </div>
            </div>
          </AnimatedWrapper>
        ))}
      </AnimatePresence>
    </div>
  );
};

export default Toast;
