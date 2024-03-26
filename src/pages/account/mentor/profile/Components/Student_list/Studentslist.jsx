import React from "react";
import "./Student.scss";
import img1 from "../../../../../../assets/per1.jpeg"
import img2 from "../../../../../../assets/per1.jpeg";
import img3 from "../../../../../../assets/per2.jpeg";
import img4 from "../../../../../../assets/per3.jpeg";
import img5 from "../../../../../../assets/per4.jpeg";
import img6 from "../../../../../../assets/per6.jpeg";
import img7 from "../../../../../../assets/per7.jpeg";
import img8 from "../../../../../../assets/per8.jpeg";
import img9 from "../../../../../../assets/per2.jpeg";
import img10 from "../../../../../../assets/per1.jpeg";
import img11 from "../../../../../../assets/per3.jpeg";
import img12 from "../../../../../../assets/per4.jpeg";
import img13 from "../../../../../../assets/per5.jpeg";
import img14 from "../../../../../../assets/per6.jpeg";
import img15 from "../../../../../../assets/per7.jpeg";
import img16 from "../../../../../../assets/per7.jpeg";
import img17 from "../../../../../../assets/per8.jpeg";
import img18 from "../../../../../../assets/per2.jpeg";

import prog1 from "../../../../../../assets/prog1.jpeg"
import prog2 from "../../../../../../assets/prog2.png"
import prog4 from "../../../../../../assets/prog5.png"

import { FaFastForward } from "react-icons/fa";


const Studentslist = () => {
  



  const data = [
    {
      id: 1,
      profile: <img src={img1} alt="" />,
      name: " frank",
      course: "Design ",
      number: "12345678",
      email: "frank@gmail.com",
      level: " 1",
      progress: <img src={prog1} alt="" />,
      type: "csep",

    },

    {
      id: 2,
      profile: <img src={img2} alt="" />,
      name: " James",
      course: "Ielts ",
      number: "12345678",
      email: "James@gmail.com",
      level: " 2",
      progress: <img src={prog2} alt="" />,
      type: "csap",

    },

    {
      id: 3,
      profile: <img src={img3} alt="" />,
      name: " ben",
      course: "sap",
      number: "12345678",
      email: "ben@gmail.com",
      level: " 3",
      progress: <img src={prog1} alt="" />,
      type: "csep",


    },

    {
      id: 4,
      profile: <img src={img4} alt="" />,
      name: " carens",
      course: "Gre ",
      number: "12345678",
      email: "carens@gmail.com",
      level: " 4",
      progress: <img src={prog4} alt="" />,
      type: "csap",
      


    },
    {
      id: 5,
      profile: <img src={img5} alt="" />,
      name: " strokes",
      course: "Design ",
      number: "12345678",
      email: "strokes@gmail.com",
      level: " 5",
      progress: <img src={prog1} alt="" />,
      type: "csep",


    },
    {
      id: 6,
      profile: <img src={img6} alt="" />,
      name: " bond",
      course: "Tofel ",
      number: "12345678",
      email: "bond@gmail.com",
      level: " 6",
      progress: <img src={prog2} alt="" />,
      type: "csap",


    },
    {
      id: 7,
      profile: <img src={img7} alt="" />,
      name: " author",
      course: "backend",
      number: "12345678",
      email: "author@gmail.com",
      level: " 7",
      progress: <img src={prog1} alt="" />,
      type: "csep",

    },
    {
      id: 8,
      profile: <img src={img8} alt="" />,
      name: " louis",
      course: "Ielts ",
      number: "12345678",
      email: "louis@gmail.com",
      level: " 8",
      progress: <img src={prog4} alt="" />,
      type: "csap",

    },

    {
      id: 9,
      profile: <img src={img9} alt="" />,
      name: " rick",
      course: "testing ",
      number: "12345678",
      email: "James@gmail.com",
      level: " 9",
      progress: <img src={prog1} alt="" />,
      type: "csep",

    },
    {
      id: 10,
      profile: <img src={img10} alt="" />,
      name: " louis",
      course: "Tofel ",
      number: "12345678",
      email: "louis@gmail.com",
      level: " 10",
      progress: <img src={prog2} alt="" />,
      type: "csap",

    },
    {
      id: 11,
      profile: <img src={img11} alt="" />,
      name: " ella",
      course: "python",
      number: "12345678",
      email: "ella@gmail.com",
      level: " 10",
      progress: <img src={prog2} alt="" />,
      type: "csep",

    },
    {
      id: 12,
      profile: <img src={img12} alt="" />,
      name: " dua",
      course: "Gre",
      number: "12345678",
      email: "dua@gmail.com",
      level: " 10",
      progress: <img src={prog1} alt="" />,
      type: "csap",
      
    },
    {
      id: 13,
      profile: <img src={img13} alt="" />,
      name: " damnin",
      course: "frontend ",
      number: "12345678",
      email: "damin@gmail.com",
      level: " 10",
      progress: <img src={prog4} alt="" />,
      type: "csep",

    },
    {
      id: 14,
      profile: <img src={img14} alt="" />,
      name: " lil",
      course: "Ielts",
      number: "12345678",
      email: "lil@gmail.com",
      level: " 10",
      progress: <img src={prog1} alt="" />,
      type: "csap",

    },
    {
      id: 15,
      profile: <img src={img15} alt="" />,
      name: "malone",
      course: "automation ",
      number: "12345678",
      email: "maloine@gmail.com",
      level: " 10",
      progress: <img src={prog2} alt="" />,
      type: "csep",

    },
    {
      id: 16,
      profile: <img src={img16} alt="" />,
      name: " harry",
      course: "Gre ",
      number: "12345678",
      email: "harry@gmail.com",
      level: " 10",
      progress: <img src={prog2} alt="" />,
      type: "csap",

    },
    {
      id: 17,
      profile: <img src={img17} alt="" />,
      name: " akon",
      course: "testing ",
      number: "12345678",
      email: "akon@gmail.com",
      level: " 10",
      progress: <img src={prog2} alt="" />,
      type: "csep",

    },
    {
      id: 18,
      profile: <img src={img18} alt="" />,
      name: " beiza",
      course: "Tofel",
      number: "12345678",
      email: "bezia@gmail.com",
      level: " 10",
      progress: <img src={prog4} alt="" />,
      type: "csap",

    },
  ];

  return (
    <>
      
     <div className="container">
       <table>
        <thead>
          <tr>
            <th>Profile</th>
            <th>Student Name</th>
            <th>Course</th>
            <th>Phone Number</th>
            <th>Email Id</th>
            <th>Level</th>
            <th>Progress</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={index}>
              
              <td className="image">{item.profile}</td>

              <td>{item.name}</td>
              <td>{item.course}</td>
              <td> {item.number} </td>
              <td> {item.email} </td>
              <td> {item.level} </td>
              <td className="prog" >  {item.progress} </td>
              

            </tr>
          ))}
        </tbody>
      </table>
      </div>
    </>
  );
};

export default Studentslist;
