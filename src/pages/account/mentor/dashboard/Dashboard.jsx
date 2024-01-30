import { useState } from "react";
import "./Dashboard.css";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import Card from "./Cards/Card";
import careerpedia from "./Assests/Group (1).jpg";
import photo from "./Assests/Image.jpg";
import dashboard from "./Assests/dashboard.jpg";
import group from "./Assests/Group (2).jpg";
import book from "./Assests/book-saved.jpg";
import logout from "./Assests/logout 1.jpg";
import mask from "./Assests/Mask Group 18668 (1).jpg";

const Dashboard = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  // const cardData=[
  //   {...Card}
  // ]
  return (
    <div className="mentor-dashboard">
      {/* sidebar */}
      <div className="sidebar">
        <div className="careerpedia1">
          <div className="careerpedia2">
            <img className="careerpedia" src={careerpedia} alt="careerpedia" />
          </div>

          <div className="image">
            <img className="image-photo" src={photo} alt="image" />
            <p className="katie-text">Katie Pena</p>
          </div>
          <div className="dashboard-interview-cource">
            <div className="dashboard">
              <img className="image-size" src={dashboard} alt="dashboard" />
              <p className="dashboard-text">Dashboard</p>
            </div>
            <div className="dashboard">
              <img className="image-size" src={group} alt="group" />
              <p className="text-group">Interviews</p>
            </div>
            <div className="dashboard">
              <img className="image-size" src={book} alt="book" />
              <p className="text-group">Course</p>
            </div>
          </div>
        </div>

        <div className="dashboard">
          <img className="image-size" src={logout} alt="logout" />
          <p className="text-group">Logout</p>
        </div>
      </div>

      {/* rightsection */}
      <div className="right">
        {/* navbar */}
        <div className="navbar">
          <h2 className="myschedule">My schedule</h2>
          <img className="mask" src={mask} alt="mask" />
        </div>
        {/* content */}
        <div className="content">
          <div className="selectedDate">
            <p className="datetext">
              {selectedDate.toLocaleDateString("en-US", {
                day: "numeric",
                month: "long",
                year: "numeric",
              })}
            </p>
          </div>
          <div className="cards-calender">
            {/* cards */}
            {/* <div className="cards">
  {cardData.map((card, index) => (
    <Card key={index} {...card} />
  ))} */}
            {/* </div> */}

            <div className="cards">
              <Card />
              <Card />
              <Card />
              <Card />
              <Card />
              <Card />
            </div>
            {/* calender */}
            <div className="calender">
              <Calendar onChange={handleDateChange} value={selectedDate} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
