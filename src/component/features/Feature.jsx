import React from 'react'
import smallicon from '../../assets/small.png'
// import feature_img from '../../assets/Group 558.png'
import './Feature.css'

const Feature = (props) => {
  return (
    <div className='container'>
        <h1 className='feature-title'>Features</h1>
        <div className='features'>
            <div className='feature-text'>
                  
                <h3>{props.title}</h3>
                <p className='feature-para'>
                  {props.info}
                </p>
                 <div className='feature-icon'>
                  <img src={smallicon} alt="" />
                   <p>Welcome To FounderClub</p>
                 </div>
                 <div className='feature-icon'>
                  <img src={smallicon} alt="" />
                   <p>Welcome To FounderClub</p>
                 </div>
                 <div className='feature-icon'>
                  <img src={smallicon} alt="" />
                   <p>Welcome To FounderClub</p>
                 </div>

            </div>
            <div className='feature-img'>
              <img src={props.img} alt="" />
            </div>
        </div>
      
    </div>
  )
}

export default Feature
 
