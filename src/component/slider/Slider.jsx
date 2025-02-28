import React from "react";
import feature_img from "../../assets/Group 558.png";
import feature_img1 from "../../assets/Group2.png";
import feature_img2 from "../../assets/Group3.png";
import feature_img3 from "../../assets/Group4.png";
import small_img1 from "../../assets/c1.png";
import small_img2 from "../../assets/c2.png";
import small_img3 from "../../assets/c3.png";
import small_img4 from "../../assets/c4.png";
import Feature from "../features/Feature";
import "../features/Feature.css";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const featureinfo = [
  {
    title: "Global Networking",
    info: "Dive into thriving communities tailored to your interests. Share ideas, seek advice, and spark innovation by connecting with like-minded individuals.",
    small_icon: small_img1,
    img: feature_img,
  },
  {
    title: "Seamless Applications",
    info: "Easily apply for jobs and events or manage applications for roles in your startup—all from one intuitive dashboard.",
    small_icon: small_img2,
    img: feature_img1,
  },
  {
    title: "Industry Highlights",
    info: "Never miss out on industry happenings. From tech summits to business workshops, explore events that expand your knowledge and network.",
    small_icon: small_img3,
    img: feature_img2,
  },
  {
    title: "Startup Showcase",
    info: "Founders can spotlight their startups to attract collaborators, investors, and talent, building visibility within a targeted audience.",
    small_icon: small_img4,
    img: feature_img3,
  },
];

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 1,
    slidesToSlide: 1, 
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1,
    slidesToSlide: 1,  
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    slidesToSlide: 1,  
  },
};

const Slider = (props) => {
  return (
    <Carousel
      swipeable={true}
      draggable={true}
      showDots={true}
      responsive={responsive}
      ssr={true} // Server-side rendering
      infinite={true}
      autoPlay={props.deviceType !== "mobile"}
      autoPlaySpeed={2000}
      keyBoardControl={true}
      customTransition="all .5s ease-in-out"
      transitionDuration={500}
      containerClass="carousel-container"
      removeArrowOnDeviceType={["mobile"]}
      dotListClass="custom-dot-list-style"
      itemClass="carousel-item-padding-40-px"
    >
      {featureinfo.map((feature, index) => (
        <div key={index}>
          <Feature
            title={feature.title}
            info={feature.info}
            small_icon={feature.small_icon}
            img={feature.img}
          />
        </div>
      ))}
    </Carousel>
  );
};

export default Slider;
