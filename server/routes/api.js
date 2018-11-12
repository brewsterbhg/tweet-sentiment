const router = require('express').Router()
const Twitter = require('../../lib/twitter')
const utilities = require('./../../lib/utilities')

const client = new Twitter({
    bearerToken: `Bearer ${process.env.REACT_APP_TWITTER_BEARER_TOKEN}`
})

router.get('/search', async (req, res, next) => {
    const { value } = req.query
    const tweets = await client.search(value)
    const tweetObj = utilities.structureTweetData(tweets)

    res.send(tweetObj)
})

router.get('/trending', async (req, res, next) => {
    let response;
    let date = new Date();

    if (
        !req.session.trending ||
        (req.session.trending &&
        req.session.expires < date)
    ) {
        response = await client.trending()

        req.session.trending = response
        req.session.expires = new Date(Date.now() + 10000)
    } else {
        response = req.session.trending;
    }

    res.send(response)
})

module.exports = router