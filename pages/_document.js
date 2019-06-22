import Document, {Head, Main, NextScript} from "next/document";
import React from "react";

export default class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return {...initialProps}
  }

  render() {
    return (
      <html>
      <Head>
        <link rel="icon" type="image/png" href="/static/favicon.png"/>
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no"/>
      </Head>
      <body>
      <Main/>
      <NextScript/>
      </body>
      </html>
    )
  }
}
