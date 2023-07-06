import MenuIcon from "@mui/icons-material/Menu";
import {
  Avatar,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  Menu,
  MenuItem,
} from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Header = () => {
  const [open, setOpen] = useState(false);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [profile, setProfile] = useState({});
  const open2 = Boolean(anchorEl);

  const navigate = useNavigate();
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const token = localStorage.getItem("token");
  const profileData = async () => {
    await axios
      .get(`https://api-eduvila.onrender.com/profile?token=${token}`)
      .then((res) => {
        setProfile(res?.data?.[0]);
      });
  };
  useEffect(() => {
    profile !== {} && profileData();
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    handleClose();
    navigate("/login");
    setProfile({});
  };
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
            <Avatar
              alt={profile?.name}
              src="n"
              onClick={handleClick}
              className="!uppercase"
            />
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
          <MenuIcon onClick={() => setOpen(true)} />
        </span>
      </div>
      <Drawer anchor="right" open={open} onClose={() => setOpen(false)}>
        <List>
          <ListItemButton>About Us</ListItemButton>
          <ListItemButton>Contact Us</ListItemButton>
          <ListItemButton>Services</ListItemButton>
        </List>
      </Drawer>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open2}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        <ListItem className="!flex !flex-col !outline-none !w-52 gap-4">
          <Avatar alt={profile?.name} src="m" className="!uppercase" />
          <p>{profile?.name}</p>
          <p>{profile?.email}</p>
        </ListItem>
        <MenuItem onClick={() => navigate("/profile")}>My account</MenuItem>
        <MenuItem onClick={handleLogout}>Logout</MenuItem>
      </Menu>
    </>
  );
};

export default Header;
