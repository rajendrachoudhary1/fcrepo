import React from 'react'
import heroimg from '../../assets/Frame 306.png'
import smallicon from '../../assets/small.png'
import './Hero.css'
const Hero = () => {
  return (
    <div className="container">
         <div className='hero'>
              <div className='hero-left'>
                 <div className='small-icon'>
                    <img src={smallicon} alt="" />
                     <p>WELCOME TO FOUNDERSCLUB</p>
                 </div>
                 <div>
                 <h1>Where Startups Meet Talent</h1>
                 <button>Download Now</button>
                 </div>
                 
                 <div className="underline"></div>
                <p className='hero-text'>Foundersclub is your gateway to connect, innovate, and thrive. Join a global community of startups and professionals driving the future of business and technology.</p>
               
              </div>
             <div className='hero-right'>
               <img src={heroimg} alt="" />
             </div>
        </div>
    </div>
    
  )
}

export default Hero
