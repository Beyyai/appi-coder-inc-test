import { useRef } from "react";
import { ICONS } from "../../constants/imageConstant";
import Header from "../Header/Header";
import { Button, Flex, Typography } from "antd";
import Home from "../../containers/Home/Home";
import About from "../../containers/About/About";
import Services from "../../containers/Services/Services";
import SubServices from "../../containers/SubServices/SubServices";
import WhyChooseUs from "../../containers/WhyChooseUs/WhyChooseUs";
import Testimonials from "../../containers/Testimonials/Testimonials";
import Industries from "../../containers/Industries/Industries";
import Technologies from "../../containers/Technologies/Technologies";
import Products from "../../containers/Products/Products";
import Awards from "../../containers/Awards/Awards";
import Contacts from "../../containers/Contacts/Contacts";
import CustomFooter from "../CustomFooter/CustomFooter";

const MainLayout = () => {
  const aboutRef = useRef(null);
  const homeRef = useRef();
  const servicesRef = useRef(null);
  const whyChooseUsRef = useRef(null);
  const testimonialRef = useRef(null);
  const industriesRef = useRef(null);
  const technologiesRef = useRef(null);
  const productsRef = useRef(null);
  const awardsRef = useRef(null);
  const contactsRef = useRef(null);

  const scrollTo = (ref) => {
    ref.current.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <div>
      <div className="hero_bg_menu">
        <div ref={homeRef} className="container  flex flex-col  !h-full">
          <Header
            aboutRef={aboutRef}
            testimonialRef={testimonialRef}
            servicesRef={servicesRef}
            whyChooseUsRef={whyChooseUsRef}
            industriesRef={industriesRef}
            technologiesRef={technologiesRef}
            scrollTo={scrollTo}
            productsRef={productsRef}
            awardsRef={awardsRef}
            contactsRef={contactsRef}
          />
          <Home />
        </div>
      </div>
      <About aboutRef={aboutRef} />
      <Services servicesRef={servicesRef} />
      <SubServices />
      <WhyChooseUs whyChooseUsRef={whyChooseUsRef} />
      <Testimonials testimonialRef={testimonialRef} />
      <Industries industriesRef={industriesRef} />
      <Technologies technologiesRef={technologiesRef} />
      <Products productsRef={productsRef} />
      <Awards awardsRef={awardsRef} />
      <Contacts contactsRef={contactsRef} />
      <CustomFooter
        scrollTo={scrollTo}
        aboutRef={aboutRef}
        contactsRef={contactsRef}
        homeRef={homeRef}
      />
    </div>
  );
};

export default MainLayout;
