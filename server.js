const express = require('express')
const path = require('path')
const app = express()
const compression = require('compression')
const session = require('express-session')
const MemoryStore = require('memorystore')(session)
const Twitter = require('./lib/twitter')
const utilities = require('./lib/utilities')
const Moment = require('moment')
require('dotenv').config()

const client = new Twitter({
    bearerToken: `Bearer ${process.env.REACT_APP_TWITTER_BEARER_TOKEN}`
})

app.use(session({
  store: new MemoryStore({
    checkPeriod: 86400000
  }),
  secret: process.env.REACT_APP_SESSION_SECRET,
  saveUninitialized: false,
  resave: false,
  cookie: { secure: false }
}))

app.use(compression())
app.use(express.static(path.join(__dirname, 'build')))

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'))
})

app.get('/api/search', async (req, res, next) => {
    const { value } = req.query
    const tweets = await client.search(value)
    const tweetObj = utilities.structureTweetData(tweets)

    res.send(tweetObj)
})

app.get('/api/trending', async (req, res, next) => {
    let response;
    let date = new Moment()

    if (
        !req.session.trending ||
        (req.session.trending &&
        Moment(req.session.expires).diff(date) <= 0)
    ) {
        response = await client.trending()

        req.session.trending = response
        req.session.expires = date.add(5, 'minutes')
    } else {
        response = req.session.trending;
    }

    res.send(response)
})

app.listen(process.env.PORT || 8080, () => console.log(`App listening on port ${process.env.PORT || 8080}`))