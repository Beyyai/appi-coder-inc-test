import { Flex, Typography } from "antd";
import React from "react";
import { ICONS } from "../../constants/imageConstant";
import { industriesMock } from "../../constants/mockData";

const Industries = ({ industriesRef }) => {
  return (
    <div ref={industriesRef} className="industries_bg">
      <div className="container flex flex-col gap-[30px] justify-center items-center h-full w-full">
        <Typography className="!text-[#000] !text-[70px] font-bold">
          Industries
        </Typography>
        <div className="grid grid-cols-3 gap-8 w-full ">
          {industriesMock?.map((item, i) => (
            <Flex
              key={i}
              align="start"
              gap={10}
              style={{
                borderBottom: item?.active ? "solid 7px #E01923" : "",
              }}
              className="bg-white rounded-[8px] !px-[30px] !py-[30px] !shadow-lg "
            >
              <img src={item?.icon} alt="pill" />
              <div>
                <Typography className="!text-[#000] !text-[20px] font-bold">
                  {item?.title}
                </Typography>
                <Typography className="!text-[#000] !text-[18px] ">
                  {item?.text}
                </Typography>
              </div>
            </Flex>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Industries;
