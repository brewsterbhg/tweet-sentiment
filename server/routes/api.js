const express = require('express')
const router = express.Router()
const Twitter = require('./twitter')

// const client = new Twitter({
//     consumer_key: process.env.REACT_APP_TWITTER_CONSUMER_KEY,
//     consumer_secret: process.env.REACT_APP_TWITTER_CONSUMER_SECRET,
//     access_token_key: process.env.REACT_APP_TWITTER_ACCESS_TOKEN_KEY,
//     access_token_secret: process.env.REACT_APP_TWITTER_ACCESS_TOKEN_SECRET
// })

router.get('/tweets', (req, res, next) => {
    Twitter.search()
})

module.exports = router