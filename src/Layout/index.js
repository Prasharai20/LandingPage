import { Avatar, Drawer, List, ListItem, ListItemButton } from "@mui/material";
import React, { Fragment, useEffect, useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import { vegetables } from "../Mock/AllProduct";
import { arr } from "../Mock/Category";
import { Carousel } from "react-responsive-carousel";
import { ArrowDownwardTwoTone } from "@mui/icons-material";
import { Link } from "react-router-dom";
import Header from "../Shared/Header";
import Home from "../Pages/Home";
import Footer from "../Shared/Footer";

const Layout = (props) => {
  const backToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      <ArrowDownwardTwoTone
        className="fixed bg-green-500 rounded-full z-50 bottom-6 right-6"
        onClick={backToTop}
      />

      <Header />
      {props.component}
      {window.location.pathname !== "/signup" && <Footer />}
    </>
  );
};

export default Layout;
