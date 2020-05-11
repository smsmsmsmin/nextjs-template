import * as React from 'react';
import App from 'next/app';
import Head from 'next/head';

import '../styles/reset.css';

export default class MyApp extends App {
  public render() {
    const { Component, pageProps } = this.props;

    return (
      <>
        <Head>
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0"
          />
          <title>NEXTJS TEMPLATE</title>
        </Head>
        <Component {...pageProps} />
      </>
    );
  }
}
