import React from "react";
import { mount, shallow } from "enzyme";
import ProviderMock from "../../__mocks__/ProviderMock";
import Card from "../../components/Card";

describe("<Card/>", () => {
  const wrapper = shallow(
    <ProviderMock>
      <Card />
    </ProviderMock>
  );
  test("should render Card Component", () => {
    expect(wrapper.length).toEqual(1);
  });
  test("should render Class Card", () => {
    expect(wrapper.find(".card"));
  });
});
