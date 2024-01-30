import React from 'react'
import './Profile.css'
import Cards from './Cards/Cards';

const Profile = () => {
  return (
    <div className='Profile-page'>
      <div className="sidebar">

      </div>
      <div className="right">
        <div className="navbar">Mentor Profile</div>
        <div className="cards"><Cards/>
         </div> 
      </div>

    </div>



  )
}

export default Profile
