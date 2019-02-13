const express = require("express");
const next = require("next");

const app = next({
  dev: process.env.NODE_ENV !== "production"
});
const handle = app.getRequestHandler();

app.prepare()
  .then(() => {
    const server = express();

    server.get("/post/:id", (req, res) => {
      const actualPage = "/post";
      const queryParams = {
        id: req.params.id
      };

      app.render(req, res, actualPage, queryParams);
    });

    server.get("*", (req, res) => {
      return handle(req, res);
    });

    server.listen(process.env.PORT || 3000, (err) => {
      if (err) throw err;
      console.log(`> Ready on http://localhost:${process.env.PORT || 3000}.`);
    });
  })
  .catch((err) => {
    console.error(err.stack);
    process.exit(1);
  });
