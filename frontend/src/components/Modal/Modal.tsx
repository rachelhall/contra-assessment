import React, { useEffect } from 'react';
import { useKeyPress } from '@/utils';

import './Modal.scss';
import ModalContent from '../ModalContent';

interface IProps  {
  closeModal: () => void;
};

export const Modal: React.FC<IProps> = ({ closeModal }) => {
  const escPressed = useKeyPress('ESC');

  const handleOverlayKeyEvent = () => {
    if (escPressed) {
      closeModal();
    }
  };

  useEffect(()=> handleOverlayKeyEvent(), [escPressed])

  return (
    <div className="Modal">
      <ModalContent
      
        closeModal={closeModal}
        
      />
      <div
        className="Modal-overlay"
        onKeyDown={handleOverlayKeyEvent}
        tabIndex={0}
        role='dialog'
        onClick={() => closeModal()}
      />
    </div>
  );
};

export default Modal;
