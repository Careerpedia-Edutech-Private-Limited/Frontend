import React from 'react'
import Calender from './components/calender/Calender'
import Cards from './components/cards/Cards'

const Dashboard = () => {
  return (
    <div className='container'>
      <div className='Cards'><Cards/></div>
      <div className='Calender'><Calender/></div>
    </div>
  )
}

export default Dashboard
