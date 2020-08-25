import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { createStore } from "redux";
import { Provider } from "react-redux";

import "./tailwind.output.css";

function hotsReducer() {
  return {
    title: "Hello world! I'm in the Redux store!",
  };
}

const store = createStore(hotsReducer);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,

  document.getElementById("root")
);
