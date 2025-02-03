import { ReactNode, useEffect, useRef } from 'react'
import Button from '../Button/Button';

type ModalProps = {
  children: ReactNode,
  isOpen: boolean,
  closeModal: () => void
}

const Modal = ({ isOpen, closeModal, children }: ModalProps) => {
  const ref = useRef<HTMLDialogElement | null>(null);

  useEffect(() => {
    if (isOpen) {
      ref.current?.showModal();
    } else {
      ref.current?.close();
    }
  }, [isOpen]);

  return (
    <dialog
      style={{
        alignSelf: "center",
        justifySelf: "center",
        backgroundColor: "#1D1E1F",
        padding: "24px",
        borderRadius: "12px"
      }}
      ref={ref}
      onCancel={closeModal}
    >
      <img style={{width: "56px", paddingBottom: "1rem"}} loading="eager" src="error.png" />
      
      {children}
      <div style={{ display: "flex", justifyContent: "flex-end", paddingTop: "2rem" }}>
        <Button label='Close' onClick={closeModal} />
      </div>
    </dialog>
  );
}

export default Modal
