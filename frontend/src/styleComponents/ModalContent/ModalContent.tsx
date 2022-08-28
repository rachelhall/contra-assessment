import React from 'react';
import CloseButton from '../CloseModalButton';
import styles from './ModalContent.module.css';

type IProps = {
  handleModal: (content?: JSX.Element) => void;
  modalContent: JSX.Element;
};

export const ModalContent: React.FC<IProps> = ({ handleModal, modalContent } ) => {

  return (
    <div className={styles['ModalContent']}>
      <CloseButton handleClose={handleModal} />
      <div className="ModalContent-inner">{modalContent}</div>
    </div>
  );
};

export default ModalContent;
