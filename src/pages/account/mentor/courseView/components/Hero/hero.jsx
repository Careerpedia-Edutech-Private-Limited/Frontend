import React from 'react'
import './Hero.css'
import video from '../../Assets/CourseImg.png'
import img1 from '../../Assets/JoeImg.jpg'
import img2 from '../../Assets/note-2.jpg'
import img3 from '../../Assets/bookImg.jpg'
import img4 from '../../Assets/task-square.jpg'
const hero = () => {
  return (
    <div className='hero'>
      <div className="image">
        <div className="video">
          <img src={video} id='image'></img>
          <p id='play'><h1>></h1></p>
        </div>
        <div className="courseContent">
          <h1>Zero to hero UI /UX Design with
            careerpedia</h1>
          <p>Popular English speaking and listening course to communicate
            with English-speakers on the job, students, customers, etc.</p>


          <div className="icons">


              <div className="part1">
                <div className="line1">
                  <img src={img1}></img>
                  <span>John Doe</span>
                </div>
                <div className="line1">
                  <img src={img2}></img>
                  <span>20 lessons</span>
                </div>
              </div>
              <div className="part2">
                <div className="line2">
                  <img src={img3}></img>
                  <span>27 exercises</span>
                  
                </div>
                <div className="line2">
                  <img src={img4}></img>
                  <span>8 tests</span>
                </div>
              </div>


          </div>
        </div>
      </div>
      
    </div>
  )
}

export default hero