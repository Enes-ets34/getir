interface ModalStore {
  isOpen: boolean;
  openModal: () => void;
  closeModal: () => void;
  content: React.ReactNode;
  bottom: React.ReactNode;
  title?: string;
  setContent: (content: React.ReactNode) => void;
  setBottom: (bottom: React.ReactNode) => void;
  setTitle: (title: string) => void;
}
