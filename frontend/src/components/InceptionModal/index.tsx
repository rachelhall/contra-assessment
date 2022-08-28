import { useContext } from 'react';
import { ModalContext } from '@/providers/ModalProvider';
import { useModal } from '@/utils/useModal';

type TProps = {};

export const InceptionModal: React.FC<TProps> = () => {
  // const { handleModal } = useContext(ModalContext);
  const { handleModal } = useModal();
  return (
    <div>
      <h1>Inception Modal</h1>
      {handleModal(<p>Some contetn</p>)}
    </div>
  );
};
