import {create} from 'zustand';

export const useModalStore = create<ModalStore>(set => ({
  isOpen: false,
  content: null,
  bottom: null,
  backButton: false,
  openModal: () => set({isOpen: true}),
  closeModal: () => set({isOpen: false}),
  setContent: content => set({content}),
  setBottom: bottom => set({bottom}),
  setTitle: title => set({title}),
  setBackButton: value => set({backButton: value}),
  backButtonOnClick: callback => {
    if (typeof callback === 'function') {
      callback();
    }
  },
}));
