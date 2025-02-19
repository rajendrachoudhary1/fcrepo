import React from 'react'
import './Benefit.css'
import benefit_icon1 from '../../assets/Codesandbox.png'
import benefit_icon2 from '../../assets/Command.png'
import benefit_icon3 from '../../assets/Compass.png'
import benefit_icon4 from '../../assets/Cpu.png'

const Benefit = () => {
  return (
    <div className='container'>
        <div className='benefit-container'>
            <h1>Benefits</h1>
            <div className="benefit">
               <div className='b-left'>
                 <p className='b-title'><img src={benefit_icon1} alt="" />NETWORK</p>
                 <p className='b-description'>Dive into thriving communities tailored to your interests. Share ideas, seek advice, and spark innovation by connecting with like-minded individuals.</p>
               </div>
               <div className='b-right'>
               </div>
            </div>

            <div className="benefit">
               <div className='b-left'>
                 <p className='b-title'><img src={benefit_icon2} alt="" />GLOBAL</p>
                 <p className='b-description'>Dive into thriving communities tailored to your interests. Share ideas, seek advice, and spark innovation by connecting with like-minded individuals.</p>
               </div>
               <div className='b-right'>
               </div>
            </div>

            <div className="benefit">
               <div className='b-left'>
                 <p className='b-title'><img src={benefit_icon3} alt="" />COLLABORATE</p>
                 <p className='b-description'>Dive into thriving communities tailored to your interests. Share ideas, seek advice, and spark innovation by connecting with like-minded individuals.</p>
               </div>
               <div className='b-right'>
               </div>
            </div>

            <div className="benefit">
               <div className='b-left'>
                 <p className='b-title'><img src={benefit_icon4} alt="" />MATCH SKILL</p>
                 <p className='b-description'>Dive into thriving communities tailored to your interests. Share ideas, seek advice, and spark innovation by connecting with like-minded individuals.</p>
               </div>
               <div className='b-right'>
               </div>
            </div>

        </div>
    </div>
  )
}

export default Benefit
