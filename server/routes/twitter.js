const axios = require('axios');
const utilities = require('./../../lib/utilities');

const TWITTER_API_KEY = process.env.REACT_APP_TWITTER_CONSUMER_KEY;
const TWITTER_API_SECRET = process.env.REACT_APP_TWITTER_CONSUMER_SECRET;

class Twitter {
    constructor() {
        this.apiKey = this.authenticate();
    }

    async authenticate() {
        const authKey = utilities.generateRequestKey(TWITTER_API_KEY, TWITTER_API_SECRET);
        console.log(authKey);
        try {
            const token = await axios.post(`https://api.twitter.com/oauth2/token`, {
                headers: {
                    'Authorization': `Basic ${authKey}`,
                    'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
                },
                data: {
                    'grant_type': 'client_credentials'
                }
            });
            
            console.log(token);
        } catch (err) {
            console.error(err.response.data);
        }
    }

    renew() {

    }

    search(searchTerm = "") {

    }
}

module.exports = new Twitter()