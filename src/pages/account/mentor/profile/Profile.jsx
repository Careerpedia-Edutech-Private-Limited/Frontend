import React from "react";
import Navbar from "./Components/Student_list/Components/Navbar/Navbar";
// import Studentslist from "./Components/Student_list/Studentslist";
// import Signup from "./Components/Student_list/Components/Signup/Signup";
import Studentnavbar from "../../../../components/navbar/Student/Studentnavbar";
import Sidebar from "../../../../components/sidebar/Sidebar";
import "./Profile.css";


import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import Studentslist from "./Components/Student_list/Studentslist";
import Signup from "./Components/Student_list/Components/Signup/Signup";

const Profile = () => {
  const [value, setValue] = React.useState("1");
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <div className="profile">
      <div className="sidebar">
        <Sidebar />
      </div>
      <div className="up">
        <div className="nav1">
          <Studentnavbar />
        </div>
        

        <div className="nav2">
        <Box sx={{ width: "100%", typography: "body1" }}>
          <TabContext value={value}>
            <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
              <TabList
                onChange={handleChange}
                aria-label="lab API tabs example"
              >
                <Tab label="Enroll" value="1" />
                <Tab label="Signup" value="2" />
              </TabList>
            </Box>
            <TabPanel value="1"><Studentslist/></TabPanel>
            <TabPanel value="2"><Signup/></TabPanel>
          </TabContext>
        </Box>
          
        </div>
      </div>
    </div>
  );
};
export default Profile;
