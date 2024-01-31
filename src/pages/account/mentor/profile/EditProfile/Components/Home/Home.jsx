import React, { useState } from 'react'
import img1 from "../../../../../../../assets/Profile.jpg"
import "./Home.css"

const Home = () => {


        const [isActive, setIsActive] = useState(false);
      
        const handleClick = () => {
          setIsActive(!isActive);
        };

    return (
        <>
            <div className="container">
                <div className="top">
                    <h3>Basic Details</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam, incidunt!</p>
                    <div className="details">
                        <div className="details1">
                            <img src={img1} alt="" />
                        </div>
                        <div className="details2">
                            <div className="box">
                                <label htmlFor=""><h3>Institute Name</h3></label>
                                <span>:</span>
                                <input type="text" placeholder='Lorem Ipsum' />
                            </div>
                            <div className="box">
                                <label htmlFor=""><h3>Founder Name</h3></label>
                                <span>:</span>
                                <input type="text" placeholder='Jhon Doe' />
                            </div>
                            <div className="box">
                                <label htmlFor=""><h3>Website</h3></label>
                                <span>:</span>
                                <input type="text" placeholder='WWW.loremipsum.com' />
                            </div>
                        </div>

                        <div className="details3">
                            <div className="box1">
                                <label htmlFor=""><h3>Email ID</h3></label>
                                <span>:</span>
                                <input type="text" placeholder='loremipsum@gmail.com' />
                            </div>
                            <div className="box1">
                                <label htmlFor=""><h3>Mobile Number</h3></label>
                                <span>:</span>
                                <input type="number" placeholder='9988776661' />
                            </div>
                            <div className="box1">
                                <label htmlFor=""><h3>Linkedin Profile</h3></label>
                                <span>:</span>
                                <input type="text" placeholder='https://www.linkedin.com/pulse/easy-share-link-generator-social-media-networks-raul-colon/' />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="middle">
                    <h3>Contact Details</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam, incidunt!</p>
                    <div className="fill">
                        <div className="fill1">
                            <div className="box">
                                <label htmlFor=""><h3>Address Line</h3></label>
                                <span>:</span>
                                <input type="text" placeholder='2326 Smithfield Avenue' />
                            </div>
                            <div className="box">
                                <label htmlFor=""><h3>City</h3></label>
                                <span>:</span>
                                <input type="text" placeholder='Lubbock' />
                            </div>
                            <div className="box">
                                <label htmlFor=""><h3>District</h3></label>
                                <span>:</span>
                                <input type="text" placeholder='Gleneden' />
                            </div>
                        </div>

                        <div className="fill1">
                            <div className="box">
                                <label htmlFor=""><h3>State</h3></label>
                                <span>:</span>
                                <input type="text" placeholder='Texas' />
                            </div>
                            <div className="box">
                                <label htmlFor=""><h3>Pincode</h3></label>
                                <span>:</span>
                                <input type="number" placeholder='79401' />
                            </div>
                            <div className="box">
                                <label htmlFor=""><h3>Country</h3></label>
                                <span>:</span>
                                <input type="text" placeholder='United States' />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="middle">
                    <h3>College Details</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam, incidunt!</p>
                    <div className="fill">
                        <div className="fill1">
                            <div className="box">
                                <label htmlFor=""><h3>Accreditation</h3></label>
                                <span>:</span>
                                <input type="text" placeholder='Lorem Ipsum' />
                            </div>
                            <div className="box">
                                <label htmlFor=""><h3>Students</h3></label>
                                <span>:</span>
                                <input type="text" placeholder='Lorem Ipsum' />
                            </div>
                            <div className="box">
                                <label htmlFor=""><h3>Deemed</h3></label>
                                <span>:</span>
                                <input type="text" placeholder='Lorem Ipsum' />
                            </div>
                        </div>

                        <div className="fill1">
                            <div className="box">
                                <label htmlFor=""><h3>Departments</h3></label>
                                <span>:</span>
                                <input type="text" placeholder='Lorem Ipsum' />
                            </div>
                            <div className="box">
                                <label htmlFor=""><h3>Start year</h3></label>
                                <span>:</span>
                                <input type="number" placeholder='2010' />
                            </div>
                            <div className="box">
                                <label htmlFor=""><h3>End year</h3></label>
                                <span>:</span>
                                <input type="text" placeholder='2020' />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="button1">
                    <button
                        style={{
                            backgroundColor: isActive ? 'coral' : '#0557A2',
                        }}
                        onClick={handleClick}
                    >
                        {isActive ? 'Activate' : 'Deactivate'}
                    </button>
                </div>
            </div>
        </>
    )
}

export default Home