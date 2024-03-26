import React, { useState } from "react";
import "./Navbar.scss";
import { IoMdArrowDropdown } from "react-icons/io";
import Profile from "../../../../Profile";
import { Link } from "react-router-dom";
// import "./studentslist"

const Navbar = () => {
  // csep/.....
  const [isActive, setIsActive] = useState(false);

  // CSAP///////////
  const [isTrue, setIsTrue] = useState(false);

  

  return (
    <nav className="nav-student">
      <div className="enroll">

        
      <Link to={"/studentslist"} className="enrolled" >Enrolled</Link>
      <Link to={"/signup"} className="signup" >Signup</Link> 


      


      </div>
      <div className="dropdown">
        <div className="csep">
          <div className="dropdown-btn" onClick={(e) => setIsActive(!isActive)}>
            <p className="icon">
              CSEP
              <span>
                <IoMdArrowDropdown />
              </span>
            </p>
          </div>

          {isActive && (
            <div className="content">
              <div className="dropitem">
                <h3>.net</h3>
              </div>
              <div className="dropitem">
                <h3>Sap</h3>
              </div>
              <div className="dropitem">
                <h3>Frontend</h3>
              </div>
              <div className="dropitem">
                <h3>Backend</h3>
              </div>
              <div className="dropitem">
                <h3>testing</h3>
              </div>
            </div>
          )}

          

        </div>

        <div className="CSAP">
          <div className="dropdown-btn" onClick={(i) => setIsTrue(!isTrue)}>
            <p className="icon">
              CSAP
              <span>
                <IoMdArrowDropdown />
              </span>
            </p>
          </div>

          {isTrue && (
            <div className="content">
              <div className="dropitem">
                <h3>GRE</h3>
              </div>
              <div className="dropitem">
                <h3>TOFEL</h3>
              </div>
              <div className="dropitem">
                <h3>IELTS</h3>
              </div>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
