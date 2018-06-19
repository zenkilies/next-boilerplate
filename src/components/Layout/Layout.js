import PropTypes from "prop-types";
import React from "react";

import {Header} from "./../../components";

import "../../styles/index.scss";

class Layout extends React.Component {

  render() {

    return (
      <div className="container mt-5">

        <Header/>

        {this.props.children}

      </div>
    );

  }

}

Layout.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node)
  ])
};

export default Layout;
