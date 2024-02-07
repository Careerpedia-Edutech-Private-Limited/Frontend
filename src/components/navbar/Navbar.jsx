import React from 'react'
import notificationImage from '../../assets/bell_image.svg'
import './Navbar.scss'

const navbar = () => {
  return (
    <div className = 'nav'>
     <p>Mentor</p>
     <div className="notification_image">
      <img src={notificationImage} alt="" />
      <div className='eclipse'></div>
     </div>
    </div>
  )
} 

export default navbar