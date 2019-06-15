import Link from "next/link";
import React from "react";

const Header = () => (
  <div className="container mb-2 mt-2">
    <Link href="/">
      <a className="mr-2">Home</a>
    </Link>

    <Link href="/about">
      <a>About</a>
    </Link>
  </div>
);

export default Header;
