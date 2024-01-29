import React from 'react'

import alram from "../../assets/alaram.png"
import "./NavbarStyle.css"
const navbar = () => {
  return (
   <nav>
    <p>Carrerpedia Admin</p>
    <img src={alram} id='img'></img>
   </nav>
  )
}

export default navbar