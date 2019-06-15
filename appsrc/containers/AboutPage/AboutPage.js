import Head from "next/head";
import React from "react";

import {Layout} from "./../../components";

const AboutPage = () => (
  <Layout>
    <Head>
      <title>About - TV Shows</title>
    </Head>

    <div className="container">
      <h4>About</h4>
      <p>This is About Page.</p>
    </div>
  </Layout>
);

export default AboutPage;
