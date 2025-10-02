import { Typography } from "antd";
import React from "react";
import { ICONS } from "../../constants/imageConstant";

const About = ({ aboutRef }) => {
  return (
    <div
      ref={aboutRef}
      className="container flex justify-between items-center !py-[120px !h-[500px]"
    >
      <div className="!w-[50%]">
        <Typography className="!text-[57px] font-bold">
          <span className="text-[#E01923] underline doodle-underline ">
            Appicoders
          </span>{" "}
          – #<span className="text-[#E01923]">1</span>. Mobile App & Web
          Development Company in USA
        </Typography>
      </div>
      <div className=" !w-[45%] flex flex-col !gap-[40px] h-[80%] justify-end">
        <Typography className="!text-[24px] font-medium">
          Welcome to Appicoders, your trusted partner for expert mobile app and
          web development. With over 10+ years of experience, we specialize in
          designing, developing, and marketing cutting-edge solutions for all
          major mobile platforms, including Android, iOS, and Windows.
        </Typography>
        <div className="!relative cursor-pointer hover:scale-95 transition-transform duration-300">
          <img
            width={280}
            className="!relative"
            src={ICONS.SQUARE_BG}
            alt="square-bg"
          />
          <Typography className=" !absolute top-3 left-21 uppercase !text-[#fff] !text-[20px]">
            Read More
          </Typography>
        </div>
      </div>
    </div>
  );
};

export default About;
