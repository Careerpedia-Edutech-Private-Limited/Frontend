import React from "react";
// import "./Admin.scss";
import { MdInsertPhoto } from "react-icons/md";





const Admin = () => {

  const firstNextbtn = document.querySelector(".nextbtn");
  const savebtn1 = document.querySelector(".savebtn1")
  const savebtn2 = document.querySelector(".savebtn2")
  const savebtn3 = document.querySelector(".savebtn3")
  const submit = document.querySelector(".submit")
  const progresstext = document.querySelectorAll(".step p")
  const check = document.querySelectorAll(".step .check")
  const bullet = document.querySelectorAll(".step .bullet")

  let max = 4;
  let curent = 1;

  // firstNextbtn.addEventListener("click",function(){
  //   event.preventDefault();
  //   bullet[curent-1].classList.add("active");
  //   progresstext[curent-1].classList.add("active");

  //   check[curent-1].classList.add("active");

    
  //   curent+=1;
  // })


  // savebtn2.addEventListener("click",function(){
  //   event.preventDefault();

  //   bullet[curent-1].classList.add("active");
  //   progresstext[curent-1].classList.add("active");

  //   check[curent-1].classList.add("active");

    
  //   curent+=1;
  // })

  // savebtn3.addEventListener("click",function(){
  //   event.preventDefault();

  //   bullet[curent-1].classList.add("active");
  //   progresstext[curent-1].classList.add("active");

  //   check[curent-1].classList.add("active");

    
  //   curent+=1;
  // })

  // submit.addEventListener("click",function(){
  //   event.preventDefault();

  //   bullet[curent-1].classList.add("active");
  //   progresstext[curent-1].classList.add("active");

  //   check[curent-1].classList.add("active");
  //   setTimeout(function(){
  //   alert("sucessfully registered")

  //   },700);

    
  //   curent+=1;
  // })

  




  

  return (
    <div className="form">
      <div className="stepper">
        <div className="ime">
          {/* <div className="images"> */}
            <div className="imge">
              <MdInsertPhoto className="icn" />
            </div>

            
          {/* </div> */}
          <div className="up">
              <h5>upload your image</h5>
            </div>
          <div className="down">
            <p>
              Lorem ipsum dolor sit amet consectetur  <br /> adipisicing elit. Expedita,
              vitae?
            </p>
          </div>
        </div>


















        {/*///////////stepper/////// */}

       

        <div className="steper">
          <div className="step">
            <p> personal details</p>
            <div className="bullet">
              {/* <span>1</span> */}
              <div className="check">
              <span>&#10003;</span>
              </div>
            </div>
          </div>
          <div className="step">
            <p>contact details</p>
            <div className="bullet">
              {/* <span>2</span> */}
              <div className="check">
              <span>&#10003;</span>

              </div>
            </div>
          </div>
          <div className="step">
            <p>college details</p>
            <div className="bullet">
              
              {/* <span>3</span> */}
              
              <div className="check">
              <span>&#10003;</span>

              </div>
              
            </div>
          </div>

          <div className="step">
            <p>work experience</p>
            <div className="bullet">
              {/* <span>4</span> */}
              <div className="check">
              <span>&#10003;</span>

              </div>
            </div>
          </div>
        </div>
      </div>




      <div className="conntent">
        <div className="detils">
          <h2> personal Details</h2>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            Blanditiis, deserunt!
          </p>
        </div>

        <div className="form1">
          <div className="div">
            <div className="leftt">
              <div className="finsname">
                <label htmlFor="Institute name">first  name</label>
                <input type="text" placeholder="enter name" />
              </div>
              <div className="email">
                <label htmlFor="email">Email Id</label>
                <input type="mail" placeholder="enter email" />
              </div>

              <div className="website">
                <label htmlFor="website">mobile number</label>
                <input type="text" placeholder="enter number" />
              </div>
            </div>

            <div className="rightt">
              <div className="founder ">
                <label htmlFor="website">last name </label>
                <input type="text" placeholder="enter name" />
              </div>

              <div className="mobile">
                <label htmlFor="website">data of birth</label>
                <input type="date" placeholder="enter dob" />
              </div>

              <div className="linkdin">
                <label htmlFor="website">Linkedin</label>
                <input type="text" placeholder="enter url" />
              </div>
            </div>
          </div>
          <div className="btn nextbtn">
            <button  className= "savebtn1">save</button>
          </div>
        </div>

        {/* ///////////////////////contact/////////////////////////////// */}

        <div className="detils">
          <h2> contact Details</h2>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            Blanditiis, deserunt!
          </p>
        </div>

        <div className="form1">
          <div className="div">
            <div className="leftt">
              <div className="address">
                <label htmlFor="address">Address</label>
                <input type="text" placeholder="enter name" />
              </div>
              <div className="district">
                <label htmlFor="district">District</label>
                <input type="text" placeholder="enter district" />
              </div>

              <div className="pincode">
                <label htmlFor="pincode">Pincode</label>
                <input type="text" placeholder="enter pin" />
              </div>
            </div>

            <div className="rightt">
              <div className="city ">
                <label htmlFor="city">City </label>
                <input type="text" placeholder="enter city" />
              </div>

              <div className="state">
                <label htmlFor="state">State</label>
                <input type="text" placeholder="enter state" />
              </div>

              <div className="country">
                <label htmlFor="country">Country</label>
                <input type="text" placeholder="enter country" />
              </div>
            </div>
          </div>

          <div className="btn">
            <button className="savebtn2">save</button>
          </div>
        </div>
{/* 
        <div className="detils">
          <h2> College Details</h2>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            Blanditiis, deserunt!
          </p>
        </div> */}
{/* 
        <div className="form1">
          <div className="div">
            <div className="leftt">
              <div className="accredition">
                <label htmlFor="accredetion">Accreditation</label>
                <input type="text" placeholder="enter name" />
              </div>
              <div className="students">
                <label htmlFor="students">No Of Students</label>
                <input type="text" placeholder="enter no of students" />
              </div>

              <div className="startyaer">
                <label htmlFor="year">Start year</label>
                <input type="text" placeholder="enter year" />
              </div>
            </div>

            <div className="rightt">
              <div className="deemed ">
                <label htmlFor="deemed">Deemed </label>
                <input type="text" placeholder="enter name" />
              </div>

              <div className="dept">
                <label htmlFor="dept">Departments</label>
                <input type="text" placeholder="enter dept" />
              </div>

              <div className="end">
                <label htmlFor="end">End year</label>
                <input type="text" placeholder="enter year" />
              </div>
            </div>
          </div>
          
          <div className="btn">
            <button className="savebtn3">Save</button>
          </div>
        </div>


        <div className="detils">
          <h2> work experience</h2>
          <p>
           Enter your work experience correctly
          </p>
        </div> */}







      </div>
    </div>

  );
};

export default Admin;
