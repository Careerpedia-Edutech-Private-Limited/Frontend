import React from 'react'
import "./Contact.scss"

const Contact = () => {
  return (
    <div><div className="form1">
    <div className="div">
      <div className="leftt">
        <div className="address">
          <label htmlFor="address">Address</label>
          <input type="text"    className="input" placeholder="enter name" />
        </div>
        <div className="district">
          <label htmlFor="district">District</label>
          <input type="text"   className="input" placeholder="enter district" />
        </div>

        <div className="pincode">
          <label htmlFor="pincode">Pincode</label>
          <input type="text"   className="input"     placeholder="enter pin" />
        </div>
      </div>

      <div className="rightt">
        <div className="city ">
          <label htmlFor="city">City </label>
          <input type="text"   className="input" placeholder="enter city" />
        </div>

        <div className="state">
          <label htmlFor="state">State</label>
          <input type="text"    className="input" placeholder="enter state" />
        </div>

        <div className="country">
          <label htmlFor="country">Country</label>
          <input type="text"   className="input" placeholder="enter country" />
        </div>
      </div>
    </div>

    
  </div></div>
  )
}

export default Contact
