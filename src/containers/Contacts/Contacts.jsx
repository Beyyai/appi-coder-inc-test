import { Input, Typography } from "antd";
import React from "react";
import { ICONS } from "../../constants/imageConstant";
import { PhoneFilled } from "@ant-design/icons";

const Contacts = ({ contactsRef }) => {
  return (
    <div
      ref={contactsRef}
      className="bg-[#E01923] h-screen relative overflow-hidden"
    >
      {/* Left content inside container */}
      <div className="container relative z-10 h-full flex items-center">
        <div className="w-[50%] flex flex-col gap-[20px]">
          <div>
            <Typography className="!text-[#fff] !text-[35px]">
              LET'S TALK
            </Typography>
            <Typography className="!text-[#fff] !text-[35px] font-bold">
              Got an idea? Let’s get in touch!
            </Typography>
            <Typography className="!text-[#fff] !text-[25px]">
              Have queries? Not sure of your App Strategy? Discuss with <br />
              us and we'll guide you the way forward.
            </Typography>
          </div>

          {/* Form Inputs */}
          <div className="flex flex-col gap-[20px]">
            <Input
              className="!border-none !py-3"
              type="text"
              placeholder="Your Name"
            />
            <Input
              className="!border-none !py-3"
              type="email"
              placeholder="Email Address"
            />
            <Input
              className="!border-none !py-3"
              type="number"
              placeholder="Phone"
            />
            <Input.TextArea
              className="!h-[250px] !border-none"
              placeholder="Message"
            />

            <div className="relative cursor-pointer hover:scale-95 transition-transform duration-300 w-fit">
              <img className="relative" src={ICONS.SQUARE_BG} alt="square-bg" />
              <Typography className="absolute top-5 left-22 uppercase !text-[#fff] !text-[24px]">
                LET’S GET IN TOUCH
              </Typography>
            </div>
          </div>
        </div>
      </div>

      {/* Right side image absolute */}
      <img
        src={ICONS.CONTACT_RIGHT_ICON}
        width={700}
        alt="people_collab"
        className="absolute right-0 top-0 z-0"
      />

      {/* Blue box pinned to bottom */}
      <div className="absolute bottom-0 !text-center right-0 w-[36.72%] bg-[#262835] h-[300px] p-9 z-20">
        <Typography className="!text-white !text-[23px] font-medium text-center">
          Please submit your inquiry and our App Development Strategist will
          contact you shortly
        </Typography>
        <PhoneFilled className="!text-[#fff] !text-[65px] !rotate-[90deg] !my-[10px] " />
        <Typography className="!text-white !text-[40px] font-medium text-center">
          +1-(800) 826 8018
        </Typography>
        <Typography className="!text-white !text-[20px] font-thin text-center">
          info@appicoders.com
        </Typography>
      </div>
    </div>
  );
};

export default Contacts;
