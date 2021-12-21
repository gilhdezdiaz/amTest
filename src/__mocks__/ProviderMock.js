import React from "react";
import reducers from "../reducers";
import { createStore } from "redux";
import { Provider } from "react-redux";

const store = createStore(reducers, {});

const ProviderMock = (props) => {
  <Provider store={store}>{props.children}</Provider>;
};

export default ProviderMock;
