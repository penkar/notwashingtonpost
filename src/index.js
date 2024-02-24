import React from "react";
import { createStore } from "redux";
import { Provider } from "react-redux";
import { render } from "react-dom";

import reducer from "./js/Reducers";
import { App } from "./js/Container";

require("./style/app.css");

const store = createStore(reducer);
const container = document.getElementById("app");
render(
  <Provider store={store}>
    <App />
  </Provider>,
  container
);
