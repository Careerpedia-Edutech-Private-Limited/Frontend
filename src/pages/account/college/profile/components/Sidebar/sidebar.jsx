import React from "react";
import "./sidebar.css";
import image from "../../../../../../assets/images/profile.png";
import { FaGraduationCap } from "react-icons/fa";
import { MdDashboard } from "react-icons/md";
import { FaBriefcase } from "react-icons/fa6";
import { IoIosLogOut } from "react-icons/io";
const Sidebar = () => {
  return (
    <>
    <div className="main3">
      <div className="sidebar">
        <div className="logo">
          <img
            src="https://assets-global.website-files.com/6417debf5aac655a56a357c4/64a400885b6f2c6c65040d5b_Group.svg"
            alt="logo"
          ></img>
        </div>
        <div className="menu-list">
          <img src={image} alt="" />
          <p>Katie Pena</p>
        </div>
        <div className="list-items">
          <div className="list1">
            <MdDashboard className="dashboard-icon" />
            <p>Dashboard</p>
          </div>
          <div className="list2">
            <FaGraduationCap className="education-icon" />
            <p>Candidates</p>
          </div>
          <div className="list3">
            <FaBriefcase className="experience-icon" />
            <p>Jobs</p>
          </div>
        </div>
      </div>
      <div className="list4">
            <IoIosLogOut className="logout-icon" />
            <p>Logout</p>
          </div>
      </div>
    </>
  );
};

export default Sidebar;
