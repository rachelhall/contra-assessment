import { useRef, useEffect, useState } from 'react';
import { createPortal } from 'react-dom';

export const ClientOnlyPortal = ({
  children,
  selector,
}: {
  children: JSX.Element;
  selector: string;
}) => {
  const ref = useRef();
  const [mounted, setMounted] = useState(false);

  const domNode = document.querySelector(selector);

  useEffect(() => {
    if (domNode) {
      ref.current = domNode;
    }

    setMounted(true);
  }, [domNode, selector]);

  return mounted ? createPortal(children, ref.current) : null;
};
