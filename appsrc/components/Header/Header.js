import {connect} from "react-redux";
import Link from "next/link";
import React from "react";

const Header = ({isRouting}) => (
  <div className="container mb-2 mt-2">
    <Link href="/">
      <a className="mr-2">Home</a>
    </Link>

    <Link href="/about">
      <a className="mr-2">About</a>
    </Link>

    {isRouting && (<a href="#">Loading...</a>)}
  </div>
);

function mapStateToProps(state) {
  const {isRouting} = state;
  return {isRouting};
}

export default connect(mapStateToProps, null)(Header);
