export type ModalContextProps = {
  isModalOpen: boolean;
  openModal: () => void;
  closeModal: () => void;
  chooseDiet: (diet: string) => void;
  diet?: string;
};
