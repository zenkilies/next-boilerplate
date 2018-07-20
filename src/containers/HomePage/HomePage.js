import fetch from "isomorphic-unfetch";

import Link from "next/link";
import PropTypes from "prop-types";
import React from "react";

import {Layout} from "./../../components";

/*eslint no-console: "off"*/

class HomePage extends React.Component {

  renderShow(id, title) {

    return (
      <li key={id}>
        <Link as={`/post/${id}`} href={`/post?id=${id}`}>
          <a>{title}</a>
        </Link>
      </li>
    );

  }

  render() {

    return (
      <Layout className="container mt-5">
        <h1>My Blog</h1>
        <ul>
          {this.props.shows.map(record => this.renderShow(record.show.id, record.show.name))}
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

HomePage.propTypes = {
  shows: PropTypes.arrayOf(PropTypes.object)
};

export default HomePage;
