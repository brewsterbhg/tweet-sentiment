/** 
 * Cleans the tweet by getting the full text if it's a retweet and stripping out any links
 * 
 * @param {string} tweet - The tweet to clean
 * @return {string} - The cleaned tweet 
*/
exports.cleanTweet = tweet => {
    tweet = tweet.retweeted_status ? tweet.retweeted_status.full_text : tweet.full_text;
    return tweet.split(/ |\n/).filter(x => !x.startsWith('http')).join(' ');
};