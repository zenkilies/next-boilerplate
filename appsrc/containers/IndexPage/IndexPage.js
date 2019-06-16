import fetch from "isomorphic-unfetch";

import Head from "next/head";
import Link from "next/link";
import React from "react";

import {Layout} from "../../components";

const IndexPage = (props) => (
  <Layout>
    <Head>
      <title>TV Shows</title>
    </Head>

    <div className="container">
      <h4>Batman TV Shows</h4>
      <ul>
        {props.records.map(({show}) => (
          <li key={show.id}>
            <Link as={`/show/${show.id}`} href={`/show?id=${show.id}`}>
              <a>{show.name}</a>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  </Layout>
);

IndexPage.getInitialProps = async function () {
  const res = await fetch("https://api.tvmaze.com/search/shows?q=batman");
  const data = await res.json();

  console.log(`Show data fetched. Count: ${data.length}`);

  return {
    records: data
  };
};

export default IndexPage;
