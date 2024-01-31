// import React from 'react'
import "./MentorEdit.css"
import images from "../../../../../assets/contact.png"
const MentorEdit = () => {
    return (
        <>
            <section>
                <div className='left-sidebar'>
                    <h1>Careerpedia</h1>
                </div>
                <div className='nav-content'>
                    <div className='navbar'>
                        <h3>Mentor Profile Edit</h3>
                    </div>
                    <div className='content'>

                        <div className='p-info'>
                            <div className='pic'>
                                {/* <img src={require("../../../../../assets/contact.png")} alt="" /> */}
                                <img src={images} alt="contact" />

                                <p>Upload your image</p>
                            </div>
                            <div className='para'>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi temporibus</p>
                            </div>
                            <div className='list'>

                                <div className='list1'>
                                    <input type="radio" id="html" name="fav_language" value="HTML" />
                                    <label>Personal Information</label>
                                    <p>Lorem ipsum dolor sit amet.</p>
                                </div>
                                <div className='hr'>
                                    <hr />
                                </div>
                                <div className='list1'>
                                    <input type="radio" id="html" name="fav_language" value="" />
                                    <label>Contact Details</label>
                                    <p>Lorem ipsum dolor sit amet.</p>
                                </div>
                                <div className='hr'>
                                    <hr />
                                </div>
                                <div className='list1'>
                                    <input type="radio" id="html" name="fav_language" value="HTML" />
                                    <label>Educational Details</label>
                                    <p>Lorem ipsum dolor sit amet.</p>
                                </div>
                                <div className='hr'>
                                    <hr />
                                </div>
                                <div className='list1'>
                                    <input type="radio" id="html" name="fav_language" value="HTML" />
                                    <label>Work Experience</label>
                                    <p>Lorem ipsum dolor sit amet.</p>
                                </div>

                            </div>
                        </div>
                        <div className='Line'>
                            <hr />
                        </div>
                        <div className='test'>
                            <div className='p-details'>
                                <div className='dd'>
                                    <h4>Personal Details</h4>
                                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quas esse incidunt recusandae quia provident</p>
                                </div>
                                <form>
                                    <div className='pd'>
                                        <div className='details'>
                                            <label>First Name</label>
                                            <input type="text" placeholder='Enter First Name' />
                                        </div>
                                        <div className='details'>
                                            <label>Last Name</label>
                                            <input type="text" placeholder='Enter Last Name' />
                                        </div>
                                    </div>
                                    <div className='pd'>
                                        <div className='details'>
                                            <label>Email Id</label>
                                            <input type="mail" placeholder='Mail@gmail.com' />
                                        </div>
                                        <div className='details'>
                                            <label>Date Of Birth</label>
                                            <input id='date' type="date" placeholder='' />
                                        </div>
                                    </div>
                                    <div className='pd'>
                                        <div className='details'>
                                            <label>Registered Mobile</label>
                                            <input type="telephone" placeholder='Enter Mobile Number' />
                                        </div>
                                        <div className='details'>
                                            <label>Linkedin Profile</label>
                                            <input type="url" placeholder='Enter Link Here' />
                                        </div>
                                    </div>
                                </form>

                                <div className='p-details'>
                                    <div className='dd'>
                                        <h4>Contact Details</h4>
                                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quas esse incidunt recusandae quia provident</p>
                                    </div>
                                    <form>
                                        <div className='pd'>
                                            <div className='details'>
                                                <label>Address Line</label>
                                                <input type="text" placeholder='Enter Your Address' />
                                            </div>
                                            <div className='details'>
                                                <label>City</label>
                                                <input type="text" placeholder='Enter Your City' />
                                            </div>
                                        </div>
                                        <div className='pd'>
                                            <div className='details'>
                                                <label>District</label>
                                                <input type="text" placeholder='Enter Your District' />
                                            </div>
                                            <div className='details'>
                                                <label>State</label>
                                                <input type="text" placeholder='Enter Your State' />
                                            </div>
                                        </div>
                                        <div className='pd'>
                                            <div className='details'>
                                                <label>Pin Code</label>
                                                <input type="telephone" placeholder='Enter Pin Code' />
                                            </div>
                                            <div className='details'>
                                                <label>Country</label>
                                                <input type="text" placeholder='Enter Your Country' />
                                            </div>
                                        </div>
                                    </form>
                                    <div className='dd'>
                                        <h4>Educational Details</h4>
                                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quas esse incidunt recusandae quia provident</p>
                                    </div>
                                    <form>
                                        <div className='pd'>
                                            <div className='details'>
                                                <label>Highest Education</label>
                                                <input type="text" placeholder='Enter Your Highest Education' />
                                            </div>
                                            <div className='details'>
                                                <label>Bachelor's Degree</label>
                                                <input type="text" placeholder='Enter Your Degree' />
                                            </div>
                                        </div>
                                        <div className='pd'>
                                            <div className='details'>
                                                <label>Degree Percentage</label>
                                                <input type="text" placeholder='Enter Your Percentage' />
                                            </div>
                                            <div className='details'>
                                                <label>Department Branch</label>
                                                <input type="text" placeholder='Enter Your Branch' />
                                            </div>
                                        </div>
                                        <div className='pd'>
                                            <div className='details'>
                                                <label>Start Year</label>
                                                <input type="telephone" placeholder='Enter Start Year' />
                                            </div>
                                            <div className='details'>
                                                <label>End Year</label>
                                                <input type="text" placeholder='Enter End Year' />
                                            </div>
                                        </div>
                                    </form>
                                    <div className='dd'>
                                        <h4>Work Experience</h4>
                                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quas esse incidunt recusandae quia provident</p>
                                    </div>
                                    <form>
                                        <div className='pd'>
                                            <div className='details'>
                                                <label>Occupation</label>
                                                <input type="text" placeholder='Enter Your Occupation' />
                                            </div>
                                            <div className='details'>
                                                <label>Job Role</label>
                                                <input type="text" placeholder='Enter Your Job Role' />
                                            </div>
                                        </div>
                                        <div className='pd'>
                                            <div className='details'>
                                                <label>Start Date</label>
                                                <input type="date" placeholder='Enter Your District' />
                                            </div>
                                            <div className='details'>
                                                <label>End Date</label>
                                                <input type="date" placeholder='Enter Your State' />
                                            </div>
                                        </div>
                                    </form>
                                    <div className='submit' >
                                        <button id='btn' type='button'>save</button>
                                    </div>
                                </div>

                            </div>
                        </div>


                    </div>
                </div>
            </section>
        </>
    )
}

export default MentorEdit