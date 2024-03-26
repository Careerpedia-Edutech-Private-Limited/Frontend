import React from 'react'
import { MdInsertPhoto } from "react-icons/md";
import "./image.scss"


const Image = () => {
  return (
    <div>
        <div className="ime">
            <div className="imge">
              <MdInsertPhoto className="icn" />
            </div>

            
          {/* </div> */}
          <div className="up">
              <h5>upload your image</h5>
            </div>
          <div className="down">
            <p>
              Lorem ipsum dolor sit amet consectetur <br /> adipisicing elit. Expedita,
              vitae?
            </p>
          </div>
        </div>
    </div>
  )
}

export default Image