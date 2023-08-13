import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./components/auth/Login/Login";
import Signup from "components/auth/Signup/Signup";
import Protect from "utils/Protect";
import { configureStore } from "@reduxjs/toolkit";
import { allReducers } from "./redux/reducers";
import { Provider } from "react-redux";

const store = configureStore({
  reducer: allReducers,
});

const root = ReactDOM.createRoot(document.getElementById("root")!);
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route element={<Protect />}>
            <Route path="/" element={<App />} />
          </Route>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
