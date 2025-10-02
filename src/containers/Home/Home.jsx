import { Flex, Typography } from "antd";
import { ICONS } from "../../constants/imageConstant";
import {
  ArrowLeftOutlined,
  ArrowRightOutlined,
  ArrowUpOutlined,
} from "@ant-design/icons";

const Home = () => {
  return (
    <Flex gap={40} justify="center" align="center" className="!h-full">
      <div className="left">
        <img
          height={700}
          width={750}
          src={ICONS.MOBILE_ICON}
          alt="mobile_icon"
        />
      </div>
      <div className="right relative">
        <Flex vertical align="start" gap={50}>
          <Typography>
            <span className="text-[75px] text-[#fff] font-bold leading-none">
              Leading the Way in App
            </span>
            <br />
            <span className="text-[60px] text-[#fff] font-bold leading-none">
              Development Innovation
            </span>
          </Typography>
          <Typography className="!text-[30px] !text-[#FFF]">
            We build Android & iOS Mobile Apps that cater all your business
            needs and take it on the next level.
          </Typography>
          <div className="!relative cursor-pointer hover:scale-95 transition-transform duration-300">
            <img className="!relative" src={ICONS.SQUARE_BG} alt="square-bg" />
            <Typography className=" !absolute top-5 left-22 uppercase !text-[#fff] !text-[24px]">
              get a free quote
            </Typography>
          </div>
        </Flex>
        <div className="flex gap-[15px] absolute right-30 -bottom-30">
          <span
            onClick={() => {
              console.log("Navigated to Left");
            }}
            className="!bg-white px-3 py-2 rounded-full  cursor-pointer hover:scale-105 transition-transform duration-300"
          >
            <ArrowLeftOutlined className="!font-bold" />
          </span>
          <span
            onClick={() => {
              console.log("Navigated to Right");
            }}
            className="!bg-white px-3 py-2 rounded-full cursor-pointer hover:scale-105 transition-transform duration-300"
          >
            <ArrowRightOutlined className="!font-bold" />
          </span>
        </div>
      </div>
    </Flex>
  );
};

export default Home;
