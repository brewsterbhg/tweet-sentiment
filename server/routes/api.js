const router = require('express').Router()
const Twitter = require('../../lib/twitter')
const utilities = require('./../../lib/utilities')

const client = new Twitter({
    consumerKey: process.env.REACT_APP_TWITTER_CONSUMER_KEY,
    consumerSecret: process.env.REACT_APP_TWITTER_CONSUMER_SECRET,
    bearerToken: `Bearer ${process.env.REACT_APP_TWITTER_BEARER_TOKEN}`
})

router.get('/search', async (req, res, next) => {
    const { value } = req.params
    console.log(req.params)
    const tweets = await client.search(value)
    console.log(tweets)
    const tweetObj = utilities.structureTweetData(tweets)

    res.send(tweetObj)
})

module.exports = router