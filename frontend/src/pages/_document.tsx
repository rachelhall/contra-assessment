// eslint-disable-next-line canonical/filename-match-exported
import { Html, Head, Main, NextScript } from 'next/document';

const Document = () => {
  return (
    <Html>
      <Head />
      <body>
        <Main />
        {/* Here we will mount our modal portal */}
        <div id="modal" />
        <NextScript />
      </body>
    </Html>
  );
};

export default Document;
