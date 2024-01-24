import React from 'react'
import Sidebar from '../../../../components/sidebar/Sidebar'
import Navbar from '../../../../components/navbar/Navbar'

const Dashboard = () => {
  return (
    <div className='dashboard overallBackground'>
 
      <Sidebar/>

      <div>
         <Navbar/>
         <h1>Dashboard</h1>
      </div>
    
      
    </div>
  )
}

export default Dashboard
