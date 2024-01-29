import React from 'react'
import group from"../../Assets/Group.png"
import dashborad from "../../Assets/dashboard.png"
import briefcase from "../../Assets/briefcase.png"
import bank from "../../Assets/bank.png"
import faq from "../../Assets/faq.png"
import icon from "../../Assets/Icon.png"
import search from "../../Assets/search.png"
import logout from "../../Assets/logout 1.png"
import chalkboar from "../../Assets/chalkboar.png"
import book from "../../Assets/book.png"
import "./SidebarStyle.css"
import { Link } from 'react-router-dom'

import Recuiter from './Recuiter'
import { Routes,Route} from 'react-router-dom'
const Sidebar = () => {

const menu=[
  // {
  //   photo: dashborad,
  //   text: "Dashbord",
  //   Link: "/dashbord"
  // },
  {
    photo: bank,
    text: "College",
    Link: "/college"
  },
  {
    photo: icon,
    text: "Student",
    Link: "/student"
  },
  {
    photo: chalkboar,
    text: "Mentor",
    Link: "/mentor"
  },
  {
    photo: search,
    text: "Recuiter",
    Link: "/recuiter" 
  },
  {
    photo: book,
    text: "Course",
    Link: "/course"
  },
  {
    photo: briefcase,
    text: "Jobs",
    Link: "/jobs"
  },
  {
    photo: faq,
    text: "Interview",
    Link: "/interview"
  },
  {
    photo: faq,
    text: "Payments",
    Link: "/payments"
  }
];

  
  return (
   <nav className='nav'>
    <img src={group}/>
   
     <div className='list'>   
     <Link to= "">
        <img src={dashborad}/>
        <p id="p">Dashbord</p>
      </Link> {
     menu.map ((e, idx) =>
      <>
      
     <Link to = "{Link}">
     <img src={e.photo}/>
     <p>
     {e.text}
     </p>
     </Link>
     </>
     
     )
     }
      
     </div>
     <div className='menu'>
      <Link to="">
      <img src={logout}/>
      <p>logout</p>
      </Link>
     </div>
   
   </nav>
  )
}

export default Sidebar

