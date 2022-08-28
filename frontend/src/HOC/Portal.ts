import { useRef, useEffect, useState } from 'react';
import { createPortal } from 'react-dom';

export const Portal = ({ children }: { children: JSX.Element }) => {
  const ref = useRef<JSX.Element>();
  const [mounted, setMounted] = useState(false);

  const portalDiv = document.querySelector('#myportal');

  useEffect(() => {
    ref.current = portalDiv;

    setMounted(true);
  }, [portalDiv]);

  return mounted && ref.current ? createPortal(children, ref.current) : null;
};
