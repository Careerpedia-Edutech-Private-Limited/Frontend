import React from 'react'
import './Navbar.css'
import notification from '../../Assets/notification.jpg'
const Navbar = () => {
  return (
    <div className='navContent'>
      <h2>Course</h2>
      <div className="bellIcon">
      <img src={notification}></img>
      </div>
    </div>
  )
}

export default Navbar