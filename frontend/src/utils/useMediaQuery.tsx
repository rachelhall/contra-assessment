import { useEffect, useState } from 'react';

export enum EMediaBreakPoint {
  desktop = '(min-width: 960px)',
  mobile = '(min-width: 600px)',
  tablet = '(min-width: 768px) ',
}

export const useMediaQuery = (query: EMediaBreakPoint) => {
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    const media = window.matchMedia(query);
    if (media.matches !== matches) {
      setMatches(media.matches);
    }

    const listener = () => setMatches(media.matches);

    window.addEventListener('resize', listener);
    return () => window.removeEventListener('resize', listener);
  }, [matches, query]);

  return matches;
};
