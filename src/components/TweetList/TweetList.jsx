import React from "react";
import { shape, string, object } from "prop-types";
import Tweet from "./Tweet";

const TweetList = ({ data }) =>
  data &&
  data.map(tweet => (
    <Tweet
      key={tweet.id}
      id={tweet.id}
      user={tweet.user}
      status={tweet.status}
      score={tweet.score}
      date={tweet.date}
    />
  ));

Tweet.propTypes = {
  data: shape({
    id: string,
    user: object,
    status: string,
    score: object,
    date: string
  })
};

export default TweetList;
