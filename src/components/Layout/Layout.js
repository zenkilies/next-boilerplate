import PropTypes from "prop-types";
import React from "react";

import {Header} from "./../../components";

import "../../styles/index.scss";

class Layout extends React.Component {

  render() {

    const {children, ...moreProps} = this.props;

    return (
      <section {...moreProps}>

        <Header/>

        {children}

      </section>
    )

  }

}

Layout.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node)
  ])
};

export default Layout;
