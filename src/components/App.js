import React, { Fragment, useState, useEffect } from "react";
import TopBanner from "./TopBanner";
import Search from "./Search";
import Chart from "./Chart";
import TweetList from "./TweetList";
import Trending from "./Trending";
import Footer from "./Footer";
import axios from "axios";
import "./app.css";

const App = () => {
  const [results, setResults] = useState([]);
  const [trending, setTrending] = useState([]);

  useEffect(() => {
    axios.get(`/api/trending`).then(response => {
      setTrending(response.data[0]);
    });
  }, [trending]);

  function handleSearchResults(results) {
    setResults(results);
  }

  function handleTagClicked(tag) {
    axios.get(`/api/search?value=${encodeURIComponent(tag)}`).then(response => {
      setResults(response.data);
    });
  }

  return (
    <div className="app">
      <div className="content">
        <TopBanner />
        <Trending trending={trending} tagClicked={handleTagClicked} />
        <Search handleSearchResults={handleSearchResults} />
        {results.length > 0 && (
          <Fragment>
            <Chart data={results} />
            <TweetList data={results} />
          </Fragment>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default React.memo(App);
