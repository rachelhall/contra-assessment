import { ESystemColor } from '@/styles/ESystemColor';
import styles from './Heading.module.css';

type TProps = {
  ariaLabelID?: string;
  children: string;
  color?: ESystemColor;
  size?: 'large' | 'regular' | 'small';
};
export const Heading: React.FC<TProps> = ({
  ariaLabelID,
  color = ESystemColor.blue,
  children,
  size = 'regular',
}) => {
  const fontSize =
    size === 'small' ? '2rem' : size === 'large' ? '4rem' : '3rem';

  return (
    <h1
      className={styles['Heading']}
      id={ariaLabelID}
      style={{ color, fontSize }}
    >
      {children}
    </h1>
  );
};
