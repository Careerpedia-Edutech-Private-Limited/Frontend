import React from 'react'
import Box from '@mui/material/Box';
import Tab from '@material-ui/core/Tab';
import TabContext from '@material-ui/lab/TabContext';
import TabList from '@material-ui/lab/TabList';
// import TabPanel from '@material-ui/lab/TabPanel'
import './Job.css'
import Cards from './Components/Card/Cards';
import CardList from './Components/Card/CardList';
import CardData from './Components/CardData';


const Job = () => {
    // export default function LabTabs() {
    const [value, setValue] = React.useState('1');

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <div className='Container'>
            <div className="sidebar">
            </div>
            <div className='Right-Section'>
                <div className="navbar">
                </div>
                <div className='content'>
                    <div className='left-right-navbar'>
                    <div className=".navbar-left">
                        <Box sx={{ width: '100%', typography: 'body1' }}>
                            <TabContext value={value}>
                                <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                                    <TabList onChange={handleChange} aria-label="lab API tabs example">
                                        <Tab label="Active Jobs" value="1" />
                                        <Tab label="All Jobs" value="2" />
                                    </TabList>
                                </Box>
                            </TabContext>
                        </Box>
                    </div>
                    <div className='navbar-right'>
                        <p id='all'>All</p>
                        <p>Design</p>
                        <p>Development</p>
                        <p>Testing</p>
                        <button id='button1'>Create Job</button>


                    </div>
                    </div>
                    <div className="Card-Properties">
                        <CardList items={CardData} />
                    </div>
                </div>
            </div>
        </div>
    );
}
// }



export default Job