import React from "react";

import Header from "./../Header/Header";

import "./../../styles/main.scss";

class Layout extends React.Component {
  render() {
    const {children, ...props} = this.props;

    return (
      <section {...props}>
        <Header/>
        {children}
      </section>
    );
  }
}

export default Layout
