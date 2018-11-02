const router = require('express').Router()
const Twitter = require('../../lib/twitter')
const utilities = require('./../../lib/utilities')
const Sentiment = require('sentiment')

const client = new Twitter({
    consumerKey: process.env.REACT_APP_TWITTER_CONSUMER_KEY,
    consumerSecret: process.env.REACT_APP_TWITTER_CONSUMER_SECRET,
    bearerToken: `Bearer ${process.env.REACT_APP_TWITTER_BEARER_TOKEN}`
})
const sentiment = new Sentiment()

router.get('/search', async (req, res, next) => {
    const { search = "trump" } = req.params
    let tweets = await client.search(search)

    tweets = tweets.statuses.map(utilities.cleanTweet)
    
    for (tweet of tweets) {
        let score = sentiment.analyze(tweet)
        console.log(score)
    }

    res.send(tweets)
})

module.exports = router