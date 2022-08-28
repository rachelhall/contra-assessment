import cx from 'classnames';
import React, {  useEffect } from 'react';
import { useKeyPress } from '@/utils';
import ModalContent from '../ModalContent';
import styles from './Modal.module.css';

type IProps = {
  handleModal: (content?: JSX.Element) => void;
  isOpen: boolean;
  modalContent?: JSX.Element
};

export const Modal: React.FC<IProps> = ({handleModal, isOpen, modalContent }) => {

  const escapePressed = useKeyPress('Escape');

  useEffect(() => {
    if (isOpen && escapePressed) {
      handleModal();
    }
  }, [escapePressed, handleModal, isOpen]);

  const modalClass = cx(styles['modal'], !isOpen && styles['modal-closed']);
  return (
    <div className={modalClass}>
      <ModalContent  handleModal={handleModal} modalContent={modalContent} />
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
