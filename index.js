const express = require("express");
const next = require("next");

global["__IS_SERVER__"] = true;

/*eslint no-console: "off"*/

require("dotenv").config();

const app = next({
  dev: process.env.NODE_ENV !== "production"
});

const handle = app.getRequestHandler();

app.prepare()
  .then(function () {

    const server = express();

    server.get("/post/:id", async function (req, res) {
      await app.render(req, res, "/post", {id: req.params["id"]});
    });

    server.get("*", function (req, res) {
      return handle(req, res);
    });

    server.listen(process.env.PORT || 3000, function (error) {

      if (error)

        throw error;

      console.log("> Ready on port", process.env.PORT || 3000);

    });

  })
  .catch(function (error) {
    throw error;
  });
