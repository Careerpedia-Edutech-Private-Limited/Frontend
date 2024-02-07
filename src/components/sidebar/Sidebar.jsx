import React from 'react'
import './Sidebar.scss'
import { Link } from 'react-router-dom'

//images
import Logo from '../../../src/assets/Logo.svg'
import DashboardIcon from '../../assets/page_1.svg'
import CollegeIcon from '../../assets/page_2.svg'
import StudentIcon from '../../assets/page_3.svg'
import MentorIcon from '../../assets/page_4.svg'
import RecruiterIcon from '../../assets/page_5.svg'
import CourseIcon from '../../assets/page_6.svg'
import JobsIcon from '../../assets/page_7.svg'
import InterviewIcon from '../../assets/page_8.svg'
import PaymentsIcon from '../../assets/page_9.svg'
import LogoutIcon from '../../assets/page_10.svg'


const sidebarData = [
  {
    id : 1,
    img : DashboardIcon,
    pageName : "Dashboard",
    link:'./dashboard',
  },
  {
    id : 2,
    img : CollegeIcon,
    pageName : "College",
    link:'./college',
  },
  {
    id : 3,
    img : StudentIcon,
    pageName : "Student",
    link:'./student',
  },
  {
    id : 4,
    img : MentorIcon,
    pageName : "Mentor",
    link:'./mentor',
  },
  {
    id : 5,
    img : RecruiterIcon,
    pageName : "Recruiter",
    link:'./recruiter',
  },
  {
    id : 6,
    img : CourseIcon,
    pageName : "Course",
    link:'./course',
  },
  {
    id : 7,
    img : JobsIcon,
    pageName : "Jobs",
    link:'./jobs',
  },
  {
    id : 8,
    img : InterviewIcon,
    pageName : "Interview",
    link:'./interview',
  },
  {
    id : 9,
    img : PaymentsIcon,
    pageName : "Payments",
    link:'./payments',
  },

]



const Sidebar = () => {
  return (
   
   <div className='sideBar'>

      <Link to = "/" >
      <img src={Logo} alt="" />
      </Link>
      
      

      <div className="allPages">
        <div className="upperPages">
        {
            sidebarData.map((item,index) => (
              <div key={item.id} className="eachPage">
                <Link to = {item.link} >
                <img src={item.img} alt="" />
                <p>{item.pageName}</p>
                </Link>
              </div>
            ))
          }
        
        </div>
         
        <div className="logoutPage">
          <img src={LogoutIcon} alt="" />
          <p>Logout</p>
        </div>

      </div>
   </div>
  )
}

export default Sidebar