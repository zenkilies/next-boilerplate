import fetch from "isomorphic-unfetch";

import Link from "next/link";
import React from "react";

import {Layout} from "./../components";

class HomePage extends React.Component {

  render() {

    return (
      <Layout>
        <h1>My Blog</h1>
        <ul>
          {this.props.shows.map(record => (
            <PostLink key={record.show.id} id={record.show.id} title={record.show.name}/>
          ))}
        </ul>
      </Layout>
    );

  }

}

HomePage.getInitialProps = async function () {

  const response = await fetch("https://api.tvmaze.com/search/shows?q=batman");

  const data = await response.json();

  console.log(`Show data fetch, total ${data.length}.`);

  return {
    shows: data
  };

};

export default HomePage;

const PostLink = (props) => (
  <li>
    <Link as={`/post/${props.id}`} href={`/post?id=${props.id}`}>
      <a>{props.title}</a>
    </Link>
  </li>
);
