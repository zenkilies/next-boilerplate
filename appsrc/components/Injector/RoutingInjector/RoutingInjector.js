import {bindActionCreators} from "redux";
import {connect} from "react-redux";
import React from "react";
import Router from "next/router";

import {toggleRouting} from "../../../states/actions";

class RoutingInjector extends React.Component {
  constructor(props) {
    super(props);

    registerRouteChangeStart({toggleRouting: props.toggleRouting});
    registerRouteChangeComplete({toggleRouting: props.toggleRouting});
  }

  render() {
    return null;
  }
}

const mapDispatchToProps = function (dispatch) {
  return bindActionCreators({toggleRouting}, dispatch);
};

export default connect(
  null, // mapStateToProps
  mapDispatchToProps, // mapDispatchToProps
)(RoutingInjector);

/**
 * @param {object} action
 */
function registerRouteChangeStart(action) {
  Router.events.on("routeChangeStart", function (url) {
    action.toggleRouting();
  });
}

/**
 * @param {object} action
 */
function registerRouteChangeComplete(action) {
  Router.events.on("routeChangeComplete", function (url) {
    action.toggleRouting();
  });
}
