import React from 'react'
import grp from "../../../../../../assets/Group.png";
import brif from "../../../../../../assets/briefcase.png"
import das from "../../../../../../assets/dashboard.png"
import { PiGraduationCapFill } from "react-icons/pi";
import nata from "../../../../../../assets/nata.jpg"
import "./side.scss"


const Side = () => {
   


  return (
    <div className='sidbar'>
        <img src={grp} alt=""  id='carer'/>
        <div className="kate">
            <img src={nata} alt="" />
            <p>katie-pena</p>
        
        

        </div>
        <div className="itms">
            <div className="das">
                <img src={das} alt="" />
                <p>Dashboard</p>
            </div>
            <div className="studnt">
               
                 <PiGraduationCapFill />
                 <p>Students</p>
            </div>
            <div className="job">
                <img src={brif} alt="" />
                <p>Jobs</p>
            </div>
        </div>



    </div>
  )
}

export default Side