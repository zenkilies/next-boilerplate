import App, {Container} from "next/app";
import React from "react";
import Router from "next/router";

class MyApp extends App {
  static async getInitialProps({Component, ctx}) {
    let pageProps = {};

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }

    return {pageProps};
  }

  constructor(props) {
    super(props);
    Router.events.on("routeChangeStart", routeChangeStart);
    Router.events.on("routeChangeComplete", routeChangeComplete);
  }

  render() {
    const {Component, pageProps} = this.props;

    return (
      <Container>
        <Component {...pageProps} />
      </Container>
    );
  }
}

export default MyApp;

/**
 * @param {string} url
 */
function routeChangeStart(url) {
  // TODO: Custom event goes here...
}

/**
 * @param {string} url
 */
function routeChangeComplete(url) {
  // TODO: Custom event goes here...
}
