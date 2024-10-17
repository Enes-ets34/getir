import {create} from 'zustand';

export const useModalStore = create<ModalStore>((set) => ({
  isOpen: false,
  content: null,
  bottom:null,
  openModal: () => set({ isOpen: true }),
  closeModal: () => set({ isOpen: false }),
  setContent: (content) => set({ content }),
  setBottom: (bottom) => set({ bottom }),
  setTitle: (title) => set({ title }),
}));