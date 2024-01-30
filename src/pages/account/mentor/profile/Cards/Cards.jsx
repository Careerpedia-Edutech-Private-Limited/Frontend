import React from 'react'
import './Cards.css'
import Ellipse from '../../../../../assets/Ellipse.jpg'
import Icon1 from '../../../../../assets/Icon.jpg'
import Icon2 from '../../../../../assets/Icon2.jpg'

const Cards = () => {
  return (
    <>
      <div className='contents'>
        <div className='img'>
          <img src={Icon2} alt="" />

        </div>
        <h2>Personal Details</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum</p>
        <div className='mentordetails'>
          <div className='image'>
            <img src={Icon1} alt="" />
          </div>
          <div class="details">
            <div class="box1">
              <h4>First name</h4>
              <h4>Last name</h4>
              <h4>Date of birth</h4>
            </div>
            <div class="box1">
              <p>:</p>
              <p>:</p>
              <p>:</p>
            </div>
            <div class="box1">
              <p>lorem</p>
              <p>Ipsum</p>
              <p>24/04/1997</p>
            </div>


            
          </div>
          <div class="details">
            <div class="box">
              <h4>Email ID</h4>
              <h4>Mobile number</h4>
              <h4>LinkedIn profile</h4>
            </div>
            <div class="box1">
              <p>:</p>
              <p>:</p>
              <p>:</p>
            </div>
            <div class="box1">
              <p>loremipsum@gmail.com</p>
              <p>9988776661</p>
              <p>https://www.linkedin.com/pulse/easy-share-link-generator-social-media-networks-raul-colon/</p>
            </div>


            
          </div>


          


        </div>


      </div>
      <div className='contents'>
        <h2>Contact Details</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum</p>
        <div className='mentordetails'>
          <div class="section">
            <div class="box1">
              <h4>Address line</h4>
              <h4>City</h4>
              <h4>District</h4>
            </div>
            <div class="box1">
              <p>:</p>
              <p>:</p>
              <p>:</p>
            </div>
            <div class="box1">
              <p>2326 Smithfield Avenue</p>
              <p>Lubbock</p>
              <p>Gleneden</p>
            </div>
          </div>
          <div class="section">
            <div class="box1">
              <h4>State</h4>
              <h4>Pincode</h4>
              <h4>Country</h4>
            </div>
            <div class="box1">
              <p>:</p>
              <p>:</p>
              <p>:</p>
            </div>
            <div class="box1">
              <p>Texas</p>
              <p>79401</p>
              <p>United States</p>
            </div>


            
          </div>


          
        </div>





       


      </div>



      <div className='contents'>
        <h2>Education Details</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum</p>
        <div className='mentordetails'>
          <div class="section">
            <div class="box1">
              <h4>Highest education</h4>
              <h4>Bachelor’s degree</h4>
              <h4>Degree percentage</h4>
            </div>
            <div class="box1">
              <p>:</p>
              <p>:</p>
              <p>:</p>
            </div>
            <div class="box1">
              <p>Lorem Ipsum</p>
              <p>Lorem Ipsum</p>
              <p>80%</p>
            </div>
          </div>
          <div class="section">
            <div class="box1">
              <h4>Department Branch</h4>
              <h4>Start year</h4>
              <h4>End year</h4>
            </div>
            <div class="box1">
              <p>:</p>
              <p>:</p>
              <p>:</p>
            </div>
            <div class="box1">
              <p>Lorem Ipsum</p>
              <p>2010</p>
              <p>2020</p>
            </div>


          </div>





        </div>


      </div>
      <div className='contents'>
        <h2>Work Experience</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum</p>
        <div className='mentordetails'>
          <div class="section">
            <div class="box1">
              <h4>Occupation</h4>
              <h4>Job Role</h4>
            </div>
            <div class="box1">
              <p>:</p>
              <p>:</p>
            </div>
            <div class="box1">
              <p>Lorem Ipsum</p>
              <p>Lorem Ipsum</p>
            </div>
          </div>
          <div class="section">
            <div class="box1">
              <h4>Start Date</h4>
              <h4>End Date</h4>
            </div>
            <div class="box1">
              <p>:</p>
              <p>:</p>
            </div>
            <div class="box1">
              <p>2010</p>
              <p>2020</p>
            </div>


          </div>





        </div>


      </div>


    </>









  )
}

export default Cards
