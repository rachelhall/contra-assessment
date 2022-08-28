/* eslint-disable canonical/filename-match-exported */
import { type AppProps } from 'next/app';
import { ModalProvider } from '@/providers/ModalProvider';

import '../styles/global.css'

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <ModalProvider>
      <Component {...pageProps} />
    </ModalProvider>
  );
};

export default App;
