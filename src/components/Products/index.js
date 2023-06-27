import React, { useEffect, useState } from "react";

const Products = () => {
  const [productList, setProductList] = useState([]);

  const productListData = () => {
    fetch("https://dummyjson.com/products")
      .then((res) => res.json())
      .then((res) => {
        setProductList(res);
      });
  };

  useEffect(() => {
    productListData();
  }, []);

  return (
    <>
      <div>
        {productList?.products?.map((i) => {
          return (
            <>
              <p>{i.id}</p>
              <p>{i.title}</p>
              <p>{i.description}</p>
              <p>{i.price}</p>
              <p>{i.discountPercen}</p>
            </>
          );
        })}
      </div>
    </>
  );
};

export default Products;
