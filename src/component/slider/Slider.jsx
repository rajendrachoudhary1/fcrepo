 
import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import smallicon from "../../assets/small.png";
import feature_img from "../../assets/Group 558.png";
import feature_img1 from "../../assets/Group2.png";
import feature_img2 from "../../assets/Group3.png";
import feature_img3 from "../../assets/Group4.png";
import small_img1 from "../../assets/c1.png";
import small_img2 from "../../assets/c2.png";
import small_img3 from "../../assets/c3.png";
import small_img4 from "../../assets/c4.png";
import Feature from '../features/Feature'
import "../features/Feature.css";

const featureinfo =[
    {
      title :'Global Networking',
      info : 'Dive into thriving communities tailored to your interests. Share ideas, seek advice, and spark innovation by connecting with like-minded individuals.',
      small_icon : small_img1,
      img : feature_img
    },
    {
      title :'Seamless Applications',
      info : 'Easily apply for jobs and events or manage applications for roles in your startup—all from one intuitive dashboard.',
      small_icon : small_img2,
      img : feature_img1
    },
    {
      title :'Industry Highlights',
      info : 'Never miss out on industry happenings. From tech summits to business workshops, explore events that expand your knowledge and network.',
      small_icon : small_img3,
      img : feature_img2
    },
    {
      title :'Startup Showcase',
      info : 'Founders can spotlight their startups to attract collaborators, investors, and talent, building visibility within a targeted audience.',
      small_icon : small_img4,
      img : feature_img3
    },
  ]

const responsive = {
  superLargeDesktop: { breakpoint: { max: 4000, min: 3000 }, items: 1 },
  desktop: { breakpoint: { max: 3000, min: 1024 }, items: 1 },
  tablet: { breakpoint: { max: 1024, min: 464 }, items: 1 },
  mobile: { breakpoint: { max: 464, min: 0 }, items: 1 },
};

 

const Slider = () => {
  return (
    <Carousel responsive={responsive}>
    <div>
      <Feature title ={featureinfo[0].title} info = {featureinfo[0].info} small_icon={featureinfo[0].small_icon} img= {featureinfo[0].img}/>
    </div>
    <div>
      <Feature title ={featureinfo[1].title} info = {featureinfo[1].info} small_icon={featureinfo[1].small_icon} img= {featureinfo[1].img}/>
    </div>
    <div>
      <Feature title ={featureinfo[2].title} info = {featureinfo[2].info} small_icon={featureinfo[2].small_icon} img= {featureinfo[2].img}/>
    </div>
    <div>
      <Feature title ={featureinfo[3].title} info = {featureinfo[3].info} small_icon={featureinfo[3].small_icon} img= {featureinfo[3].img}/>
    </div>
    
     
  </Carousel>
  );
};

export default Slider;
