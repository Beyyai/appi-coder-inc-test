import { Flex, Typography } from "antd";
import React from "react";
import { ICONS } from "../../constants/imageConstant";

const Technologies = ({ technologiesRef }) => {
  return (
    <div className="technologies_bg" ref={technologiesRef}>
      <div className="container h-full text-center flex flex-col gap-[35px] items-center justify-center">
        <Typography className="!text-[#fff] !text-[70px] font-bold">
          Technologies
        </Typography>
        <Flex align="center">
          <div className="bg-white h-[65vh] flex items-center px-[30px]  w-[60%] rounded-[8px] !z-1">
            <div className="w-[90%]">
              <Typography className="!text-[#000] text-start !text-[45px] font-medium">
                Cloud Solutions
              </Typography>
              <Typography className="!text-[#000] text-start !text-[20px] ">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
                nisl libero, sollicitudin vel tempor sed, ullamcorper quis diam.
                Ut eros elit, luctus eu pulvinar a, lacinia a justo. Sed felis
                sapien, rutrum ut tempus quis, elementum eu du
              </Typography>
            </div>
          </div>
          <div className="z-2 ml-[-60px]">
            <img src={ICONS.TECHNOLOGIES_RIGHT_ICON} alt="tech" />
          </div>
        </Flex>
      </div>
    </div>
  );
};

export default Technologies;
