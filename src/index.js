import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/react-bootstrap/dist/react-bootstrap";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import "react-toastify/dist/ReactToastify.css";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import "../src/assets/sass/style.scss";
import { store } from "./Redux/Store";
import React from "react";
import "aos/dist/aos.css";
import App from "./App";
import "./I18next/I18";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
