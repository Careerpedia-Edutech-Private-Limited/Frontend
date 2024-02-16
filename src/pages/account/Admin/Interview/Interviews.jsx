import React, { useState } from 'react';
import TodayInterviews from './Components/TodayInterviews/TodayInterviews';
import AllInterviews from './Components/AllInterviews/AllInterviews';
import Sidebar from '../../../../components/sidebar/Sidebar';
import Navbar from '../../../../components/navbar/Navbar';
import './Interviews.css';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';

const Interviews = () => {
  const [showAllInterviews, setShowAllInterviews] = useState(false);
  const [value, setValue] = React.useState('1');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className="container">
      <div className="sidebar">
        <Sidebar />
      </div>
      <div className="content">
        <div className="nav0">
          <Navbar />
        </div>
        <div className='nav1'>
          <Box sx={{ width: '100%', typography: 'body1' }}>
            <TabContext value={value}>
              <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                <TabList onChange={handleChange} aria-label="lab API tabs example">
                  <Tab label="Today Interviews" value="1" />
                  <Tab label="All Interviews" value="2" />
                </TabList>
              </Box>
              <TabPanel value="1"><TodayInterviews/></TabPanel>
              <TabPanel value="2"><AllInterviews/></TabPanel>
              
            </TabContext>
          </Box>
        </div>

      </div>
    </div>
  );
};

export default Interviews;