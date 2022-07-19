import { createContext, useCallback, useMemo, useState } from 'react';
import Modal from '@/styleComponents/Modal';

type IProps = {
  children: JSX.Element;
};

type TModalContext = {
  handleModal: (content?: JSX.Element) => void;
  isOpen?: boolean;
  modalContent?: JSX.Element;
};

const ModalContext = createContext<TModalContext>({
  handleModal: () => {},
  isOpen: false,
});
const ModalProvider: React.FC<IProps> = (props) => {
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

  const { children } = props;

  return (
    <ModalContext.Provider
      value={useMemo(
        () => ({ handleModal, isOpen, modalContent }),
        [handleModal, isOpen, modalContent]
      )}
    >
      {/* <Modal /> */}
      {children}
    </ModalContext.Provider>
  );
};

export { ModalContext, ModalProvider };
