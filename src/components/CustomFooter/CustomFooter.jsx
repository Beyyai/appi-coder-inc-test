import React from "react";
import { ICONS } from "../../constants/imageConstant";
import { Divider, Typography } from "antd";
import {
  FastForwardFilled,
  LinkedinFilled,
  TwitterCircleFilled,
} from "@ant-design/icons";

const CustomFooter = ({ scrollTo, aboutRef, homeRef, contactsRef }) => {
  return (
    <div className="bg-[#262835]">
      <div className="container py-[40px]">
        <div className="grid grid-cols-3 gap-8 w-[90%] mx-auto ">
          <div>
            <img
              src={ICONS.FOOTER_LOGO}
              alt="footer_logo"
              className="!mb-[30px]"
            />
            <div>
              <Typography className="!text-[#fff] !text-[30px]">
                Contact Us
              </Typography>
              <Typography className="!text-[#FFFFFF] !text-[18px] !opacity-80">
                Tel: +1 (800) 826-8018 <br /> Email: info@appicoders.com
              </Typography>
              <div className="flex gap-[10px] mt-[20px] ml-[20px]">
                <TwitterCircleFilled className="!text-[#fff] !text-[30px]" />
                <LinkedinFilled className="!text-[#fff] !text-[30px]" />
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-[10px]">
            <Typography className="!text-[#fff] !text-[45px] font-medium !my-[20px]">
              About
            </Typography>
            <Typography
              onClick={() => scrollTo(homeRef)}
              className="!text-[#fff] opacity-80 hover:opacity-100 transition-tranform duration-300 cursor-pointer !text-[18px] uppercase "
            >
              Home
            </Typography>
            <Typography
              onClick={() => scrollTo(aboutRef)}
              className="!text-[#fff] opacity-80 hover:opacity-100 transition-tranform duration-300 cursor-pointer !text-[18px] uppercase "
            >
              About us
            </Typography>
            <Typography
              onClick={() => scrollTo(contactsRef)}
              className="!text-[#fff] opacity-80 hover:opacity-100 transition-tranform duration-300 cursor-pointer !text-[18px] uppercase "
            >
              Contact US
            </Typography>
          </div>
          <div>
            <Typography className="!text-[#fff] !text-[40px] font-medium !my-[27px]">
              Appicoders Services
            </Typography>
            <div className="flex flex-col gap-[15px]">
              <Typography className="!text-[#fff] opacity-80 !text-[16px] uppercase ">
                <FastForwardFilled /> iPHONE APPLICATION DEVELOPMENT
              </Typography>
              <Typography className="!text-[#fff] opacity-80 !text-[16px] uppercase ">
                <FastForwardFilled /> ANDROID APPLICATION DEVELOPMENT
              </Typography>
              <Typography className="!text-[#fff] opacity-80 !text-[16px] uppercase ">
                <FastForwardFilled /> ENTERPRISE APP DEVELOPMENT
              </Typography>
            </div>
          </div>
        </div>
      </div>
      <div className="h-[1px] w-full bg-[#fff] opacity-20"> </div>
      <div className="!py-[20px] text-center">
        <Typography className="!text-[#fff] !text-[18px] opacity-90">
          © 2025 APPICODERS. ALL RIGHTS RESERVED.
        </Typography>
      </div>
    </div>
  );
};

export default CustomFooter;
