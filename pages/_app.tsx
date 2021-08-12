import type { AppProps /*, AppContext */ } from 'next/app';
import { Layout } from '../src/layout';

import '../styles/reset.css';
import '../styles/globals.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { RecoilRoot } from 'recoil';

const MyApp = ({ Component, pageProps }: AppProps): JSX.Element => {
  return (
    <RecoilRoot>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </RecoilRoot>
  );
};

export default MyApp;
