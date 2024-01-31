// // App.js
import React, { useState } from "react";
import Navbar from "./components/Navbar/Navbar";
import Sidebar from "./components/Sidebar/Sidebar";
import Hero from "./components/Hero/hero";
import TabComponent1 from "./components/TabComponent1/TabComponent1";
import TabComponent2 from "./components/TabComponent2/TabComponent2";
import "./App.css";

import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;
  

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

const CourseView = () => {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <div className="app">
      <div className="sidebar">
        <Sidebar />
      </div>
      <div className="right">
        <Navbar />

        <Hero />

        <div className="TabContent">
          <Box sx={{ borderBottom: 3, borderColor: "divider", width: "100%" }}>
            <Tabs
              value={value}
              onChange={handleChange}
              aria-label="basic tabs example"
              textColor="#FF9F43"
              TabIndicatorProps={{
                style:{
                  backgroundColor:'#FF9F43'
                }
              }}

            >
              <Tab 
                label="What You'll Learn"
                sx={{
                  color : value===0 ? '#FF9F43' : 'black'
                }}
        
              />
              <Tab 
                label="Course Content"
                sx={{
                  color : value===1 ? '#FF9F43' : 'black'
                }} 
              />
            </Tabs>
          </Box>
          <CustomTabPanel value={value} index={0}>
            <TabComponent1 />
          </CustomTabPanel>
          <CustomTabPanel value={value} index={1}>
            <TabComponent2 />
          </CustomTabPanel>
        </div>
      </div>
    </div>
  );
};

export default CourseView;
