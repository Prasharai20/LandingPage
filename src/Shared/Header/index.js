import { Menu } from "@mui/icons-material";
import { Avatar, Drawer, List, ListItem, ListItemButton } from "@mui/material";
import React, { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      {" "}
      <div className="lg:flex md:flex hidden justify-between items-center p-4">
        <span>
          <img
            src="https://d1.awsstatic.com/apac/customer-references-logos-(%401x---%402x)/BigBasket_logo%402x.ef31ecfba085a8cc00a32b3cfc077fc04a01aeb1.png"
            alt=""
            className="h-20"
          />
        </span>
        <span>
          <input
            placeholder="Search"
            type="text"
            className="p-1 w-72 outline-green-400 border border-black"
          />
        </span>
        <span className="flex gap-3">
          {/* <Link to="/products">Products</Link> */}
          <Link to="/products">Products</Link>
          {localStorage.getItem("token") ? (
            <p>logined</p>
          ) : (
            <Link to="/signup">Sign Up</Link>
          )}
        </span>
      </div>
      <div className="flex gap-5">
        <div className="w-72 bg-green-500 p-1 px-3  justify-center relative inline-block group hover:bg-green-600 text-white">
          <span>Category</span>
          <span className="hidden absolute z-50 top-8 left-0 text-black bg-white h-72 w-96 group-hover:flex">
            <List>
              <ListItem>Category 1</ListItem>
              <ListItem>Category 1</ListItem> <ListItem>Category 1</ListItem>
              <ListItem>Category 1</ListItem> <ListItem>Category 1</ListItem>
              <ListItem>Category 1</ListItem>
            </List>
          </span>
        </div>
      </div>
      <div className="flex lg:hidden md:hidden justify-between p-3 items-center">
        <img
          src="https://d1.awsstatic.com/apac/customer-references-logos-(%401x---%402x)/BigBasket_logo%402x.ef31ecfba085a8cc00a32b3cfc077fc04a01aeb1.png"
          alt=""
          className="h-14"
        />
        <span className="flex gap-3 items-center">
          <Avatar src="https://mui.com/static/images/avatar" />
          <Menu onClick={() => setOpen(true)} />
        </span>
      </div>
      <Drawer anchor="right" open={open} onClose={() => setOpen(false)}>
        <List>
          <ListItemButton>About Us</ListItemButton>
          <ListItemButton>Contact Us</ListItemButton>
          <ListItemButton>Services</ListItemButton>
        </List>
      </Drawer>
    </>
  );
};

export default Header;
