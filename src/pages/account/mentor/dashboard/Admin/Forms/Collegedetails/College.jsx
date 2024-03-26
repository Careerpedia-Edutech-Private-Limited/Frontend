import React from 'react'
import "./College.scss"


const College = () => {
  return (
    <div><div className="form1">
    <div className="div">
      <div className="leftt">
        <div className="accredition">
          <label htmlFor="accredetion">Accreditation</label>
          <input type="text"    className="input" placeholder="enter name" />
        </div>
        <div className="students">
          <label htmlFor="students">No Of Students</label>
          <input type="text"   className="input" placeholder="enter no of students" />
        </div>

        <div className="startyaer">
          <label htmlFor="year">Start year</label>
          <input type="text"  className="input" placeholder="enter year" />
        </div>
      </div>

      <div className="rightt">
        <div className="deemed ">
          <label htmlFor="deemed">Deemed </label>
          <input type="text"  className="input" placeholder="enter name" />
        </div>

        <div className="dept">
          <label htmlFor="dept">Departments</label>
          <input type="text"  className="input" placeholder="enter dept" />
        </div>

        <div className="end">
          <label htmlFor="end">End year</label>
          <input type="text"   className="input" placeholder="enter year" />
        </div>
      </div>
    </div>
{/*     
    <div className="btn">
      <button className="savebtn3">Save</button>
    </div> */}
  </div></div>
  )
}

export default College