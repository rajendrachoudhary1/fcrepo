import React from 'react'
import './Footer.css'
import logo from '../../assets/logo.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin,faXTwitter } from "@fortawesome/free-brands-svg-icons";
import playstore_icon from '../../assets/Group 556.png'
import applestore_icon from '../../assets/Group 555.png'

const Footer = () => {
  return (
    <div className='container footer'>
        
         <div className='footer-left'>
            <img src={logo} alt="" />
            <p>Foundersclub</p>
            <p>Follow on</p>
            <div className='footer-icons'>
                <a href="https://x.com/?mx=2" className='footer-icon' ><span><FontAwesomeIcon icon={faXTwitter} /></span> Twitter</a>
                <a href="https://in.linkedin.com/" className='footer-icon'><span><FontAwesomeIcon icon={faLinkedin} /></span> LinkedIn</a>
            </div>
         </div>

         <div className='footer-right'>
            <h3>Download from</h3>
             <a href="https://play.google.com/store/games?device=windows"><img src={playstore_icon} alt="" /></a>
             <a href="https://www.apple.com/app-store/"><img src={applestore_icon} alt="" /></a>

         </div>
    </div>
  )
}

export default Footer
