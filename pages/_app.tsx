import type { AppProps } from 'next/app';
import { Provider } from 'react-redux';
import { SWRConfig } from 'swr';
import '../components/loaders/styles/spinner.css';
import { fetcher } from '../lib/helpers/fetcher.helper';
import { store } from '../lib/store';
import '../styles/globals.css';

import Init from '../components/_Init';
import { NextPageWithLayout } from './page';
type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

export default function App({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout = Component.getLayout ?? ((page) => page);

  return (
    <>
      <Provider store={store}>
        <Init />
        <SWRConfig
          value={{
            shouldRetryOnError: false,
            revalidateOnFocus: false,
            fetcher,
          }}
        >
          {getLayout(<Component {...pageProps} />)}
        </SWRConfig>
      </Provider>
    </>
  );
}
