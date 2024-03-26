import React from 'react'
import Sidebar from '../../components/sidebar/Sidebar'
import Coursenav from './Component/Coursenav/Coursenav'
import Hero from './Component/Hero/Hero'
import Learn from './Component/WHATYOULERAN/Learn'
import Accordian from './Component/WHATYOULERAN/Coursecont/Accordian'
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import "./COURSE.scss"


const COURSE = () => {

  const [value, setValue] = React.useState("1");
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };


  return (
    <div className='curse'>
      <div className="sdbar">
        <Sidebar/>
      </div>
      <div className="hro">
        <div className="sub">
        <Coursenav/>
        </div>
        <div className="heero">
          <Hero/>
        </div>
        <div className="ldr">
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
            <TabPanel value="1"><Learn/></TabPanel>
            <TabPanel value="2"><Accordian/></TabPanel> 
          </TabContext>
        </Box>
        </div>

        
      </div>





    </div>
  )
}

export default COURSE