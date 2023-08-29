import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./global.css";
import DarkModeProvider from "./utils/context/box";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <DarkModeProvider>
      <App />
    </DarkModeProvider>
  </React.StrictMode>
);
