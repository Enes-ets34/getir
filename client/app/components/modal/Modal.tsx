'use client';
import React from 'react';
import {useModalStore} from '@/store/modal';
import {modalStyles} from './modal.styles';
import Icon from '../icon/Icon';
import Colors from '@/theme/Colors';

const Modal: React.FC = () => {
  const {isOpen, closeModal, content, title, bottom} = useModalStore();

  if (!isOpen) return null;

  return (
    <div className={modalStyles.overlay} onClick={closeModal}>
      <div className={modalStyles.wrapper} onClick={e => e.stopPropagation()}>
        <div className={`${modalStyles.container} ${bottom ?? 'rounded-b-borderRadiusL'}`}>
          <button onClick={closeModal} className={modalStyles.closeButton}>
            <Icon
              source={'close'}
              size={{width: 10, height: 10}}
              color={Colors.black}
            />
          </button>
          {title && <p className={modalStyles.title}>{title}</p>}
          <div className={modalStyles.content}>{content}</div>
        </div>
        {bottom && <div className={modalStyles.bottom}>{bottom}</div>}
      </div>
    </div>
  );
};

export default Modal;
