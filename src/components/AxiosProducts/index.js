import { Backdrop, CircularProgress } from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const AxiosProducts = () => {
  const [productList, setProductList] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const productListData = () => {
    setIsLoading(true);
    axios
      .get("https://dummyjson.com/products")
      .then(function (response) {
        // handle success
        setProductList(response.data.products);
        setIsLoading(false);
      })
      .catch(function (error) {
        // handle error
        alert(error?.message);
      });
  };

  useEffect(() => {
    productListData();
  }, []);

  return isLoading ? (
    <>
      <Backdrop
        sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={true}
      >
        <CircularProgress color="inherit" />
      </Backdrop>
    </>
  ) : (
    <div className="grid grid-cols-5 gap-4">
      {productList?.map((i) => {
        return (
          <>
            <div
              className="flex flex-col gap-2 shadow cursor-pointer border-2"
              onClick={() => navigate(`/axios-products/${i.id}`)}
            >
              <img src={i.thumbnail} alt="" className="h-32" />
              <p>{i.id}</p>
              <p>{i.title}</p>
              <p>{i.description}</p>
              <p>{i.price}</p>
              <p>{i.discountPercen}</p>
            </div>
          </>
        );
      })}
    </div>
  );
};

export default AxiosProducts;
