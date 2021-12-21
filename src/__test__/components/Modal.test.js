import React from "react";
import { shallow } from "enzyme";
import Modal from "../../components/Modal";

describe("<Modal/>", () => {
  const wrapper = shallow(<Modal />);
  test("should render Modal Component", () => {
    expect(wrapper).toMatchSnapshot();
  });
  test("should render title Modal", () => {
    expect(wrapper.hasClass("modal__header-title"));
  });
});
