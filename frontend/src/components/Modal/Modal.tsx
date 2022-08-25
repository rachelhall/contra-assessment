import React, { useRef } from 'react';
import { useKeyPress } from '@/utils';

import './Modal.scss';

type IProps = {
  toggleModal: () => void;
};

export const Modal: React.FC<IProps> = ({ toggleModal }) => {
  const escPressed = useKeyPress('ESC');

  const handleOverlayKeyEvent = (e) => {
    if (escPressed) {
      toggleModal();
    }
  };

  return (
    <div className="Modal">
      {/* <ModalContent
        modal={modal}
        closeModal={closeModal}
        component={component}
      /> */}
      <div
        onKeyDown={handleOverlayKeyEvent}
        tabIndex={0}
        role={}
        className="Modal-overlay"
        onClick={() => closeModal()}
      />
    </div>
  );
};

export default Modal;
