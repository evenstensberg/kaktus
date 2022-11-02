"use strict";

const express = require("express");
const app = express();
const _app_folder = "dist/kaktus";

app.use("/", express.static(_app_folder, { maxAge: 60000 }));

app.get("*", (req, res, next) => {
  res.status(200).sendFile(`/`, { root: _app_folder });
});
// Start the server
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
  console.log("Press Ctrl+C to quit.");
});
