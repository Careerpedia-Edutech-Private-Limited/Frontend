import React from 'react'

import alaram from "../../assets/alaram.png";
import "./NavbarStyle.css";

const Navbar = () => {
  return (
    <nav>
      <p>Interview</p>
      <img src={alaram} id='img'></img>
    </nav>
  )
}

export default Navbar