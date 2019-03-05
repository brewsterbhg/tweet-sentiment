import React from "react";
import { shallow } from "enzyme";
import Trending from "../components/Trending";

describe("<Trending />", () => {
  let wrapped;
  let tagClicked = jest.fn();

  beforeEach(() => {
    wrapped = shallow(
      <Trending
        trending={[
          {
            name: "test"
          }
        ]}
        tagClicked={tagClicked}
      />
    );
  });

  afterEach(() => {
    wrapped.unmount();
  });

  it("renders", () => {
    expect(wrapped).toHaveLength(1);
  });
});
