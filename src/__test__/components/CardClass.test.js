import React from "react";
import { mount, shallow } from "enzyme";
import ProviderMock from "../../__mocks__/ProviderMock";
import CardClass from "../../components/CardClass";

describe("<CardClass/>", () => {
  const wrapper = shallow(
    <ProviderMock>
      <CardClass />
    </ProviderMock>
  );
  test("should render Class Card Component", () => {
    expect(wrapper.length).toEqual(1);
  });
  test("should render Class Card", () => {
    expect(wrapper.find(".card"));
  });
});
