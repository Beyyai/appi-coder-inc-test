import { Button, Flex, Typography } from "antd";
import React from "react";
import { ICONS } from "../../constants/imageConstant";
import CustomMenu from "../CustomMenu/CustomMenu";
import { PhoneFilled } from "@ant-design/icons";
import { useNavigate } from "react-router";

const Header = ({
  scrollTo,
  aboutRef,
  servicesRef,
  whyChooseUsRef,
  testimonialRef,
  technologiesRef,
  productsRef,
  awardsRef,
  contactsRef,
}) => {
  const items = [
    {
      label: (
        <Typography className="!text-[20px] !text-white menu-link active">
          Home
        </Typography>
      ),
      path: "/",
    },
    {
      label: (
        <Typography
          onClick={() => scrollTo(aboutRef)}
          className="!text-[20px] !text-white menu-link "
        >
          About
        </Typography>
      ),
      path: "/",
    },
    {
      label: (
        <Typography
          onClick={() => scrollTo(servicesRef)}
          className="!text-[20px] !text-white menu-link "
        >
          Services
        </Typography>
      ),
      path: "/",
    },
    {
      label: (
        <Typography
          onClick={() => scrollTo(whyChooseUsRef)}
          className="!text-[20px] !text-white menu-link "
        >
          Why Choose Us
        </Typography>
      ),
      path: "/",
    },
    {
      label: (
        <Typography
          onClick={() => scrollTo(awardsRef)}
          className="!text-[20px] !text-white menu-link "
        >
          Portfolio
        </Typography>
      ),
      path: "/",
    },
    {
      label: (
        <Typography
          onClick={() => scrollTo(productsRef)}
          className="!text-[20px] !text-white menu-link "
        >
          Products
        </Typography>
      ),
      path: "/",
    },
    {
      label: (
        <Typography
          onClick={() => scrollTo(testimonialRef)}
          className="!text-[20px] !text-white menu-link "
        >
          Testimonial
        </Typography>
      ),
      path: "/",
    },
    {
      label: (
        <Typography
          onClick={() => scrollTo(technologiesRef)}
          className="!text-[20px] !text-white menu-link "
        >
          Technologies
        </Typography>
      ),
      path: "/",
    },
    {
      label: (
        <Typography
          onClick={() => scrollTo(contactsRef)}
          className="!text-[20px] !text-white menu-link "
        >
          Contact
        </Typography>
      ),
      path: "/",
    },
  ];
  const navigate = useNavigate();
  return (
    <Flex justify="space-between" className="!pt-[20px]">
      <div>
        <img
          className="cursor-pointer"
          onClick={() => {
            navigate("/");
          }}
          src={ICONS.LOGO}
          alt="logo"
        />
      </div>
      <div className="flex flex-col items-end gap-[8px]">
        <CustomMenu items={items} spaceBetweenItems={25} />
        <Button className=" noHover flex gap-[4px] !bg-transparent !py-[4px] !border-[2.5px] border-[#fff] !rounded-[15px] !text-[#fff] !font-bold">
          <PhoneFilled className="!rotate-[90deg]" />
          +1 (800) 826-8018
        </Button>
      </div>
    </Flex>
  );
};

export default Header;
