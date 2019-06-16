import * as ReactGA from "react-ga";
import React from "react";
import Router from "next/router";

const TRACKING_CODE = "";

class AnalyticsInjector extends React.Component {
  constructor(props) {
    super(props);
    registerGoogleAnalytics();
    registerRouteChangeComplete();
  }

  render() {
    return null;
  }
}

export default AnalyticsInjector;

function registerGoogleAnalytics() {
  if (typeof window !== "undefined") {
    ReactGA.initialize(TRACKING_CODE);
    ReactGA.pageview(window.location.pathname + window.location.search);
  }
}

function registerRouteChangeComplete() {
  Router.events.on("routeChangeComplete", function () {
    if (typeof window !== "undefined") {
      ReactGA.pageview(window.location.pathname + window.location.search);
    }
  });
}
