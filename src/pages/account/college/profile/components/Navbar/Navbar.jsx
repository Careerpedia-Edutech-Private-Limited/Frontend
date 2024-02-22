import React from "react";
import "./Navbar.css";
import { RiArrowLeftSLine } from "react-icons/ri";
import { FiBell } from "react-icons/fi";



function Navbar() {
    return (
        <>
            <div className="navbar">
                <div className="heading">
                <RiArrowLeftSLine className="icon"/>
                    <h1>College Admin Profile</h1>
                </div>
                <div className="bell">
                    <FiBell className="bell"/>
                </div>
            </div>
        </>
    );
}

export default Navbar;
