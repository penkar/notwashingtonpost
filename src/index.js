import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import { createStore } from "redux";
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

// render(
// <App tab="home" />
//   document.getElementById("app")
// );
