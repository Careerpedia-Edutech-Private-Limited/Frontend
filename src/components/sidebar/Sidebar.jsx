import React from "react";
import group from "../../Assets/Group.png";
import dashborad from "../../Assets/dashboard.png";
import briefcase from "../../Assets/briefcase.png";
import bank from "../../Assets/bank.png";
import faq from "../../Assets/faq.png";
import icon from "../../Assets/Icon.png";
import search from "../../Assets/search.png";
import logout from "../../Assets/logout 1.png";
import chalkboar from "../../Assets/chalkboar.png";
import book from "../../Assets/book.png";
import "./SidebarStyle.css";
import { Link } from "react-router-dom";

// import Recruiter from "./Recruiter";
// import { Routes, Route } from "react-router-dom";
const Sidebar = () => {
  const menu = [
    {
      id: 1,
      photo: bank,
      text: "College",
      Link: "/college",
    },
    {
      id: 2,
      photo: icon,
      text: "Student",
      Link: "/student",
    },
    {
      id: 3,
      photo: chalkboar,
      text: "Mentor",
      Link: "/mentor",
    },
    {
      id: 4,
      photo: search,
      text: "Recuiter",
      Link: "/recuiter",
    },
    {
      id: 5,
      photo: book,
      text: "Course",
      Link: "/course",
    },
    {
      id: 6,
      photo: briefcase,
      text: "Jobs",
      Link: "/jobs",
    },
    {
      id: 7,
      photo: faq,
      text: "Interview",
      Link: "/interview",
    },
    {
      id: 8,
      photo: faq,
      text: "Payments",
      Link: "/payments",
    },
  ];

  return (
    <nav className="nav">
      <img src={group} />

      <div className="list">
        <Link to="">
          <img src={dashborad} />
          <p id="p">Dashbord</p>
        </Link>{" "}
        {menu.map((e) => (
          <>
            <Link to="{Link}" key={e.id}>
              <img src={e.photo} />
              <p>{e.text}</p>
            </Link>
          </>
        ))}
      </div>
      <div className="menu">
        <Link to="">
          <img src={logout} />
          <p>logout</p>
        </Link>
      </div>
    </nav>
  );
};

export default Sidebar;
