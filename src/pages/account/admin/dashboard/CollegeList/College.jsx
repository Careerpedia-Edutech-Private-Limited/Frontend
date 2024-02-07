import React, { useState } from 'react'

import "../CollegeList/College.scss"

import Navbar from '../../../../../components/navbar/Navbar'
import Sidebar from '../../../../../components/sidebar/Sidebar'

import tablelogo from "./Assets/logo.png"







  const tabledata=[

    {
      id:1,
      img:tablelogo,
      idnum:"vits090909",
      name:"careerpedia",
      founder:"Rahul Reddy",
      email:"RahulReddy@gmail",
      city:"hyderabad",
      contact:"9845673211",
    },

    {
      id:2,
      img:tablelogo,
      idnum:"vits090909",
      name:"careerpedia",
      founder:"Rahul Reddy",
      email:"RahulReddy@gmail",
      city:"hyderabad",
      contact:"9845673211",
    },

    {
      id:3,
      img:tablelogo,
      idnum:"vits090909",
      name:"careerpedia",
      founder:"Rahul Reddy",
      email:"RahulReddy@gmail",
      city:"hyderabad",
      contact:"9845673211",
    },

    {
      id:4,
      img:tablelogo,
      idnum:"vits090909",
      name:"careerpedia",
      founder:"Rahul Reddy",
      email:"RahulReddy@gmail",
      city:"hyderabad",
      contact:"9845673211",
    },

    {
      id:5,
      img:tablelogo,
      idnum:"vits090909",
      name:"careerpedia",
      founder:"Rahul Reddy",
      email:"RahulReddy@gmail",
      city:"hyderabad",
      contact:"9845673211",
    },

    {
      id:6,
      img:tablelogo,
      idnum:"vits090909",
      name:"careerpedia",
      founder:"Rahul Reddy",
      email:"RahulReddy@gmail",
      city:"hyderabad",
      contact:"9845673211",
    },

    {
      id:7,
      img:tablelogo,
      idnum:"vits090909",
      name:"careerpedia",
      founder:"Rahul Reddy",
      email:"RahulReddy@gmail",
      city:"hyderabad",
      contact:"9845673211",
    },

    {
      id:8,
      img:tablelogo,
      idnum:"vits090909",
      name:"careerpedia",
      founder:"Rahul Reddy",
      email:"RahulReddy@gmail",
      city:"hyderabad",
      contact:"9845673211",
    },

    {
      id:9,
      img:tablelogo,
      idnum:"vits090909",
      name:"careerpedia",
      founder:"Rahul Reddy",
      email:"RahulReddy@gmail",
      city:"hyderabad",
      contact:"9845673211",
    },

    {
      id:10,
      img:tablelogo,
      idnum:"vits090909",
      name:"careerpedia",
      founder:"Rahul Reddy",
      email:"RahulReddy@gmail",
      city:"hyderabad",
      contact:"9845673211",
    },

    {
      id:11,
      img:tablelogo,
      idnum:"vits090909",
      name:"careerpedia",
      founder:"Rahul Reddy",
      email:"RahulReddy@gmail",
      city:"hyderabad",
      contact:"9845673211",
    },

    {
      id:12,
      img:tablelogo,
      idnum:"vits090909",
      name:"careerpedia",
      founder:"Rahul Reddy",
      email:"RahulReddy@gmail",
      city:"hyderabad",
      contact:"9845673211",
    },
    {
      id:13,
      img:tablelogo,
      idnum:"vits090909",
      name:"careerpedia",
      founder:"Rahul Reddy",
      email:"RahulReddy@gmail",
      city:"hyderabad",
      contact:"9845673211",
    },
    {
      id:14,
      img:tablelogo,
      idnum:"vits090909",
      name:"careerpedia",
      founder:"Rahul Reddy",
      email:"RahulReddy@gmail",
      city:"hyderabad",
      contact:"9845673211",
    },
    {
      id:15,
      img:tablelogo,
      idnum:"vits090909",
      name:"careerpedia",
      founder:"Rahul Reddy",
      email:"RahulReddy@gmail",
      city:"hyderabad",
      contact:"9845673211",
    },
    {
      id:16,
      img:tablelogo,
      idnum:"vits090909",
      name:"careerpedia",
      founder:"Rahul Reddy",
      email:"RahulReddy@gmail",
      city:"hyderabad",
      contact:"9845673211",
    },
    {
      id:17,
      img:tablelogo,
      idnum:"vits090909",
      name:"careerpedia",
      founder:"Rahul Reddy",
      email:"RahulReddy@gmail",
      city:"hyderabad",
      contact:"9845673211",
    },


  ]
  


const College = () => {

  const[isVisible,setIsVisible] = useState(false)


   

  const handleSubmit =(e)=>{
    e.preventDefault();
    setIsVisible(true)
 }

 
  return (
    <div className='maincontainer'>
     
  
    <Sidebar/>

    <div className="middlecontainer">
      <Navbar/>

     <div className="middleContent">

      <div className="createMember">
      <p>All Colleges</p>

  <button onClick={handleSubmit}>Create New Mentor</button>
      </div>

  
    

    
    <table>
     <thead>
      <tr>
        <th>College Logo</th>
        <th>College Id</th>
        <th>College Name</th>
        <th>Founder Name</th>
        <th>Email Id </th>
        <th>City</th>
        <th>Contact Number</th>
      </tr>
     </thead>

      <tbody>
      {
        tabledata.map((item) => (
          <tr key={item.id}>
            <td><img src={tablelogo} alt="" /></td>
            <td>{item.idnum}</td>
            <td>{item.name}</td>
            <td>{item.founder}</td>
            <td>{item.email}</td>
            <td>{item.city}</td>
            <td>{item.contact}</td>
          </tr>
        ))
      }
     
      </tbody>

    </table>
   

  {

    isVisible && (
      <form>
      <div className="pops">
        <div className="pop">
        <label> FirstName </label>
        <input type="name" placeholder='enter the name' />
        </div>
        <div className="pop">
        <label> LastName </label>
        <input type="name" placeholder='enter the name' />
        </div>
        <div className="pop">
        <label> Email </label>
        <input type="Email" placeholder='enter the email' />
        </div>
        <div className="pop">
        <button>submit</button>
        </div>
       
      </div>
       
     </form>
    )
  }

     </div>





    </div>
     
   
    






        
    </div>
  )
}

export default College