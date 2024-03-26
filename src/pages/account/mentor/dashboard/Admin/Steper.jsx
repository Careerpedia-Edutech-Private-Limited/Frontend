import React from 'react'
import VerticalLinearStepper from './VerticalLinearStepper';
import Image from './Forms/Image/Image';
import "./Stepper.scss"
import Side from './Adminsidebar/Side'
;
import Admnnav from './Forms/Adminnav/Admnnav';

const Steper = () => {
  return (
    <div className='dash'>

      <div className="sidee">
        <Side/>
      </div>


      <div className="dive">

        <div className="admna">
        <Admnnav/>
        </div>
      <div className="immg">
            <Image/>
        </div>
        
        
        <div className="ver">
        <VerticalLinearStepper/>


        </div>

      </div>
       
        
        
        </div>
  )
}

export default Steper;