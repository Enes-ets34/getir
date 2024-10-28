import { create } from 'zustand';
import { ModalStore } from './modalStore.types';

export const useModalStore = create<ModalStore>(set => ({
  isOpen: false,
  content: null,
  bottom: null,
  title: null,
  backButton: false,
  openModal: () => set({ isOpen: true }),
  closeModal: () => set({ isOpen: false }),
  setContent: content => set({ content }),
  setBottom: bottom => set({ bottom }),
  setTitle: title => set({ title }),
  setBackButton: value => set({ backButton: value }),
  backButtonOnClick: callback => {
    if (typeof callback === 'function') {
      callback();
    }
  },
}));
