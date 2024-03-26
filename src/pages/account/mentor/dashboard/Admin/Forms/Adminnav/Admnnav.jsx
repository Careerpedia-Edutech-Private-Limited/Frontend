import React from 'react'
import { FaChevronLeft } from "react-icons/fa";
import { IoMdNotificationsOutline } from "react-icons/io";
import "./admnnav.scss"

const Admnnav = () => {
  return (
    <div className='admnav'>
        <div className="adminnav">
            <div className="admn">
            <FaChevronLeft />

            </div>
            <h3>College Admin profile edit </h3>

        </div>
        <div className="belicn">
        <IoMdNotificationsOutline  id='belicn'/>

        </div>

    </div>
  )
}

export default Admnnav