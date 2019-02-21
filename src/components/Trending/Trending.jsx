import React from "react";
import { oneOfType, object, array, func } from "prop-types";
import "./trending.css";

const Trending = ({ trending, tagClicked }) => (
  <div className="trending-tags">
    <h3>Trending:</h3>
    {trending &&
      trending.hasOwnProperty("trends") &&
      trending.trends.slice(0, 6).map((trend, i) => {
        return (
          <span
            key={`${trend.name}-${i}`}
            className="trend"
            onClick={() => tagClicked(trend.name)}
          >
            {trend.name}
          </span>
        );
      })}
  </div>
);

export default React.memo(Trending);

Trending.propTypes = {
  trending: oneOfType([object, array]).isRequired,
  tagClicked: func.isRequired
};
