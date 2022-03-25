import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { StateProvider } from "./components/StateProvider";
import reducer, { initialState } from "./reducer";
import App from "./App";
import "./css/index.css";

ReactDOM.render(
  <BrowserRouter>
    <StateProvider initialState={initialState} reducer={reducer}>
      <App />
    </StateProvider>
  </BrowserRouter>,
  document.getElementById("root")
);
