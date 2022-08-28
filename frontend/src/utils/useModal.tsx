import React, { useState } from 'react';
import { Modal } from '@/styleComponents/Modal';
import { Portal } from '../HOC/Portal';

export const useModal = () => {
  const handleModal = (content?: JSX.Element) => {
    document.body.style.overflow = 'unset';

    if (content && typeof window !== 'undefined') {
      document.body.style.overflow = 'hidden';

      return (
        <Portal>
          <Modal content={content} />
        </Portal>
      );
    }
  };

  return {
    handleModal,
  };
};
