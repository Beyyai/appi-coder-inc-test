import { Flex } from "antd";
import React from "react";

const CustomMenu = ({ items, spaceBetweenItems = 5 }) => {
  return (
    <Flex gap={spaceBetweenItems}>
      {items?.map((item, i) => (
        <li key={i} className="menu">
          {item?.label}
        </li>
      ))}
    </Flex>
  );
};

export default CustomMenu;
