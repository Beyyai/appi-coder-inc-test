import { Flex, Typography } from "antd";
import React from "react";
import { ICONS } from "../../constants/imageConstant";
import { servicesMock } from "../../constants/mockData";

const Services = ({ servicesRef }) => {
  return (
    <div ref={servicesRef} className="services_bg relative">
      {/* Safe content wrapper */}
      <div className="container relative z-10 pt-[120px] pb-[120px]">
        <Flex vertical gap={40} justify="center" className="!h-full">
          <Flex vertical>
            <Typography className="!text-[60px] font-bold !text-[#fff] !leading-none">
              Our Services
            </Typography>
            <Typography className="!text-[30px] !text-[#fff] !leading-none">
              Get to know about what we’re good at.
            </Typography>
          </Flex>
          <div className="grid grid-cols-2 gap-8 max-w-[80%]">
            {servicesMock?.map((item, index) => (
              <div key={index} className="flex items-center gap-4">
                <div className="bg-white px-4 py-4 rounded-full">
                  <img
                    src={item?.icon}
                    width={40}
                    height={40}
                    alt="mobile_icon_small"
                  />
                </div>
                <div>
                  <Typography className="!text-[25px] font-bold !text-[#fff]">
                    {item?.mainTitle}
                  </Typography>
                  <Typography className="!text-[18px] !text-[#fff]">
                    {item?.subTitle}
                  </Typography>
                </div>
              </div>
            ))}
          </div>
        </Flex>
      </div>

      {/* Image outside container */}
      <img
        src={ICONS.SERVICES_BG_RIGHT_ICON}
        alt="computer_ICON"
        className="absolute top-[-102px] right-0 h-full"
      />
    </div>
  );
};

export default Services;
