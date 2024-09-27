import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
// import _ from "lodash";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
); //함수의 반환값이 Null이 아님을 HTMLElement 타입 단언
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
