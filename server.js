const tracer = require("dd-trace").init();
const express = require("express");
const path = require("path");
const app = express();
const compression = require("compression");
const session = require("express-session");
const MemoryStore = require("memorystore")(session);
const Twitter = require("./lib/twitter");
const utilities = require("./lib/utilities");
const Moment = require("moment");
require("dotenv").config();

const dd_options = {
  response_code: true,
  tags: ["app:whyistheinternetmad"]
};
const connect_datadog = require("connect-datadog")(dd_options);

const client = new Twitter({
  bearerToken: `Bearer ${process.env.REACT_APP_TWITTER_BEARER_TOKEN}`
});

app.use(
  session({
    store: new MemoryStore({
      checkPeriod: 86400000
    }),
    secret: process.env.REACT_APP_SESSION_SECRET,
    saveUninitialized: false,
    resave: false,
    cookie: { secure: false }
  })
);

function requireHTTPS(req, res, next) {
  if (
    !req.secure &&
    req.get("x-forwarded-proto") !== "https" &&
    process.env.NODE_ENV !== "development"
  ) {
    return res.redirect("https://" + req.get("host") + req.url);
  }
  next();
}

app.use(compression());
app.use(requireHTTPS);
app.use(express.static(path.join(__dirname, "build")));
app.use(connect_datadog);

app.get("/api/search", async (req, res) => {
  const { value } = req.query;

  try {
    const tweets = await client.search(value);
    const tweetObj = utilities.structureTweetData(tweets);

    res.send(tweetObj);
  } catch (err) {
    res.status(400).send(err);
  }
});

app.get("/api/trending", async (req, res) => {
  let response;
  let date = new Moment();

  try {
    if (
      !req.session.trending ||
      (req.session.trending && Moment(req.session.expires).diff(date) <= 0)
    ) {
      response = await client.trending();
      req.session.trending = response;
      req.session.expires = date.add(5, "minutes");
    } else {
      response = req.session.trending;
    }
    res.send(response);
  } catch (err) {
    res.status(400).send(err);
  }
});

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "build", "index.html"));
});

app.listen(process.env.PORT || 8080, () =>
  console.log(`App listening on port ${process.env.PORT || 8080}`)
);
