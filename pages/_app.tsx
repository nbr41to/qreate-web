import type { AppProps /*, AppContext */ } from 'next/app';
import { Layout } from '../src/layout';

import '../styles/globals.css';

const MyApp = ({ Component, pageProps }: AppProps): JSX.Element => {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
};

export default MyApp;
