import React from "react";
import "./Details.css";
import { BiEditAlt } from "react-icons/bi";
import { MdOutlineImage } from "react-icons/md";
const Details = () => {
  return (
    <>
      <div className="basic-details">
        <div className="basic">
          <h1>Basic Details</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
            vulputate libero et velit interdum
          </p>
        </div>
        <div className="basic-logo">
             
          <BiEditAlt className="pencil-icon" />
        </div>
      </div>
      <div className="basic-content">
        <div className="details-image">

          <MdOutlineImage className="image-icon1" />
          <input type="file" id="imageUpload"/>
        </div>
        <div className="details-info">
          <div className="info1">
            <h3>Institute name :</h3>
            <p>Lorem Ipsum</p>
          </div>
          <div className="info2">
            <h3>Founder name :</h3>
            <p>John Doe</p>
          </div>
          <div className="info3">
            <h3>Website : </h3>
            <p>www.loremipsum.com</p>
          </div>
        </div>
        <div className="details-info2">
          <div className="info4">
            <h3>Email ID : </h3>
            <p>loremipsum@gmailcom</p>
          </div>
          <div className="info5">
            <h3>Mobile number : </h3>
            <p>9988776661</p>
          </div>
          <div className="info6">
            <h3>LinkedIn profile : </h3>
            <p>
              https://www.linkedin.com/pulse/easy-share-link-generator-social-media-networks-raul-colon/
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Details;
