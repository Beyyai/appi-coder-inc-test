import { Flex, Typography } from "antd";
import React from "react";
import { ICONS } from "../../constants/imageConstant";

const Testimonials = ({ testimonialRef }) => {
  return (
    <div ref={testimonialRef} className="testimonials_bg  ">
      <div className=" relative container he flex justify-center items-center !h-full">
        <div className=" h-[80%] w-full  bg-red-900/70 rounded-[8px] !p-10 flex items-center relative">
          <Flex align="center" justify="space-between">
            <div className="flex w-[50%] flex-col gap-[10px] ">
              <Typography className="!text-[#fff] font-medium !text-[30px] !p-0 m-0 !leading-none">
                CLIENT TESTIMONIALS
              </Typography>
              <Typography className="!text-[#fff] font-bold !text-[70px] !p-0 m-0 !leading-none">
                What our clients <br /> are Saying.
              </Typography>
            </div>
            <div className="bg-white flex flex-col gap-10 w-[45%] !p-10 rounded-[7px]">
              <div className=" flex relative items-center gap-7">
                <div className="rounded-full overflow-none shadow-lg ">
                  <img
                    className="rounded-full"
                    src={ICONS.CLIENT_IMAGE}
                    alt="user_image"
                  />
                </div>
                <Typography className="!text-[#000] !text-[30px] font-bold">
                  <span className="underline decoration-[#E01923] ">
                    Scarlett
                  </span>{" "}
                  Lawrence
                </Typography>
                <div className="absolute -bottom-4 left-6 !bg-red-500 h-12 w-12 flex justify-center items-center rounded-full ">
                  <img src={ICONS.QUOTE_ICON} alt="quote" />
                </div>
              </div>
              <div>
                <Typography className="!text-[20px] font-medium">
                  Thank you Team AppiCoders you guys have a great understanding
                  of what's current, and get things done very quickly compared
                  to others. Reliable communication and qualitative suggestions
                  on useful functionality during the planning stage made for a
                  final product that surpassed initial expectations. Their
                  Project management is amazing, Tight deadlines were reliably
                  met without issue. Our Strong recommendations if you’re
                  looking for quality work
                </Typography>
              </div>
            </div>
          </Flex>
          <div className="absolute -top-17 left-15 !bg-white h-40 w-40 flex justify-center items-center rounded-full ">
            <img src={ICONS.QUOTE_ICON_RED} alt="quote" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
