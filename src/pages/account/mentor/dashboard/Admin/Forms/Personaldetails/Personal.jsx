import React from 'react'
import "./personal.scss"


const Personal = () => {
  return (
    <div>
        <div className="form1">
          <div className="div">
            <div className="leftt">
              <div className="finsname">
                <label htmlFor="Institute name">first  name</label>
                <input type="text" className="input" placeholder="enter name" />
              </div>
              <div className="email">
                <label htmlFor="email">Email Id</label>
                <input type="mail" className="input"  placeholder="enter email" />
              </div>

              <div className="website">
                <label htmlFor="website">mobile number</label>
                <input type="text" className="input" placeholder="enter number" />
              </div>
            </div>

            <div className="rightt">
              <div className="founder ">
                <label htmlFor="website">last name </label>
                <input type="text" className="input" placeholder="enter name" />
              </div>

              <div className="mobile">
                <label htmlFor="website">data of birth</label>
                <input type="date" className="input" placeholder="enter dob" />
              </div>

              <div className="linkdin">
                <label htmlFor="website">Linkedin</label>
                <input type="text" className="input" placeholder="enter url" />
              </div>
            </div>
          </div>
          
        </div>
    </div>
  )
}

export default Personal