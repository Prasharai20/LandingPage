import React from "react";
import "./index.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./Layout";
import { routes } from "./Routes";

const App = () => {
  return (
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
  );
};

export default App;
