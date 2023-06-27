import { Avatar, Drawer, List, ListItem, ListItemButton } from "@mui/material";
import React, { Fragment, useEffect, useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import { vegetables } from "../Mock/AllProduct";
import { arr } from "../Mock/Category";
import { Carousel } from "react-responsive-carousel";
import { ArrowDownwardTwoTone } from "@mui/icons-material";
import { Link } from "react-router-dom";

const Layout = () => {
  const [open, setOpen] = useState(false);

  // useEffect(() => {
  //   alert("Useefect Calls");
  // });
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
          <Link to="/products">Products</Link>
          <Link to="/axios-products">AxiosProducts</Link>
          <Link to="/home">Home</Link>
          <Link to="/aboutusus">About Us</Link>
          <Link to="/contact">Contact Us</Link>
          <Link to="/service">Service</Link>
          <Link to="/team">Team</Link>
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

      <Carousel autoPlay showThumbs={false} showArrows={false} infiniteLoop>
        {[1, 2, 3, 4, 5].map((i) => {
          return (
            <img
              src={`https://source.unsplash.com/random/700x200/?fruit/${i}`}
              alt=""
            />
          );
        })}
      </Carousel>

      <div className="grid md:grid-cols-3 lg:grid-cols-9 gap-2 p-5 border-2">
        {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((i) => {
          return (
            <img
              src={`https://source.unsplash.com/random/900x700/?lucknow/${i}`}
              alt=""
            />
          );
        })}
      </div>
      <div className="grid md:grid-cols-3 lg:grid-cols-6 gap-2 border-x-2 px-20 pb-4 mt-2">
        <span className="flex justify-center items-center bg-gray-500">
          <p>EGGS,MEAT AND fISH</p>
        </span>
        <img
          className="h-28 "
          src="https://tmlogosave.s3.ap-south-1.amazonaws.com/5338398.jpeg"
          alt=""
        />
        <img
          className="h-28 "
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMJsl3yjPjnyECzQlVIuygRha4r4K8mlTGqA&usqp=CAU"
          alt=""
        />
        <span className="flex justify-center items-center bg-gray-500">
          <p>BY MORE SAVE MORE</p>
        </span>

        <span className="flex justify-center items-center bg-gray-500">
          <p>DEALS OF THE WEEK</p>
        </span>
        <span className="flex justify-center items-center bg-gray-500">
          <p>COMBO STORE</p>
        </span>
      </div>
      <p className="text-center font-bold mb-2">Bank Offer</p>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-7 lg:px-10 px-3">
        <img
          src="https://www.bigbasket.com/media/customPage/b01eee88-e6bc-410e-993c-dedd012cf04b/c5ab8ab0-f1b6-401b-b704-1718117083c0/c70b47aa-95ba-4ee4-8b2b-aebd32cb1030/t1_hp_aff_m_idfc-cc_360_160623.jpg"
          alt=""
        />
        <img
          src="https://www.bigbasket.com/media/customPage/b01eee88-e6bc-410e-993c-dedd012cf04b/c5ab8ab0-f1b6-401b-b704-1718117083c0/c70b47aa-95ba-4ee4-8b2b-aebd32cb1030/t1_hp_aff_m_aubank_360_160623.jpg"
          alt=""
        />
        <img
          src="https://www.bigbasket.com/media/customPage/b01eee88-e6bc-410e-993c-dedd012cf04b/c5ab8ab0-f1b6-401b-b704-1718117083c0/c70b47aa-95ba-4ee4-8b2b-aebd32cb1030/t1_hp_aff_m_indus_360_160623.jpg"
          alt=""
        />
        <img
          src="https://www.bigbasket.com/media/customPage/b01eee88-e6bc-410e-993c-dedd012cf04b/c5ab8ab0-f1b6-401b-b704-1718117083c0/c70b47aa-95ba-4ee4-8b2b-aebd32cb1030/t1_hp_aff_m_hsbc_360_160623.jpg"
          alt=""
        />
      </div>
      <p className=" text-center mb-2 font-bold mt-2">Best Sellers</p>
      <div className="grid grid-cols-5 gap-3">
        {vegetables.map((item) => {
          return (
            <div
              key={item.id}
              className="border-2 flex items-center flex-col shadow"
            >
              <img src={item.product_image} alt="" />
              <p>{item.brand}</p>
              <p className="whitespace-nowrap text-ellipsis overflow-x-hidden w-48">
                {item.title}
              </p>
              <s>₹100</s>
              <p>₹{item.price}</p>
            </div>
          );
        })}
      </div>
      <p className=" text-center mb-2 font-bold mt-2">Top Offers</p>
      <div className="md:-grid-cols-2 lg:cols-4 gap-2 ml-32 mr-32 border-red-600 border-2 w-64 "></div>

      <div className="flex gap-1">
        {arr.map((i) => {
          return <p>{i.category_name}</p>;
        })}
      </div>
      <Layout2 />
    </>
  );
};

const Layout2 = () => {
  return (
    <>
      <div>Layout 2</div>
    </>
  );
};
export default Layout;
export { Layout2 };
