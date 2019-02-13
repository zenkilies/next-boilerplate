import fetch from "isomorphic-unfetch";

import Link from "next/link";
import React from "react";

import {Layout} from "./../../components";

const IndexPage = (props) => (
  <Layout>
    <div className="container">
      <h4>Batman TV Shows</h4>
      <ul>
        {props.records.map(({show}) => (
          <li key={show.id}>
            <Link as={`/post/${show.id}`} href={`/post?id=${show.id}`}>
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
