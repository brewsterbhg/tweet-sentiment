const router = require('express').Router()
const Twitter = require('../../lib/twitter')
const utilities = require('./../../lib/utilities')
const Moment = require('moment')

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

module.exports = router