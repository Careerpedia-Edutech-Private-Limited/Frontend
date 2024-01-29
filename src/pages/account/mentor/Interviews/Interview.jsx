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
function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
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
            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
              <Tabs 
                value={value} 
                onChange={handleChange} 
                aria-label="basic tabs example"
                textColor="black"
                fontSize="12px"
                indicatorColor="primary">
                
                <Tab 
                  label={capitalizeFirstLetter("Today’s Interviews")}
                  {...a11yProps(0)} 
                  sx={{ borderBottom: value === 0 ? '2px solid orange' : 'none', color: value === 0 ? 'orange' : 'black', 
                  fontSize: '12px',
                  textTransform: 'none' }}
                />
                <Tab 
                  label={capitalizeFirstLetter("All Interviews")} 
                  {...a11yProps(1)}
                  sx={{ borderBottom: value === 1 ? '2px solid orange' : 'none', color: value === 1 ? 'orange' : 'black',
                  fontSize: '12px',
                  textTransform: 'none' }} 
                />
              </Tabs>
            </Box>
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
