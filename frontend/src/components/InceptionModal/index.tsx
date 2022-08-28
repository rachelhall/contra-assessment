import { Heading } from '@/styleComponents/Heading';
import { useModal } from '@/utils/useModal';

type TProps = {};

export const InceptionModal: React.FC<TProps> = () => {
  const { handleModal, modal } = useModal();
  return (
    <div>
      <Heading>Inception Modal</Heading>
      <button
        onClick={() =>
          handleModal(
            <div>
              <p style={{ color: 'var(--blue)' }}>some other content</p>
              <InceptionModal />
            </div>
          )
        }
        type="button"
      >
        Open Modal
      </button>

      {modal}
    </div>
  );
};
