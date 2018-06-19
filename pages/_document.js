import Document, {Head, Main, NextScript} from "next/document";
import React from "react";

export default class MyDocument extends Document {

  render() {

    return (
      <html>

      <Head>
        <meta charSet="utf-8"/>
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no"/>
        <link rel="stylesheet" href={"/_next/static/style.css?v=" + getVersion()}/>
        <title>NextJS Boilerplate by Zenkilies Vildcent</title>
      </Head>

      <body>
      <Main/>
      <NextScript/>
      </body>

      </html>
    );

  }

}

/**
 * Return or generate the version number for
 * static assets.
 *
 * @returns {string | undefined}
 */
function getVersion() {

  if (process.env.STATIC_VERSION)

    return process.env.STATIC_VERSION;

  process.env.STATIC_VERSION = "" + Date.now();

  return process.env.STATIC_VERSION;

}
