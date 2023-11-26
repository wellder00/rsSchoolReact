import '@/styles/globals.scss';
import type { AppProps } from 'next/app';
import { Provider } from 'react-redux';
import { wrapper } from '@/lib/redux/';
import React from 'react';

export function App({ Component, ...restProps }: AppProps) {
  const { store, props } = wrapper.useWrappedStore(restProps);
  const { pageProps } = props;

  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  );
}

export default App;
