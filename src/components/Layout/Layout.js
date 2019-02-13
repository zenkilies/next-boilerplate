import React from "react";

import Header from "./../Header/Header";

import "./../../styles/main.scss";

const Layout = (props) => (
  <div>
    <Header/>
    {props.children}
  </div>
);

export default Layout
