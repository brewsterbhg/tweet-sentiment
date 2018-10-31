const router = require('express').Router()
const Twitter = require('../../lib/twitter')

const client = new Twitter({
    consumerKey: process.env.REACT_APP_TWITTER_CONSUMER_KEY,
    consumerSecret: process.env.REACT_APP_TWITTER_CONSUMER_SECRET,
    bearerToken: `Bearer ${process.env.REACT_APP_TWITTER_BEARER_TOKEN}`
})

router.get('/tweets', async (req, res, next) => {
    const tweets = await client.search('hello')

    res.send(tweets)
})

module.exports = router