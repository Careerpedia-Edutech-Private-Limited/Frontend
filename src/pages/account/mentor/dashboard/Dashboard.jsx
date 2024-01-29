import React from 'react'
import "./Dashboard.css"
import Card from './components/cards/Card'
import Navbar from './components/Navbar/Navbar'


const Dashboard = () => {
  return (
    <div className='dashboard'>
      <div className="sideBar"></div>

      <div className="right">
        <div className="navbar"><Navbar/></div>

        <div className="content">
          <Card />
        </div>
      </div>
    </div>
  )
}

export default Dashboard
