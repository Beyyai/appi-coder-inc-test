import { Flex, Typography } from "antd";
import React from "react";
import { productsMenu, productsMock } from "../../constants/mockData";

const Products = ({ productsRef }) => {
  return (
    <div className="products_bg" ref={productsRef}>
      <div className="container text-center flex flex-col gap-[30px]">
        <Typography className="!text-[#fff] !text-[70px] font-bold">
          Products
        </Typography>
        <Flex justify="center" gap={60}>
          {productsMenu?.map((item, i) => (
            <span
              key={i}
              className={`text-[#fff] text-[20px] cursor-pointer font-medium ${
                item === "All" ? "active menu-link" : "menu-link"
              } `}
            >
              {item}
            </span>
          ))}
        </Flex>
        <div className="grid grid-cols-3 gap-8 w-[90%] mx-auto ">
          {productsMock?.map((item, i) => (
            <div
              key={i}
              className="bg-white  p-4 rounded-[8px] cursor-pointer hover:scale-95 transition-transform duration-300 "
            >
              <img src={item?.icon} alt="devices" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Products;
