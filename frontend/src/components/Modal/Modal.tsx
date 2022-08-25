import React from 'react';

import './Modal.scss';

export const Modal: React.FC = () => {
  const closeModal = () => {};

  return (
    <div className="Modal">
      {/* <ModalContent
        modal={modal}
        closeModal={closeModal}
        component={component}
      /> */}
      <div className="Modal-overlay" onClick={() => closeModal()} />
    </div>
  );
};

export default Modal;
