import React from 'react';
import Document, {Head, Main, NextScript} from 'next/document'

export default class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return {...initialProps}
  }

  render() {
    return (
      <html>
      <Head>
        <link rel="icon" href="../static/logo.png"/>
        {/*<link rel="stylesheet" href="https://unpkg.com/bulmaswatch/darkly/bulmaswatch.min.css"/>*/}
        <meta name="viewport" content="initial-scale=1.0, width=device-width"/>
      </Head>
      <body className="custom_class">
      <Main/>
      <NextScript/>
      </body>
      </html>
    )
  }
}
