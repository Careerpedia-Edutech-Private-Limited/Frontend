import React from 'react'
import './Sidebar.css'
import careerpedia from '../../Assets/Careerpedia.jpg'
import userimg from '../../Assets/userimg.png'
import dashboardImg from '../../Assets/dashboardImg.jpg'
import interviewImg from '../../Assets/interviewImg.jpg'
import CourseLogo from '../../Assets/courseLogo.jpg'

const Sidebar = () => {
  return (
    <div className='sidebarContents'>
      <div className="careerpediaImg">
    <img src={careerpedia}></img>
    </div>
    <div className="reactangleBox">
      <img src={userimg}></img>
      <span>Katie pena</span>
    </div>
<div className="dashboardLine">
  <img src={dashboardImg}></img>
  <span>Dashboard</span>
</div>
<div className="interviewLine">
<img src={interviewImg}></img>
  <span>Interview</span>
</div>
<div className="courseLine">
  <img src={CourseLogo}></img>
  <span>Course</span>
</div>
    </div>
  )
}

export default Sidebar