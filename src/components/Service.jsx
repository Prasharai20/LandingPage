import { TextField } from "@mui/material";
import React from "react";
import Servicepage from "./Servicepage";

const Service = () => {
  return (
    <>
      <div className=" bg-green-300 py-6">
        {/* <div className="flex px-10  bg-green-500">
          <div className="bg-red">big Basket</div>
        </div> */}
        <div className="flex px-10 w-full">
          <div className="bg-red text-center font-bold text-2xl w-28">
            big <span className="block text-red-400">Basket</span>
          </div>
          <div className="w-full">
            <div className="  grid grid-cols-5 text-right">
              <div></div>
              <div></div>
              <div className="text-sm">8327482734232</div>
              <div className="text-sm">54000005 Lucknow</div>
              <div className="text-sm">Login/Sign Up</div>
            </div>
            <div className=" py-4 grid grid-cols-2">
              <div className="pl-10">
                <TextField size="small" className="!w-[90%]" />
                <span
                  color="success"
                  className=" text-white relative top-2 py-2 font-bold rounded-sm"
                >
                  search
                </span>
              </div>
              <div className="text-right w-full bg-yellow-500 border-4 py-2 px-2">
                <span className="border bg-white py-2 px-2">My Basket</span>
              </div>
              <div className="flex mt-6 h-9 gap-2">
                <div className="bg-lime-600 text-center w-48">
                  Shop by Category
                </div>
                <div className="bg-white w-48 border-2"> Offer</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Servicepage />
    </>
  );
};

export default Service;
