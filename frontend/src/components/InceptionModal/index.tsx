import { useContext } from 'react';
import { ModalContext } from '@/providers/ModalProvider';

type TProps = {};

export const InceptionModal: React.FC<TProps> = () => {
  const { handleModal } = useContext(ModalContext);
  return (
    <div>
      <h1>Inception Modal</h1>
      <button onClick={() => handleModal(<p>some content</p>)} type="button">
        Open Modal
      </button>
    </div>
  );
};
