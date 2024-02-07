import React from 'react'

import "../sidebar/Sidebar.scss"

import logo from "../../assets/logo.png"

import img from "../sidebar/Assets/page_1.svg"
import img2 from "../sidebar/Assets/page_2.svg"
import img3 from "../sidebar/Assets/page_3.svg"
import img4 from "../sidebar/Assets/page_4.svg"
import img5 from "../sidebar/Assets/page_5.svg"
import img6 from "../sidebar/Assets/page_6.svg"
import img7 from "../sidebar/Assets/page_7.svg"
import img8 from "../sidebar/Assets/page_8.svg"
import img9 from "../sidebar/Assets/page_9.svg"
import img10 from "../sidebar/Assets/page_10.svg"


const data=[
  {
    id:1,
    img:img,
    name:"Dashborad"

  },

  {
    id:2,
    img:img2,
    name:"college"

  },

  {
    id:3,
    img:img3,
    name:"student"

  },

  {
    id:4,
    img:img4,
    name:"mentor"

  },


  {
    id:5,
    img:img5,
    name:"Recrutier"

  },

  {
    id:6,
    img:img6,
    name:"Course"

  },

  {
    id:7,
    img:img7,
    name:"jobs"

  },

  {
    id:8,
    img:img8,
    name:"Interview"

  },

  {
    id:9,
    img:img9,
    name:"payments"

  },

  

]
  

const sidebar = () => {
  return (
    <>
  
  <div className="sidebarleft">

<div className="top">
     <img src={logo} alt="" />
</div>

<div className="middle">
     
{
  data.map ((item)=>(
    <>
    <div className='middlecontent'key={item.id}>
       <img src={item.img} alt="" /> 
       <p>{item.name}</p>
       
    

       </div>
   
      

   </>
       

  ))
}

<div className="content2">
       <img src={img10} alt="" />
       <p>Lougout</p>
      </div>
</div>



  </div>
    
    
    
    
    
    </>
  )
}

export default sidebar