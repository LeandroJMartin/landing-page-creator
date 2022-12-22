import React from 'react';
import '../styles/globals.css';
import type { AppProps } from 'next/app';
import CLPLayout from '../components/layout/Layout';
import ContentProvider from '../components/context/ContextData';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ContentProvider>
      <CLPLayout>
        <Component {...pageProps} />
      </CLPLayout>
    </ContentProvider>
  );
}

export default MyApp;
