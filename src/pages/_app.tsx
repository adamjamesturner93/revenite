import '../../styles/globals.css';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import React, { useState } from 'react';
import { useBreakpoint, AuthProvider } from '../hooks';
import { Layout } from '../layout';

const App: React.FC<AppProps> = ({ Component, pageProps, router }) => {
  const [isSidebarClosed, setSidebarClosed] = useState(true);
  const isStatic = useBreakpoint('sm');

  return (
    <React.Fragment>
      <Head>
        <meta charSet="utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          name="description"
          content="Revenite is an application for people with amputation(s) to encourage long term physical health and scar management"
        />
        <meta name="keywords" content="amputation, rehabilitation, health, rehab, amputee" />
        <title>Revenite</title>

        <link rel="manifest" href="/manifest.json" />

        <meta name="theme-color" content="#5B21B6" />
        <meta name="description" content="Revenite" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <AuthProvider>
        <Layout
          router={router}
          title="Home"
          isSidebarClosed={isSidebarClosed}
          setSidebarClosed={setSidebarClosed}
          isStatic={isStatic}
        >
          <Component {...pageProps} />
        </Layout>
      </AuthProvider>
    </React.Fragment>
  );
};
export default App;
