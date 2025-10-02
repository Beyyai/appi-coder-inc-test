import { Flex, Typography } from "antd";
import React from "react";
import { awardsIcon } from "../../constants/mockData";

const Awards = ({ awardsRef }) => {
  return (
    <div
      className="container flex flex-col justify-center items-center text-center h-[500px]"
      ref={awardsRef}
    >
      <Typography className="!text-[#000] !text-[70px] font-bold">
        Awards and Recognitions
      </Typography>
      <Flex>
        {awardsIcon?.map((item, i) => (
          <img
            className="cursor-pointer hover:scale-110 transition-transform duration-300"
            width={350}
            key={i}
            src={item?.icon}
            alt="review"
          />
        ))}
      </Flex>
    </div>
  );
};

export default Awards;
