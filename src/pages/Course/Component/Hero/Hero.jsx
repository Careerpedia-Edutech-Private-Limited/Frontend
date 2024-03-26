import React from "react";
import { FaEdit } from "react-icons/fa";
import "./Hero.scss";
import image from "../../../../assets/hero.png";
import { IoPerson } from "react-icons/io5";
import { PiBookOpenTextBold } from "react-icons/pi";
import { PiChatsBold } from "react-icons/pi";
import { FaTasks } from "react-icons/fa";

const Hero = () => {
  return (
    <div className="hero">
      <div className="preview">
        <div className="prew">
          <h2>Preview of course</h2>
        </div>
        <div className="edit">
          <div className="edt">
            <h2>Edit</h2>
          </div>
          <div className="edticn">
            <FaEdit />
          </div>
        </div>
      </div>

      <div className="herocont">
        <div className="emgge">
          <img src={image} alt=""/>
        </div>
        <div className="contentt">
          <div className="cont1">
            <h2>zero to hero Frontend developer with careerpedia</h2>
          </div>
          <div className="cont2">
            <h4>
              Popular english speaking and listning course to communicate with
              english speakers on the job,students,customers etc..
            </h4>
          </div>

          <div className="contt3">
            <div className="cont3">
              <div className="person">
                <IoPerson />
                <p>john due</p>
              </div>
              <div className="lesson">
                <PiBookOpenTextBold />
                <p>20 lessons</p>
              </div>
            </div>
            <div className="cont4">
              <div className="exercise">
                <PiChatsBold />
                <p>20 exercises</p>
              </div>
              <div className="tests">
                <FaTasks />
                <p>8 tests </p>
              </div>
            </div>
          </div>
          <div className="but">
            <button>Enroll Now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
