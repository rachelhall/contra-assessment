import cx from 'classnames';
import React, { useContext, useEffect } from 'react';
import { ModalContext } from '@/providers/ModalProvider';
import { useKeyPress } from '@/utils';
import ModalContent from '../ModalContent';
import styles from './Modal.module.css';

type IProps = {};

export const Modal: React.FC<IProps> = () => {
  const { handleModal, isOpen } = useContext(ModalContext);
  const escapePressed = useKeyPress('Escape');

  useEffect(() => {
    if (isOpen && escapePressed) {
      handleModal();
    }
  }, [escapePressed, handleModal, isOpen]);

  const modalClass = cx(styles['modal'], !isOpen && styles['modal-closed']);
  return (
    <div className={modalClass}>
      <ModalContent />
      <div
        className={styles['modal-overlay']}
        onClick={() => handleModal()}
        onKeyDown={() => handleModal()}
        role="button"
        tabIndex={0}
      />
    </div>
  );
};

export default Modal;
