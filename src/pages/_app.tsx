import "../styles/globals.scss";
import type { AppProps } from "next/app";
import Layout from ".";
import Head from "next/head";
import { JSX as LocalJSX} from '@ionic/core'
import {JSX as IoniconsJSX} from 'ionicons'
import { HTMLAttributes, ReactText, useEffect } from 'react'
import { defineCustomElements as ionDefineCustomElements } from '@ionic/core/loader';
/* Core CSS required for Ionic components to work properly */
import '@ionic/core/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/core/css/normalize.css';
import '@ionic/core/css/structure.css';
import '@ionic/core/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/core/css/padding.css';
import '@ionic/core/css/float-elements.css';
import '@ionic/core/css/text-alignment.css';
import '@ionic/core/css/text-transformation.css';
import '@ionic/core/css/flex-utils.css';
import '@ionic/core/css/display.css';

type ToReact<T> = {
  [P in keyof T]?: T[P] & Omit<HTMLAttributes<Element>, 'className'> & {
    class?: string;
    key?: ReactText;
  }
}

declare global {
  export namespace JSX {
    interface IntrinsicElements extends ToReact<LocalJSX.IntrinsicElements & IoniconsJSX.IntrinsicElements> {}
  }
}

export default function App({ Component, pageProps }: AppProps) {
  useEffect(() => {
    ionDefineCustomElements(window)
  })

  return (
    <Layout>
      <Head>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta
          property="og:description"
          content="Sustainable Development With Javascript"
        />
        <meta property="og:image:type" content="image/png" />
        <meta property="og:site_name" content="YOUTUBE" />
        <meta property="og:type" content="website" />
        <title>Youtube</title>
      </Head>
      <Component {...pageProps} />
    </Layout>
  );
}
