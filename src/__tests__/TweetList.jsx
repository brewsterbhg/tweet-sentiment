import React from "react";
import { shallow } from "enzyme";
import TweetList from "../components/TweetList";

describe("<TweetList />", () => {
  let wrapped;

  beforeEach(() => {
    wrapped = shallow(<TweetList />);
  });

  afterEach(() => {
    wrapped.unmount();
  });

  it("renders", () => {
    expect(wrapped).toHaveLength(1);
  });
});
