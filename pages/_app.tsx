import type { AppProps } from 'next/app';
import { SWRConfig } from 'swr';
import { fetcher } from '../lib/helpers/fetcher.helper';
import '../styles/globals.css';
import { NextPageWithLayout } from './page';
type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

export default function App({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout = Component.getLayout ?? ((page) => page);

  return (
    <>
      <SWRConfig
        value={{
          shouldRetryOnError: false,
          revalidateOnFocus: false,
          fetcher,
        }}
      >
        {getLayout(<Component {...pageProps} />)}
      </SWRConfig>
    </>
  );
}
