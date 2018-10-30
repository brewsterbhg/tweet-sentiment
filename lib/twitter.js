const axios = require('axios');
const extend = require('extend');

class Twitter {
    constructor(config) {
        this.config = extend({
            url: 'https://api.twitter.com/1.1/'
        }, config);
    }

    callApi = async(apiMethod, data, callback) => {
        const config = this.config;

        const options = {
            url: config.url,
            method: apiMethod,
            data: data,
            headers: {
                "Authorization": config.bearer
            }
        };

        try {
            const response = await axios(options);
            return callback(response.body);
        } catch (err) {
            const error = new Error('Error occurred during API request', err);
            return callback(error);
        }
        
    }

    search = async(searchTerm = "") => {
        if (!searchTerm) return;
    }
}

module.exports = Twitter;