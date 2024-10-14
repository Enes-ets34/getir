interface ModalStore {
  isOpen: boolean;
  openModal: () => void;
  closeModal: () => void;
  content: React.ReactNode;
  title?: string;
  setContent: (content: React.ReactNode) => void;
  setTitle: (title: string) => void;
}
