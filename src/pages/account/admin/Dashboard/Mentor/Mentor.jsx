import React, { useEffect, useState } from "react";
import './Mentor.scss';
import Sidebar from "../../../../../../src/components/sidebar/Sidebar";
import Navbar from "../../../../../../src/components/navbar/Navbar";
import axios from "axios";
import Form  from "./Form";
import submitImg from './assests/accept.png'

const Mentor = () => {
  const [data, setData] = useState([]);
  const [isPopupVisible, setIsPopupVisible] = useState(false);
  const[submitPopup,setSubmitPopup] = useState(false)

  
  //FORM
  const[values,setValues] = useState({
    firstname:"",
    lastname:"",
    email:"",
  })

  const inputValues = [
    {
      id:1,
      name:"firstname",
      label:"First Name :",
      type:"text",
      placeholder:"Enter First Name",
      errorMessage:"First Name should be 3-16 characters and shouldn't include any special characters",
      pattern:"^[a-zA-Z]{3,16}$",
      required:false

    },
    {
      id:2,
      name:"lastname",
      label:"Last Name :",
      type:"text",
      placeholder:"Enter Last Name",
      errorMessage:"Last Name should be 3-16 characters and shouldn't include any special characters",
      pattern:"^[a-zA-Z]{3,16}$",
      required:false
    },
    {
      id:3,
      name:"email",
      label:"Email :",
      type:"email",
      placeholder:"Enter Email",
      errorMessage:"Enter valid email",
      required:false,
    }
  ]

  



  useEffect(() => {
    axios
      .get("http://localhost:3000/mentors")
      .then((res) => setData(res.data))
      .catch((err) => console.log(err));
  });

  const handleClick = (e) => {
    e.preventDefault();
    setIsPopupVisible(true);
  };

  const clickSubmit = (e) => {
    e.preventDefault();

    const isFormValid = validateForm();

    if (isFormValid) {
      setSubmitPopup(true)
    } 
    else {
      alert('Please fill in all required fields');
    }
  };

  const handleCancel = () => {
    setIsPopupVisible(false);
  };

  const onChange = (e) => {
   setValues({...values,[e.target.name]: e.target.value})
  }

  const validateForm = () => {
    return inputValues.every((item) => values[item.name] !== undefined && values[item.name] !== '');
  }

  const clickClose = (e) => {
    e.preventDefault();
    setSubmitPopup(false);
  }

  return (
    <div className="main_container">
      <Sidebar />

      <div className="hero">
        <Navbar />

        <div className="add_members">
          <p>All Members</p>
          <button onClick={handleClick}>Create New Member</button>
        </div>
        
        <div className="table">
          <table>
            <thead>
              <tr>
                <th>Profile</th>
                <th>Mentor Id</th>
                <th>Name</th>
                <th>Course</th>
                <th>Phone Number</th>
                <th>Email Id</th>
                <th>Status</th>
              </tr>
            </thead>

            <tbody>
              {data.map((item, index) => (
                <tr key={index}>
                  <td>{item.img}</td>
                  <td>{item.mentorId}</td>
                  <td>{item.name}</td>
                  <td>{item.course}</td>
                  <td>{item.mobile}</td>
                  <td>{item.mail}</td>
                  <td>{item.status}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {isPopupVisible && (
          <div className="popup" >
            <form>
              <div className="cancel" onClick={handleCancel}>
                <div className="line1"></div>
                <div className="line1"></div>
              </div>

             
                <div className="form_main_container"> 
              {
                inputValues.map((item)=>(
                    <Form key={item.id} {...item} value = {values[item.name]} onChange = {onChange} />
                ))
              }
              </div>
              <div className="btn">
                
                <button onClick={clickSubmit}>Submit</button>
                                
              </div>
            </form>
          </div>
        )}

        {
          submitPopup && (
            <div className = "submitted" >
            <img src={submitImg} alt="" />
                <h2>Thank You</h2>
              <p>Form Submitted Successfully</p>
              <button onClick={clickClose} >Close</button>
            </div>
          )
        }


        
      </div>
    </div>
  );
};

export default Mentor;
