import '../../styles/globals.css';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import React, { useEffect, useState } from 'react';
import { useBreakpoint, AuthProvider } from '../hooks';
import { Layout } from '../layout';
import { useRouter } from 'next/router';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';

const App: React.FC<AppProps> = ({ Component, pageProps, router }) => {
  const [isSidebarClosed, setSidebarClosed] = useState(true);
  const isStatic = useBreakpoint('sm');
  const { pathname } = useRouter();

  useEffect(() => {
    setSidebarClosed(true);
  }, [pathname]);

  return (
    <React.Fragment>
      <Head>
        <meta charSet="utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Revenite</title>
        <meta
          name="description"
          content="Revenite is an application for people with amputation(s) to encourage long term physical health and scar management"
        />
        <meta name="keywords" content="amputation, rehabilitation, health, rehab, amputee" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@reveniterehab" />
        <meta name="twitter:creator" content="@AdamJTurner93" />

        <meta property="og:title" content="Revenite" />
        <meta property="og:site_name" content="Revenite" />
        <meta property="og:url" content="https://www.revenite.org" />
        <meta
          property="og:description"
          content="Revenite is an application for people with amputation(s) to encourage long term physical health and scar management"
        />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://www.revenite.org/TwitterCard.png" />

        <link rel="manifest" href="/manifest.json" />

        <meta name="theme-color" content="#5B21B6" />
        <meta name="description" content="Revenite" />
        {/* <link rel="icon" type="image/png" sizes="196x196" href="favicon196.png" /> */}

        <link rel="apple-touch-icon" href="apple-icon-180.png" />

        <meta name="apple-mobile-web-app-capable" content="yes" />

        <link
          rel="apple-touch-startup-image"
          href="apple-splash-dark-2048-2732.png"
          media="(prefers-color-scheme: dark) and (device-width: 1024px) and (device-height: 1366px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)"
        />
        <link
          rel="apple-touch-startup-image"
          href="apple-splash-dark-2732-2048.png"
          media="(prefers-color-scheme: dark) and (device-width: 1024px) and (device-height: 1366px) and (-webkit-device-pixel-ratio: 2) and (orientation: landscape)"
        />
        <link
          rel="apple-touch-startup-image"
          href="apple-splash-dark-1668-2388.png"
          media="(prefers-color-scheme: dark) and (device-width: 834px) and (device-height: 1194px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)"
        />
        <link
          rel="apple-touch-startup-image"
          href="apple-splash-dark-2388-1668.png"
          media="(prefers-color-scheme: dark) and (device-width: 834px) and (device-height: 1194px) and (-webkit-device-pixel-ratio: 2) and (orientation: landscape)"
        />
        <link
          rel="apple-touch-startup-image"
          href="apple-splash-dark-1536-2048.png"
          media="(prefers-color-scheme: dark) and (device-width: 768px) and (device-height: 1024px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)"
        />
        <link
          rel="apple-touch-startup-image"
          href="apple-splash-dark-2048-1536.png"
          media="(prefers-color-scheme: dark) and (device-width: 768px) and (device-height: 1024px) and (-webkit-device-pixel-ratio: 2) and (orientation: landscape)"
        />
        <link
          rel="apple-touch-startup-image"
          href="apple-splash-dark-1668-2224.png"
          media="(prefers-color-scheme: dark) and (device-width: 834px) and (device-height: 1112px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)"
        />
        <link
          rel="apple-touch-startup-image"
          href="apple-splash-dark-2224-1668.png"
          media="(prefers-color-scheme: dark) and (device-width: 834px) and (device-height: 1112px) and (-webkit-device-pixel-ratio: 2) and (orientation: landscape)"
        />
        <link
          rel="apple-touch-startup-image"
          href="apple-splash-dark-1620-2160.png"
          media="(prefers-color-scheme: dark) and (device-width: 810px) and (device-height: 1080px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)"
        />
        <link
          rel="apple-touch-startup-image"
          href="apple-splash-dark-2160-1620.png"
          media="(prefers-color-scheme: dark) and (device-width: 810px) and (device-height: 1080px) and (-webkit-device-pixel-ratio: 2) and (orientation: landscape)"
        />
        <link
          rel="apple-touch-startup-image"
          href="apple-splash-dark-1284-2778.png"
          media="(prefers-color-scheme: dark) and (device-width: 428px) and (device-height: 926px) and (-webkit-device-pixel-ratio: 3) and (orientation: portrait)"
        />
        <link
          rel="apple-touch-startup-image"
          href="apple-splash-dark-2778-1284.png"
          media="(prefers-color-scheme: dark) and (device-width: 428px) and (device-height: 926px) and (-webkit-device-pixel-ratio: 3) and (orientation: landscape)"
        />
        <link
          rel="apple-touch-startup-image"
          href="apple-splash-dark-1170-2532.png"
          media="(prefers-color-scheme: dark) and (device-width: 390px) and (device-height: 844px) and (-webkit-device-pixel-ratio: 3) and (orientation: portrait)"
        />
        <link
          rel="apple-touch-startup-image"
          href="apple-splash-dark-2532-1170.png"
          media="(prefers-color-scheme: dark) and (device-width: 390px) and (device-height: 844px) and (-webkit-device-pixel-ratio: 3) and (orientation: landscape)"
        />
        <link
          rel="apple-touch-startup-image"
          href="apple-splash-dark-1125-2436.png"
          media="(prefers-color-scheme: dark) and (device-width: 375px) and (device-height: 812px) and (-webkit-device-pixel-ratio: 3) and (orientation: portrait)"
        />
        <link
          rel="apple-touch-startup-image"
          href="apple-splash-dark-2436-1125.png"
          media="(prefers-color-scheme: dark) and (device-width: 375px) and (device-height: 812px) and (-webkit-device-pixel-ratio: 3) and (orientation: landscape)"
        />
        <link
          rel="apple-touch-startup-image"
          href="apple-splash-dark-1242-2688.png"
          media="(prefers-color-scheme: dark) and (device-width: 414px) and (device-height: 896px) and (-webkit-device-pixel-ratio: 3) and (orientation: portrait)"
        />
        <link
          rel="apple-touch-startup-image"
          href="apple-splash-dark-2688-1242.png"
          media="(prefers-color-scheme: dark) and (device-width: 414px) and (device-height: 896px) and (-webkit-device-pixel-ratio: 3) and (orientation: landscape)"
        />
        <link
          rel="apple-touch-startup-image"
          href="apple-splash-dark-828-1792.png"
          media="(prefers-color-scheme: dark) and (device-width: 414px) and (device-height: 896px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)"
        />
        <link
          rel="apple-touch-startup-image"
          href="apple-splash-dark-1792-828.png"
          media="(prefers-color-scheme: dark) and (device-width: 414px) and (device-height: 896px) and (-webkit-device-pixel-ratio: 2) and (orientation: landscape)"
        />
        <link
          rel="apple-touch-startup-image"
          href="apple-splash-dark-1242-2208.png"
          media="(prefers-color-scheme: dark) and (device-width: 414px) and (device-height: 736px) and (-webkit-device-pixel-ratio: 3) and (orientation: portrait)"
        />
        <link
          rel="apple-touch-startup-image"
          href="apple-splash-dark-2208-1242.png"
          media="(prefers-color-scheme: dark) and (device-width: 414px) and (device-height: 736px) and (-webkit-device-pixel-ratio: 3) and (orientation: landscape)"
        />
        <link
          rel="apple-touch-startup-image"
          href="apple-splash-dark-750-1334.png"
          media="(prefers-color-scheme: dark) and (device-width: 375px) and (device-height: 667px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)"
        />
        <link
          rel="apple-touch-startup-image"
          href="apple-splash-dark-1334-750.png"
          media="(prefers-color-scheme: dark) and (device-width: 375px) and (device-height: 667px) and (-webkit-device-pixel-ratio: 2) and (orientation: landscape)"
        />
        <link
          rel="apple-touch-startup-image"
          href="apple-splash-dark-640-1136.png"
          media="(prefers-color-scheme: dark) and (device-width: 320px) and (device-height: 568px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)"
        />
        <link
          rel="apple-touch-startup-image"
          href="apple-splash-dark-1136-640.png"
          media="(prefers-color-scheme: dark) and (device-width: 320px) and (device-height: 568px) and (-webkit-device-pixel-ratio: 2) and (orientation: landscape)"
        />
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
      <ToastContainer />
    </React.Fragment>
  );
};
export default App;
