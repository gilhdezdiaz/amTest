import React from "react";
import { shallow, mount } from "enzyme";
import Header from "../../components/Header";
import ProviderMock from "../../__mocks__/ProviderMock";

describe("<Header/>", () => {
  const wrapper = shallow(
    <ProviderMock>
      <Header />
    </ProviderMock>
  );
  test("should render Header Component", () => {
    expect(wrapper).toMatchSnapshot();
  });
  test("should render Buttons", () => {
    expect(wrapper.hasClass("header__button"));
  });
});
