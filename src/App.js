import React from "react";
import "./index.css";
import Home from "./components/Home";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import Team from "./components/Team";
import Dashboard from "./components/Dashboard";
import Project from "./components/Project";
import Calender from "./components/Calender";
import Reports from "./components/Reports";
import Service from "./components/Service";
import Footer from "./Footer";
import Layout, { Layout2 } from "./Layout";
import Products from "./components/Products";
import AxiosProducts from "./components/AxiosProducts";
import ProductDetail from "./components/ProductDetail";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        {/* <Home /> */}
        {/* <Service /> */}
        <Routes>
          <Route path={"/dashboard"} element={<Dashboard />} />
          <Route path={"/home"} element={<Home />} />
          <Route path={"/team"} element={<Team />} />
          <Route path={"/project"} element={<Project />} />
          <Route path={"/calender"} element={<Calender />} />
          <Route path={"/reports"} element={<Reports />} />
          <Route path={"/service"} element={<Service />} />
          <Route path="/" element={<Layout />} />
          <Route path="/products" element={<Products />} />
          <Route path="/productdetail" element={<ProductDetail />} />
          <Route path="/axios-products" element={<AxiosProducts />} />
          <Route path="/axios-products/:id" element={<ProductDetail />} />
          {/* <Route path="/layout-2" element={<Layout2 />} /> */}
        </Routes>
        {/* <Footer /> */}
      </BrowserRouter>
    </div>
  );
};

export default App;
