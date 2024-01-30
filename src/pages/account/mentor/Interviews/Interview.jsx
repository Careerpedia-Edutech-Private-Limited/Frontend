import React, { useState } from 'react'
import './Interview.css'
import Navbar from './Components/Navbar/Navbar'
import CustomizedTables from './Components/Content/AllInterviews';
import Content from "./Components/Content/Content";
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import { Typography } from '@mui/material';


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

function capitalizeFirstLetter(text) {
  return text.charAt(0).toUpperCase() + text.slice(1).toLowerCase();
}

const Interview = () => {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <div className='interview-page'>
      <div className="sideBar"></div>
      <div className="right">
        <div className="navbar">
          <Navbar />
        </div>
        <div className="content">
          <Box sx={{ width: '100%' }}>
              <Tabs 
                value={value} 
                onChange={handleChange}
                aria-label="basic tabs example"
                textColor="black"
                fontSize="12px"
                fontWeight='600'
                // indicatorColor="deepOrange"
                TabIndicatorProps={{
                  style: {
                    backgroundColor: "orange"
                  }
                }}
                >
                
                <Tab 
                  label={capitalizeFirstLetter("Today’s Interviews")}
                  sx={{ 
                    color: value === 0 ? 'orange': '#2F4362', 
                    fontSize: '12px',
                    fontWeight: '600',
                    textTransform: 'none'
                   }}
                />
                <Tab 
                  label={capitalizeFirstLetter("All Interviews")} 
                  sx={{ 
                    color: value === 1 ? 'orange' : '#2F4362',
                    fontSize: '12px',
                    fontWeight: '600',
                    textTransform: 'none'
                   }} 
                />
              </Tabs>
            <CustomTabPanel value={value} index={0}>
              <Content />
            </CustomTabPanel>
            <CustomTabPanel value={value} index={1}>
              <CustomizedTables />
            </CustomTabPanel>
          </Box>

        </div>
      </div>
    </div>
  )
}

export default Interview
