import { useCallback, useState } from 'react';
import Modal from '@/styleComponents/Modal';

export const useModal = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [modalContent, setModalContent] = useState<JSX.Element>();

  const handleModal = useCallback(
    (content?: JSX.Element) => {
      setIsOpen(!isOpen);
      document.body.style.overflow = 'unset';
      if (content) {
        if (typeof window !== 'undefined') {
          document.body.style.overflow = 'hidden';
        }

        setModalContent(content);
      }
    },
    [isOpen]
  );

  const renderModal = () => {
    return (
      <Modal
        handleModal={handleModal}
        isOpen={isOpen}
        modalContent={modalContent}
      />
    );
  };

  return { handleModal, isOpen, modal: renderModal(), modalContent };
};
