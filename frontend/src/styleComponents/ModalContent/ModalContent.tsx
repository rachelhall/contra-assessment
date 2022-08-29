import React from 'react';
import CloseButton from '../CloseModalButton';
import { Heading } from '../Heading';
import styles from './ModalContent.module.css';

type IProps = {
  ariaLabelID?: string;
  handleModal: (content?: JSX.Element) => void;
  heading?: string;
  modalContent?: JSX.Element;
};

export const ModalContent: React.FC<IProps> = ({
  ariaLabelID,
  handleModal,
  heading,
  modalContent,
}) => {
  return (
    <div className={styles['ModalContent']}>
      {heading && <Heading ariaLabelID={ariaLabelID}>{heading}</Heading>}
      <CloseButton handleClose={handleModal} />
      <div className="ModalContent-inner">{modalContent}</div>
    </div>
  );
};

export default ModalContent;
