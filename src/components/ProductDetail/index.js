import { Backdrop, CircularProgress } from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const ProductDetail = () => {
  const { id } = useParams();
  const [thumbnail, setThumbnail] = useState(null);
  const [productDetail, setProductDetail] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const productListData = () => {
    setIsLoading(true);
    axios
      .get(`https://dummyjson.com/products/${id}`)
      .then(function (response) {
        // handle success
        setProductDetail(response.data);
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
    <div className="flex flex-col gap-2">
      <img
        src={thumbnail || productDetail?.thumbnail}
        alt=""
        className="h-96 w-96"
      />
      <div className="flex  gap-2">
        {productDetail?.images?.map((i) => {
          return (
            <>
              <img
                src={i}
                alt=""
                className="h-14 w-14"
                onClick={() => setThumbnail(i)}
              />
            </>
          );
        })}
      </div>
    </div>
  );
};

export default ProductDetail;
