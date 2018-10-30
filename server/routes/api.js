const express = require('express')
const router = express.Router()
const Twitter = require('../../lib/twitter')

const client = new Twitter({
    consumerKey: process.env.REACT_APP_TWITTER_CONSUMER_KEY,
    consumerSecret: process.env.REACT_APP_TWITTER_CONSUMER_SECRET,
    bearerToken: `Bearer ${process.env.REACT_APP_TWITTER_BEARER_TOKEN}`
})

router.get('/tweets', (req, res, next) => {
    client.search()
})

module.exports = router