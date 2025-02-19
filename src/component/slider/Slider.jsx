import React from 'react'
import './Slider.css'
 
import feature_img from '../../assets/Group 558.png'
import feature_img1 from '../../assets/Group2.png'
import feature_img2 from '../../assets/Group3.png'
import feature_img3 from '../../assets/Group4.png'
import Feature from '../features/Feature'
import { useState } from 'react'
import { useEffect } from 'react'

const featureinfo =[
  {
    title :'Global Networking',
    info : 'Dive into thriving communities tailored to your interests. Share ideas, seek advice, and spark innovation by connecting with like-minded individuals.',
    img : feature_img
  },
  {
    title :'Seamless Applications',
    info : 'Easily apply for jobs and events or manage applications for roles in your startup—all from one intuitive dashboard.',
    img : feature_img1
  },
  {
    title :'Industry Highlights',
    info : 'Never miss out on industry happenings. From tech summits to business workshops, explore events that expand your knowledge and network.',
    img : feature_img2
  },
  {
    title :'Startup Showcase',
    info : 'Founders can spotlight their startups to attract collaborators, investors, and talent, building visibility within a targeted audience.',
    img : feature_img3
  },
]
      

const Slider = () => {

    const [indexupdate, setindexupdate] = useState(0);

    const update=()=>{
        setindexupdate(indexupdate===3? 0: indexupdate+1)
    }

    useEffect(()=>{
       const s = setInterval(() => {
         update()
       },5000);

       return ()=> clearInterval(s);

    },[indexupdate])

   

  return (
    <div className='slider-container'>
         <Feature title={featureinfo[indexupdate].title}  info={featureinfo[indexupdate].info} img={featureinfo[indexupdate].img}/>
    </div>
  )
}

export default Slider
