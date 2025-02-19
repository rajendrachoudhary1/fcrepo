import React from 'react'
import logo from '../../assets/logo.png'
import './Navbar.css'

const Navbar = () => {
  return (
    <div>
      <nav>
        <img src={logo} alt="" />
        <button>Contact Us</button>
      </nav>
    </div>
  )
}

export default Navbar
