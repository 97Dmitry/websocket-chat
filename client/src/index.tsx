import React from "react";
import ReactDOM from "react-dom";
import { createGlobalStyle } from "styled-components";
import App from "@/App";
import reportWebVitals from "@/reportWebVitals";

// стили
import "bootstrap/dist/css/bootstrap.min.css";
import "emoji-mart/css/emoji-mart.css";
// компонент
// небольшая корректировка "бутстраповских" стилей
const GlobalStyles = createGlobalStyle`
.card-header {
  padding: 0.25em 0.5em;
}
.card-body {
  padding: 0.25em 0.5em;
}
.card-text {
  margin: 0;
}`;

// eslint-disable-next-line jest/require-hook
ReactDOM.render(
  <React.StrictMode>
    <GlobalStyles />
    <App />
  </React.StrictMode>,
  document.getElementById("root"),
);

// eslint-disable-next-line jest/require-hook
reportWebVitals();
