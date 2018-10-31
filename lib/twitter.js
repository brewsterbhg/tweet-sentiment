const axios = require('axios');

class Twitter {
    constructor(config) {
        this.api = axios.create({
            baseURL: 'https://api.twitter.com/1.1',
            headers: {
                "Authorization": config.bearerToken
            }
        });
    }

    async callApi(path) {
        try {
            const response = await this.api.get(path);

            return response.data;
        } catch (err) {
            return new Error('Error occurred during API request', err);
        }
        
    }

    async search(searchTerm = "") {
        if (!searchTerm) return;

        const path = `search/tweets.json?q=${encodeURIComponent(searchTerm)}`;
        const data = await this.callApi(path);

        return data;
    }
}

module.exports = Twitter;