import React from 'react'

import alram from "../../assets/alaram.png"
import "./NavbarStyle.css"

const navbar = ({heading}) => {


  return (
   <nav className='navbar'>
    <p>{heading}</p>
    <img src={alram} id='img'></img>
   </nav>
  )
}

export default navbar