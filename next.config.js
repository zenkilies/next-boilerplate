const webpack = require("webpack");

require("dotenv").config();

const withSass = require('@zeit/next-sass');

module.exports = withSass({
  webpack: (config) => {

    config.plugins.push(
      new webpack.DefinePlugin({
        "process.env.SERVICE_BASE": JSON.stringify(process.env.SERVICE_BASE)
      })
    );

    return config;

  }
});
