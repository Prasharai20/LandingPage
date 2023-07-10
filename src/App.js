import React from "react";
import "./index.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./Layout";
import { routes } from "./Routes";
import { Provider } from "react-redux";
import { store } from "./store";

const App = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          {routes.map((route) => {
            return (
              <Route
                path={route.path}
                element={<Layout component={route.element} />}
              />
            );
          })}
        </Routes>
      </BrowserRouter>
    </Provider>
  );
};

export default App;
