import { Button, Typography } from "antd";
import React from "react";
import { ICONS } from "../../constants/imageConstant";
import { subServicesButton } from "../../constants/mockData";
import { ArrowDownOutlined, ArrowUpOutlined } from "@ant-design/icons";

const SubServices = () => {
  return (
    <div className="subServicesBg">
      <div className="container flex  items-center h-full gap-[30px]">
        <div className="!w-[60%] flex flex-col justify-start items-start gap-[30px]">
          <div className="flex gap-[20px]">
            {subServicesButton?.map((item, i) => (
              <Button
                key={i}
                className="!bg-[#ffff] !cursor-default !uppercase !rounded-[8px] !border-none !font-bold !px-[22px] !py-[23px] !text-[#FF0000] !text-[10px]"
              >
                {item}
              </Button>
            ))}
          </div>
          <Typography className="!text-[#fff] !text-[48px] font-bold !leading-none">
            Caviar - Order Food <br /> Delivery
          </Typography>
          <Typography className="!text-[#fff] !text-[24px] font-medium">
            Get Food delivered from curated lists of local restaurants right at
            your fingertips with Caviar. Enjoy quality dining at home and make
            any night a special occasion.
          </Typography>
          <div className="flex gap-[20px]">
            <img
              src={ICONS.APPLE_STORE}
              alt="appleStore"
              className="cursor-pointer"
            />
            <img
              src={ICONS.GOOGLE_PLAY}
              alt="googlePlay"
              className="cursor-pointer"
            />
          </div>
          <Button className="!bg-[#FF0000] box_shadow !rounded-[8px] !border-none !font-bold !px-[75px] !py-[33px] !text-[#fff] !text-[24px] hover:scale-95 !transition-transform duration-300">
            VIEW CASE STUDY
          </Button>
        </div>
        <div className="!w-[45%] flex flex-col gap-[20px] relative">
          <div className="bg-white/20 backdrop-blur-md rounded-[6px] border border-white/30 p-6 shadow-lg">
            <img src={ICONS.MOBILE_SUB_SERVICES_3} alt="mobile_icon" />
          </div>
          <div className="bg-white/20 backdrop-blur-md rounded-[6px] border border-white/30 p-6 shadow-lg">
            <img src={ICONS.MOBILE_SUB_SERVICES_2} alt="mobile_icon" />
          </div>
          <div className="bg-white/20 backdrop-blur-md rounded-[6px] border border-white/30 p-6 shadow-lg">
            <img src={ICONS.MOBILE_SUB_SERVICES_1} alt="mobile_icon" />
          </div>
          <div className="flex flex-col gap-[15px] absolute -right-30 bottom-130 !z-99">
            <span
              onClick={() => {
                console.log("Navigated to Up");
              }}
              className="!bg-white px-3 py-2 rounded-full  cursor-pointer hover:scale-105 transition-transform duration-300"
            >
              <ArrowUpOutlined className="!font-bold" />
            </span>
            <span
              onClick={() => {
                console.log("Navigated to Down");
              }}
              className="!bg-white px-3 py-2 rounded-full cursor-pointer hover:scale-105 transition-transform duration-300"
            >
              <ArrowDownOutlined className="!font-bold" />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SubServices;
