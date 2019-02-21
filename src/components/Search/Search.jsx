import React, { useState } from "react";
import { func } from "prop-types";
import axios from "axios";
import SearchBar from "./SearchBar";

const Search = ({ handleSearchResults }) => {
  const [searchValue, setSearchValue] = useState("");

  function handleChange(e) {
    e.preventDefault();

    setSearchValue(e.target.value);
  }

  function handleKeyPress(e) {
    e.preventDefault();

    if (e.key === "Enter") handleSubmit();
  }

  function handleSubmit() {
    if (!searchValue) return;

    axios
      .get(`/api/search?value=${encodeURIComponent(searchValue)}`)
      .then(response => {
        handleSearchResults(response.data);
        setSearchValue("");
      });
  }

  return (
    <SearchBar
      searchValue={searchValue}
      onChange={handleChange}
      onKeyPress={handleKeyPress}
      onClick={handleSubmit}
    />
  );
};

export default Search;

Search.propTypes = {
  handleSearchResults: func.isRequired
};
