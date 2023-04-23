"use strict";

const express = require("express");
const morgan = require("morgan");

const port = 8889

express()
  .use(morgan("tiny"))
  .use(express.json())


  .use(express.static("public"))

  // add new endpoints here 👇

  // add new endpoints here ☝️

  // this is our catch all endpoint.
  .get("*", (req, res) => {
    res.status(404).json({
      status: 404,
      message: "This is obviously not what you are looking for.",
    });
  })

  .listen(port, () => console.log(`Listening on port ${port}`));
