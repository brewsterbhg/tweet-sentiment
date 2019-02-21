const Sentiment = require("sentiment");
const sentiment = new Sentiment();

/**
 * Parses tweets and structures an object to return to the client
 *
 * @param {array} tweets - The array of tweets returned from searching
 * @return {object} - A structured object of tweet data
 */
exports.structureTweetData = tweets => {
  return tweets.statuses.map(tweet => {
    let status = this.cleanTweet(tweet);
    let score = sentiment.analyze(status);

    const tweetObj = {
      status: status,
      score: score,
      date: tweet.created_at,
      id: tweet.id_str,
      user: tweet.user
    };
    return tweetObj;
  });
};

/**
 * Cleans the tweet by getting the full text if it's a retweet and stripping out any links
 *
 * @param {string} tweet - The tweet to clean
 * @return {string} - The cleaned tweet
 */
exports.cleanTweet = tweet => {
  tweet = tweet.retweeted_status
    ? tweet.retweeted_status.full_text
    : tweet.full_text;
  return tweet
    .split(/ |\n/)
    .filter(x => !x.startsWith("http"))
    .join(" ");
};
