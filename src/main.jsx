import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { LoadedProvider } from "./context/LoadingContext";
import App from "./App.jsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <LoadedProvider>
        <App />
      </LoadedProvider>
    </BrowserRouter>
  </React.StrictMode>
);
