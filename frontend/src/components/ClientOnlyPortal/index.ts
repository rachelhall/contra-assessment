import React, { useRef, useEffect, useState } from 'react';
import { createPortal } from 'react-dom';

interface IProps
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLElement>,
    HTMLElement
  > {
  children: JSX.Element;
  id: string;
  section: keyof JSX.IntrinsicElements;
  selector: string;
}

const ClientOnlyPortal = ({
  children,
  id,
  section,
  selector,
  ...rest
}: IProps) => {
  const element = document.createElement(section);

  const ref: React.RefObject<HTMLElement> = useRef(element);

  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const current = ref.current as HTMLElement;

    current.setAttribute('id', id);
    current.setAttribute('class', section);

    Object.keys(rest).forEach((attribute) => {
      const value: keyof typeof rest = rest[attribute as keyof typeof rest];
      current.setAttribute(attribute, value);
    });

    document.body.appendChild(current);

    // eslint-disable-next-line consistent-return
    return () => {
      document.body.removeChild(current);
    };
  }, [ref, id, selector, section, rest]);

  return createPortal(children, ref.current);
};

ClientOnlyPortal.defaultProps = {
  section: 'section',
};

export default ClientOnlyPortal;
