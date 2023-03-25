import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
// 리덕스
import { Provider  } from "react-redux";
import { store } from "./store/store";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <Router>
        <Routes>
          <Route path="/*" element={<App />} />
        </Routes>
      </Router>
    </Provider>
  </React.StrictMode>
);
