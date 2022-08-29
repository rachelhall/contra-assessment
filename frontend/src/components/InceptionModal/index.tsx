import { Heading } from '@/styleComponents/Heading';
import { useModal } from '@/utils/useModal';
import styles from './InceptionModal.module.css';

type TProps = {};

export const InceptionModal: React.FC<TProps> = () => {
  const { handleModal, modal } = useModal({
    content: <InceptionModal />,
    heading: 'This is a modal heading',
  });
  return (
    <div className={styles['InceptionModal']}>
      <Heading size="regular">Inception Modal</Heading>
      <button onClick={() => handleModal()} type="button">
        Open Modal
      </button>

      {modal}
    </div>
  );
};
