import { useModal } from "../../hooks/useModal";
import { Backdrop } from "./Backdrop";
import { Modal } from "./Modal";

export const ModalWithBackdrop = () => {
  const { isModalOpen } = useModal();
  return (
    <>
      {isModalOpen && <Modal />}
      {isModalOpen && <Backdrop />}
    </>
  );
};
