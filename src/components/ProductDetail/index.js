import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const ProductDetail = () => {
  const { id } = useParams();
  const [productDetail, setProductDetail] = useState([]);

  const productListData = () => {
    axios
      .get(`https://dummyjson.com/products/${id}`)
      .then(function (response) {
        // handle success
        setProductDetail(response.data);
      })
      .catch(function (error) {
        // handle error
        alert(error?.message);
      });
  };
  console.log(productDetail, "iddd");

  useEffect(() => {
    productListData();
  }, []);

  return (
    <div className="">
      <img src={productDetail?.thumbnail} alt="" />
      <div className="flex ">
        {" "}
        {productDetail?.images?.map((i) => {
          return (
            <>
              <img src={i} alt="" className="" />
            </>
          );
        })}
      </div>
    </div>
  );
};

export default ProductDetail;
