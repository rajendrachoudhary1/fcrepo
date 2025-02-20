import React from 'react'
import smallicon from '../../assets/small.png'
// import feature_img from '../../assets/Group 558.png'
import './Feature.css'

const Feature = (props) => {
  return (
    <div className='container'>
         
        <div className='features'>
            <div className='feature-text'>
                  
                <h1>{props.title}</h1>
                <p className='feature-para'>
                  {props.info}
                </p>
                 <div className='feature-icon'>
                  <img src={props.small_icon} alt="" />
                   <p>Welcome To FounderClub</p>
                 </div>
                 <div className='feature-icon'>
                  <img src={props.small_icon} alt="" />
                   <p>Welcome To FounderClub</p>
                 </div>
                 <div className='feature-icon'>
                  <img src={props.small_icon} alt="" />
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
 
