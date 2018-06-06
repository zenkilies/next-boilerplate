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

export default Layout;
