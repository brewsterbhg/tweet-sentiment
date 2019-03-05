import React from "react";
import { shallow } from "enzyme";
import Footer from "../components/Footer";
import { ReactComponent as Twitter } from "../icons/twitter.svg";
import { ReactComponent as LinkedIn } from "../icons/linkedin.svg";
import { ReactComponent as GitHub } from "../icons/github.svg";

describe("<Footer />", () => {
  let wrapped;

  beforeEach(() => {
    wrapped = shallow(<Footer />);
  });

  afterEach(() => {
    wrapped.unmount();
  });

  it("renders", () => {
    expect(wrapped).toHaveLength(1);
  });

  it("renders the social links", () => {
    expect(wrapped.find(Twitter).length).toEqual(1);
    expect(wrapped.find(LinkedIn).length).toEqual(1);
    expect(wrapped.find(GitHub).length).toEqual(1);
  });
});
