import React from "react";
import { mount } from "enzyme";
import App from "../components/App";
import TopBanner from "../components/TopBanner";
import Search from "../components/Search";
import Chart from "../components/Chart";
import TweetList from "../components/TweetList";
import Trending from "../components/Trending";

describe("<App />", () => {
  let wrapped;

  beforeEach(() => {
    wrapped = mount(<App />);
  });

  afterEach(() => {
    wrapped.unmount();
  });

  it("renders", () => {
    expect(wrapped).toHaveLength(1);
  });

  it("renders a TopBanner component", () => {
    expect(wrapped.find(TopBanner).length).toEqual(1);
  });

  it("renders a Search component", () => {
    expect(wrapped.find(Search).length).toEqual(1);
  });

  it("renders a Trending component", () => {
    expect(wrapped.find(Trending).length).toEqual(1);
  });

  it("doesn't render a Chart component when there's no results", () => {
    expect(wrapped.find(Chart).length).toEqual(0);
  });

  it("doesn't render a TweetList component when there's no results", () => {
    expect(wrapped.find(TweetList).length).toEqual(0);
  });
});
