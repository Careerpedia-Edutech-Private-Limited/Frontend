
import React from 'react'
import "./Slider.css"
import img1 from "../../../../../../assets/careerpedia1.jpg"
// import img2 from  "../../../../../../assets/"
// import img3 from "../../../../../../assets/college.jpg"
// import img4 from "../../../../../../assets/.jpg"
// import img5 from "../../../../../../assets/college.jpg"
// import img6 from "../../../../../../assets/college.jpg"
// import img7 from "../../../../../../assets/college.jpg"
// import img8 from "../../../../../../assets/college.jpg"
// import img9 from "../../../../../../assets/college.jpg"
// import img10 from "../../../../../../assets/college.jpg"

const Slider = () => {

  const data = [
    {
     img : "img1",

    },
]

  return (
    <>
     <div className="slider">
      <div className="logo">
        <img src={img1} alt="" />
      </div>
    </div>
    </>
  )
}

export default Slider
