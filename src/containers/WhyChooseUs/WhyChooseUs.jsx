import { Flex, Typography } from "antd";
import React from "react";
import { whyChooseUsMockExtended } from "../../constants/mockData";

const WhyChooseUs = ({ whyChooseUsRef }) => {
  return (
    <div className=" whyCHooseUs !bg-[#EAEDEF]" ref={whyChooseUsRef}>
      <div className="container flex justify-center !py-[70px]">
        <Flex vertical align="center">
          <Typography className="!text-[60px] !text-[#000] font-bold">
            Why Choose Us?
          </Typography>
          <Typography className="!text-[36px] text-center !text-[#000] font-medium">
            With our unique approach and cost-effective solutions, your business
            will prosper because quality is the top priority for us.
          </Typography>
        </Flex>
      </div>
      <Flex>
        <div className="relative w-full overflow-hidden pb-20">
          <div className="flex justify-center items-center gap-6 px-[190px]">
            {whyChooseUsMockExtended?.map((item, i) => (
              <div
                key={i}
                className={`flex flex-col items-center justify-center bg-white rounded-full p-12 w-[480px] h-[480px] shrink-0 shadow-lg ${
                  item?.active ? "" : "opacity-50"
                }`}
              >
                <div
                  style={{
                    backgroundColor: item?.active ? "#E01923" : "#9E9E9E",
                  }}
                  className="w-20 h-20 flex justify-center items-center rounded-[8px] mb-6"
                >
                  {item?.icon && (
                    <img width={40} height={40} src={item?.icon} alt="icon" />
                  )}
                </div>
                <Typography className="!text-[20px] font-bold text-center mb-2">
                  {item?.title}
                </Typography>
                <Typography className="!text-[20px] text-base text-center text-gray-800">
                  {item?.subText}
                </Typography>
              </div>
            ))}
          </div>
        </div>
      </Flex>
    </div>
  );
};

export default WhyChooseUs;
