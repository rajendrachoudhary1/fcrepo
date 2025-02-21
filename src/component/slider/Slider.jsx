 
import React from "react";
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

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
// import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination, Mousewheel, Keyboard } from 'swiper/modules';

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


const Slider = () => {
  return (
  
     <Swiper
          cssMode={true}
          navigation={true}
          pagination={true}
          mousewheel={true}
          keyboard={true}
          modules={[Navigation, Pagination, Mousewheel, Keyboard]}
          className="mySwiper"
      >
        <SwiperSlide><Feature title ={featureinfo[0].title} info = {featureinfo[0].info} small_icon={featureinfo[0].small_icon} img= {featureinfo[0].img}/></SwiperSlide>
        <SwiperSlide> <Feature title ={featureinfo[1].title} info = {featureinfo[1].info} small_icon={featureinfo[1].small_icon} img= {featureinfo[1].img}/></SwiperSlide>
        <SwiperSlide><Feature title ={featureinfo[2].title} info = {featureinfo[2].info} small_icon={featureinfo[2].small_icon} img= {featureinfo[2].img}/></SwiperSlide>
        <SwiperSlide>  <Feature title ={featureinfo[3].title} info = {featureinfo[3].info} small_icon={featureinfo[3].small_icon} img= {featureinfo[3].img}/></SwiperSlide>
       
      </Swiper>
  );
};

export default Slider;
