import {withRouter} from "next/router";
import fetch from "isomorphic-unfetch";

import React from "react";

import {Layout} from "./../../components";

const PostPage = (props) => (
  <Layout>
    <div className="container">
      <div className="row">
        <div className="col-lg-9 col-md-8 col-sm-6 col-12">
          <h4>{props.show.name}</h4>
          <p>{props.show.summary.replace(/<[/]?p>/g, '')}</p>
        </div>

        <div className="col-lg-3 col-md-4 col-sm-6 col-12 text-center">
          <img src={props.show.image.medium} className="img-thumbnail"/>
        </div>
      </div>
    </div>
  </Layout>
);

PostPage.getInitialProps = async function (context) {
  const {id} = context.query;

  const res = await fetch(`https://api.tvmaze.com/shows/${id}`);
  const data = await res.json();

  console.log(`Fetch show: ${data.name}`);

  return {
    show: data
  };
};

export default withRouter(PostPage);
