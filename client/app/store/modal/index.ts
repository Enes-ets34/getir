import {create} from 'zustand';

export const useModalStore = create<ModalStore>((set) => ({
  isOpen: false,
  content: null,
  openModal: () => set({ isOpen: true }),
  closeModal: () => set({ isOpen: false }),
  setContent: (content) => set({ content }),
  setTitle: (title) => set({ title }),
}));