import React from 'react'
import "./Navbar.css"
import { MdKeyboardArrowLeft } from "react-icons/md";
import img from "../../../../../../../assets/Notification.jpg"

const Navbar = () => {
  return (
   <>
   <nav>
    <div className="start">
    <svg xmlns="http://www.w3.org/2000/svg" width="7" height="11" viewBox="0 0 7 11" fill="none">
<path d="M3.46307 5.08109C3.07254 5.47162 3.07254 6.10478 3.46307 6.4953L6.39272 9.42498C6.72739 9.75965 6.72739 10.3023 6.39271 10.6369C6.05803 10.9716 5.51543 10.9716 5.18076 10.6369L1.03914 6.4953C0.648614 6.10478 0.648614 5.47161 1.03914 5.08109L5.18075 0.93948C5.51542 0.604804 6.05804 0.604804 6.39271 0.939479C6.72739 1.27415 6.72739 1.81677 6.39271 2.15145L3.46307 5.08109Z" fill="#2F4362"/>
</svg>
   <p>Recruiter Profile</p>
 </div>
 <div className="end">
 <img src={img} alt="" />
 </div>
   </nav>
   </>
  )
}

export default Navbar