import fetch from "isomorphic-unfetch";

import PropTypes from "prop-types";
import React from "react";

import {Layout} from "./../../components";

/*eslint no-console: "off"*/

class PostPage extends React.Component {

  render() {

    const {show} = this.props;

    return (
      <Layout>
        <h1>{show.name}</h1>
        <p>{show.summary.replace(/<[/]?p>/g, "")}</p>
        <img src={show.image["medium"]}/>
      </Layout>
    );

  }

}

PostPage.getInitialProps = async function (context) {

  const {id} = context.query;

  const response = await fetch(`https://api.tvmaze.com/shows/${id}`);

  const show = await response.json();

  console.log(`Fetched show: ${show.name}`);

  return {
    show: show
  };

};

PostPage.propTypes = {
  show: PropTypes.object
};

export default PostPage;
