import React from "react";
import { CiBellOn } from "react-icons/ci";
import "./Students.scss"

const Studentnavbar = () => {
  return (
    <nav className="mainnav">
      <div className="student">
        <h2>Students</h2>
      </div>
      

        <div className="bell">
          <CiBellOn />
        </div>
    </nav>
  );
};

export default Studentnavbar;
