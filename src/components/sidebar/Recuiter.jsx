import React from "react";
import Sidebar from "./Sidebar";
import Navbar from "../Navbar/Navbar";
import "./Recuiter.css";
import cell from "../../Assets/Cell.png"
import logo1 from "../../Assets/logo1.png"
import logo2 from "../../Assets/logo2.png"
import logo3 from "../../Assets/logo3.png"
const Recuiter = () => {
  const recruiters = [
    {
      logo: cell,
      companyName: 'Inkprog',
      recruiterName: 'Jenny',
      sector: 'IT',
      city: 300,
      phoneNumber: '9876543210',
      email: 'james@gmail.com',
    },
    {
      logo: logo1,
      companyName: 'Inkprog',
      recruiterName: 'Jenny',
      sector: 'IT',
      city: 300,
      phoneNumber: '9876543210',
      email: 'james@gmail.com',
    },
    {
      logo: logo2,
      companyName: 'Inkprog',
      recruiterName: 'Jenny',
      sector: 'IT',
      city: 300,
      phoneNumber: '9876543210',
      email: 'james@gmail.com',
    },
    {
      logo: logo3,
      companyName: 'Inkprog',
      recruiterName: 'Jenny',
      sector: 'IT',
      city: 300,
      phoneNumber: '9876543210',
      email: 'james@gmail.com',
    },
    {
      logo: cell,
      companyName: 'Inkprog',
      recruiterName: 'Jenny',
      sector: 'IT',
      city: 300,
      phoneNumber: '9876543210',
      email: 'james@gmail.com',
    },
    {
      logo: cell,
      companyName: 'Inkprog',
      recruiterName: 'Jenny',
      sector: 'IT',
      city: 300,
      phoneNumber: '9876543210',
      email: 'james@gmail.com',
    },
    {
      logo: logo2,
      companyName: 'Inkprog',
      recruiterName: 'Jenny',
      sector: 'IT',
      city: 300,
      phoneNumber: '9876543210',
      email: 'james@gmail.com',
    },
    {
      logo: logo3,
      companyName: 'Inkprog',
      recruiterName: 'Jenny',
      sector: 'IT',
      city: 300,
      phoneNumber: '9876543210',
      email: 'james@gmail.com',
    },
    {
      logo: logo3,
      companyName: 'Inkprog',
      recruiterName: 'Jenny',
      sector: 'IT',
      city: 300,
      phoneNumber: '9876543210',
      email: 'james@gmail.com',
    }
    
  ];
  
  return (
    <div className="containers">
      <div className="sidebar">
        <Sidebar />
      </div>
      <div className="navbarrecuiter">
        <div className="navbarrecuiter1">
          <Navbar heading="Recuiter" />
        </div>
        <div className="allrecuters">
          <p>All Recruiters</p>
          <button>Create New Mentor</button>
        </div>
        <div className="recruiterstable">
        <table className="recruiters-table">
      <thead>
        <tr>
          <th>Logo</th>
          <th>Company Name</th>
          <th>Recruiter Name</th>
          <th>Sector</th>
          <th>City</th>
          <th>Phone Number</th>
          <th>Email ID</th>
        </tr>
      </thead>
      <tbody>
        {recruiters.map((recruiter, index) => (
          <tr key={index}>
            <td><img src={recruiter.logo}/></td>
            <td>{recruiter.companyName}</td>
            <td>{recruiter.recruiterName}</td>
            <td>{recruiter.sector}</td>
            <td>{recruiter.city}</td>
            <td>{recruiter.phoneNumber}</td>
            <td>{recruiter.email}</td>
          </tr>
        ))}
      </tbody>
    </table>


        </div>
      </div>
    </div>
  );
};

export default Recuiter;
