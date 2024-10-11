"use strict";

const express = require("express");
const rateLimit = require("express-rate-limit");
const app = express();
const _app_folder = "dist/kaktus";

const limiter = rateLimit({
	windowMs: 20 * 60 * 1000, // 15 minutes
	limit: 100, // Limit each IP to 100 requests per `window` (here, per 15 minutes).
	standardHeaders: 'draft-7', // draft-6: `RateLimit-*` headers; draft-7: combined `RateLimit` header
	legacyHeaders: false, // Disable the `X-RateLimit-*` headers.
  handler: function (req, res, next) {
    res.send("For mange forsøk på kort tid. Vennligst vent en liten stund før du prøver igjen.")
  },
})

app.use(limiter);
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
