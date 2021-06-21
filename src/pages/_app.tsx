import "../../styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";
import React, { useState } from "react";
import { useBreakpoint, AuthProvider } from "../hooks";
import { Layout } from "../layout";
import { Helmet } from "react-helmet";

function MyApp({ Component, pageProps }: AppProps) {
  const [isSidebarClosed, setSidebarClosed] = useState(false);
  const isStatic = useBreakpoint("sm");

  return (
    <React.Fragment>
      <Head>
        <meta charSet="utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta
          name="viewport"
          content="width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no"
        />
        <meta name="description" content="Description" />
        <meta name="keywords" content="Keywords" />
        <title>Revenite</title>

        <link rel="manifest" href="/manifest.json" />

        <meta name="theme-color" content="#317EFB" />
        <meta name="description" content="Revenite" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <AuthProvider>
        <Layout
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
}
export default MyApp;
