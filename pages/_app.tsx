import Head from "next/head";
import React from "react";
import "../styles/globals.scss";
import type { AppProps } from "next/app";
// import Amplify, { API, withSSRContext } from "aws-amplify";
// import awsExports from "../aws-exports";
// import { AuthProvider } from "../hooks";
// Amplify.configure({ ...awsExports, ssr: true });

function MyApp({ Component, pageProps }: AppProps) {
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
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* <AuthProvider> */}
      <Component {...pageProps} />
      {/* </AuthProvider> */}
    </React.Fragment>
  );
}
export default MyApp;
