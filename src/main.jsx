import { Provider } from "react-redux";
import { createRoot } from "react-dom/client";
import "./index.scss";
import App from "./App.jsx";
import { store } from "./RTK/store.js";
import { BrowserRouter } from "react-router-dom"
import React from "react";

createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
);
