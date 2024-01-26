import React from 'react'
import "./Sidebar.css"
import logo from './Assets/homelogo.png'
import profile from "./Assets/profile.png"
import progressbar from "./Assets/progressbar.png"



import { BsFillGridFill } from "react-icons/bs";
import { IoIosBookmarks } from "react-icons/io";
import { GiOpenBook } from "react-icons/gi";
import { IoBagRemove } from "react-icons/io5";
import { HiMiniGift } from "react-icons/hi2";
import { BiSolidMessageDetail } from "react-icons/bi";
import { TbMessageCircleQuestion } from "react-icons/tb";
import { IoLogOut } from "react-icons/io5";


import { Link } from 'react-router-dom'


const Sidebar = () => {
   
    return (
        <div className='main'>

            <div className="homeLogo">
                <img src={logo} alt="" />
            </div>
            <div className="profilBox">
                <div className="name">
                    <img src={profile} alt="" />
                    <h6>Katie Pena</h6>
                </div>
                <p>Complete your profile</p>
                <div className="progressBar">
                    <img src={progressbar} alt="" />
                    35%
                </div>
            </div>

            <ul className='menu'>
                <Link to="/student/dashboard"> <li><BsFillGridFill />Dashboard</li></Link>
                <Link to="/student/Basic-course"> <li><IoIosBookmarks />Basic Course</li></Link>
                <Link to="/student/Csep"> <li><GiOpenBook />CSEP</li></Link>
                <Link to="/student/Csap"> <li><GiOpenBook />CSAP</li></Link>
                <Link to="/student/Jobs"> <li><IoBagRemove />Jobs</li></Link>
                <Link to="/student/Refer"> <li><HiMiniGift />Refer & Earn</li></Link>
                <Link to="/student/Support"> <li><BiSolidMessageDetail />Support</li></Link>
                <Link to="/student/Interviews"> <li><TbMessageCircleQuestion />Interviews</li></Link>
                <Link to="/student/Logout"> <li><IoLogOut />Logout</li></Link>


            </ul>

        </div>

    )
}

export default Sidebar
