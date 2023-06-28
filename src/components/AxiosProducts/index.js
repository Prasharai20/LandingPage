import { Backdrop, CircularProgress } from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const AxiosProducts = () => {
  const [productList, setProductList] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [search, setSearch] = useState("");
  const [dataSearch, setDataSearch] = useState([]);

  const navigate = useNavigate();

  const productListData = () => {
    setIsLoading(true);
    axios
      .get("https://dummyjson.com/products")
      .then(function (response) {
        // handle success
        setProductList(response.data);
        setIsLoading(false);
      })
      .catch(function (error) {
        // handle error
        alert(error?.message);
      });
  };

  const searchData = () => {
    axios
      .get(`https://dummyjson.com/products/search?q=${search}`)
      .then((res) => {
        setDataSearch(res.data);
      });
  };
  useEffect(
    () => {
      search !== "" && searchData();
    },
    // eslint-disable-next-line
    [search]
  );

  useEffect(() => {
    productListData();
  }, []);

  useEffect(() => {
    document.title = productList?.limit
      ? `Products ( ${productList?.limit} )`
      : "Prdoucts";
  }, [productList?.limit]);

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
    <>
      {" "}
      <div className="flex flex-col justify-end p-3">
        <input
          type="text"
          placeholder="Search Products"
          onChange={(event) => setSearch(event.target.value)}
          className="p-2 border-2 outline-none"
        />
        {search?.length !== 0 && (
          <div className="h-96 absolute bg-white bg-opacity-40 backdrop-blur border-2 shadow-md w-11/12 z-50 top-16 left-10  flex flex-col gap-1 overflow-auto">
            {dataSearch?.products?.map((i) => {
              return (
                <>
                  <span
                    className="flex gap-1"
                    onClick={() => navigate(`/productdetail/${i.id}`)}
                  >
                    <img src={i.thumbnail} alt="" className="h-12 w-12" />
                    <p>{i.title}</p>
                  </span>
                </>
              );
            })}
          </div>
        )}
      </div>
      <div className="grid grid-cols-5 gap-4">
        {productList?.products?.map((i) => {
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
    </>
  );
};

export default AxiosProducts;
