import React from "react";
import { mount } from "enzyme";
import Search from "../components/Search";
import SearchBar from "../components/Search/SearchBar";

describe("<Search />", () => {
  let wrapped;
  let handleSearchResults = () => {};
  let searchValue = "test";

  beforeEach(() => {
    wrapped = mount(
      <Search
        handleSearchResults={handleSearchResults}
        defaultValue={searchValue}
      />
    );
  });

  afterEach(() => {
    wrapped.unmount();
  });

  it("renders", () => {
    expect(wrapped).toHaveLength(1);
  });

  it("renders a SearchBar component", () => {
    expect(wrapped.find(SearchBar).length).toEqual(1);
  });
});
