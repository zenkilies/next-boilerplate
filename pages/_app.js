import {Provider} from "react-redux";
import App, {Container} from "next/app";
import React from "react";

import {Injector} from "../appsrc/components";

import withReduxStore from "../appsrc/states/with-redux";

class MyApp extends App {
  constructor(props) {
    super(props);
  }

  render() {
    const {Component, pageProps, reduxStore} = this.props;

    return (
      <Container>
        <Provider store={reduxStore}>
          <Injector.AnalyticsInjector/>
          <Injector.RoutingInjector/>
          <Component {...pageProps} />
        </Provider>
      </Container>
    );
  }
}

export default withReduxStore(MyApp);
