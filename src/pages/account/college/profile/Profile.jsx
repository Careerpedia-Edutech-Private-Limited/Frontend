import React from "react";
// import '../Profile.css'
import "./components/Profile.css";
import Sidebar from "./components/Sidebar/sidebar";
import Navbar from "./components/Navbar/Navbar";
import Details from "./BacisDetails/Details";
import Contact from "./components/Contact-Details/Contact";
import CollegeDetails from "./components/CollegeDetails/collegeDetails";

const Profile = () => {
  return (
    <>
      <div className="containers">
        <div className="container1">
          <Sidebar />
        </div>
        <div className="main-container">
        <div className="container2">
          <Navbar />
          </div>
          
            <div className="container3">
              <Details />
            </div>
            <div className="container4">
              <Contact />
            </div>
            <div className="container5">
              <CollegeDetails />
            </div>
          </div>
        </div>
      {/* </div> */}
    </>
  );
};

export default Profile;
