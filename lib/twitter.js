const axios = require("axios");
const querystring = require("querystring");
const extend = require("extend");

class Twitter {
  constructor(config) {
    this.api = axios.create({
      baseURL: "https://api.twitter.com/1.1",
      headers: {
        Authorization: config.bearerToken
      }
    });
  }

  async callApi(options, endpoint) {
    try {
      const config = extend(
        {
          q: "",
          count: 100,
          tweet_mode: "extended",
          result_type: "recent"
        },
        options
      );
      const path = querystring.stringify(config);
      const response = await this.api.get(endpoint + path);

      return response.data;
    } catch (err) {
      return new Error("Error occurred during API request", err);
    }
  }

  async search(search) {
    try {
      const endpoint = `search/tweets.json?`;
      const options = {
        q: search
      };
      const response = await this.callApi(options, endpoint);

      return response;
    } catch (err) {
      return err;
    }
  }

  async trending() {
    try {
      const endpoint = `trends/place.json?`;
      const options = {
        id: 23424977
      };
      const response = await this.callApi(options, endpoint);

      return response;
    } catch (err) {
      return err;
    }
  }
}

module.exports = Twitter;
