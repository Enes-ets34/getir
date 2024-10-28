export interface ModalStore {
  isOpen: boolean;
  backButton?: boolean;
  openModal: () => void;
  closeModal: () => void;
  backButtonOnClick: (callback: () => void) => void;
  content: React.ReactNode;
  bottom: React.ReactNode;
  title?: string | null;
  setContent: (content: React.ReactNode) => void;
  setBottom: (bottom: React.ReactNode) => void;
  setTitle: (title: string) => void;
  setBackButton: (backButton: boolean) => void;
}
