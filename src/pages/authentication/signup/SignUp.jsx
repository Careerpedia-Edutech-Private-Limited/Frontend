import React from "react";
import "./SignUp.scss";
import { FaEye } from "react-icons/fa";
import { MdOutlineCheckBoxOutlineBlank } from "react-icons/md";
import { FcGoogle } from "react-icons/fc";
import sinimg from "../../../assets/signupp.png";

const SignUp = () => {




// const form = document.querySelector(".signupform")
//   const firstname = document.querySelector("#firstname")
//   const lastname = document.querySelector("#lastname")
//   const mail = document.querySelector("#email")
//   const mobile = document.querySelector("#mobile")
//   const password = document.querySelector("#sinpas")
//   const cnfpassword = document.querySelector("#sinpasconf")

  
// form.addEventListener("submit" ,(e) => {
//   const firstnamevalue = firstname.value.trim();
//   const lastnamevalue = lastname.value.trim();
//   const emailvalue = mail.value.trim();


//   const mobilevalue = mobile.value.trim();
//   const passwordvalue = password.value.trim();
//   const cnfpasswordvalue = cnfpassword.value.trim();


//   if(firstnamevalue == ""){
//     e.preventDefault();
//     alert("!please provide name!");
//     firstname.focus();
//     return false;
//     }
  
//     if(!isNaN(firstnamevalue)){
//       e.preventDefault();
//     alert("please provide valid name!");
//     firstname.focus();
//     return false;
  
//     } 


//     if(lastnamevalue == ""){
//       e.preventDefault();
//       alert("please provide name!");
//       lastname.focus();
//       return false;
//       }
    
//       if(!isNaN(lastnamevalue)){
//         e.preventDefault();
//       alert("please provide valid name!");
//       lastname.focus();
//       return false;
    
//       } 
//       if (emailvalue==""){
//         e.preventDefault();
//         alert("please provide email")
//         mail.focus();
//         return false;
//       }




//       if(mobilevalue==""){
//         e.preventDefault();
//       alert("please provide  number!");
//       mobile.focus();
//       return false;
    
//     }


//     if(mobilevalue.length<10||mobilevalue>10){
//         e.preventDefault();
//       alert("please provide valid number !");
//       mobile.focus();
//       return false;
    
//     }



//     if(passwordvalue==""){
//       e.preventDefault()
//       alert("please provide password")
//       password.focus();
//       return false;
//     }
    
//     if(passwordvalue.length<8||passwordvalue.length>10){
//       e.preventDefault()
//       alert("please provide valid passwod")
//       password.focus();
//       return false;

//     }
  

    
//     if(cnfpasswordvalue==""){
//       e.preventDefault()
//       alert("please provide password")
//       cnfpassword.focus();
//       return false;
//     }
    
//     if(cnfpasswordvalue.length<8||cnfpasswordvalue.length>10){
//       e.preventDefault()
//       alert("please provide valid passwod")
//       cnfpassword.focus();
//       return false;

//     }



// })

  









  
  return (


    <div className="signup">
      <div className="signupimg">
        <img src={sinimg} alt="" id="sinimg" />
      </div>
      <div className="signupcont">
        <div className="signuphead">
          <h2>Sign Up For an Account</h2>
        </div>

        <div className="signupform">
          <div className="firstlastname">
            <input type="text" className="inp" id="firstname"  placeholder="first name" required />
            <input type="text"    className="inp"   id="lastname" placeholder="last name" required />
          </div>
          <div className="signupmail">
            <input type="email"    className="inp" placeholder="Email Id" id="email"  required/>
          </div>
          <div className="signupmob">
            <input type="tel"   className="inp"  placeholder="Mobile number" id="mobile" required />
          </div>
          <div className="signuppassword">
            <input type="password"    className="inp" placeholder="password" id="sinpas" required />
          </div>
          <div className="signuppassword">
            <input type="password"    className="inp" placeholder=" confirm password" id="sinpasconf"  required />
          </div>
        </div>

        <div className="formcontent">
          <div className="checkbox">
            <div className="checkk">
              <MdOutlineCheckBoxOutlineBlank />
            </div>
            <div className="checkcont">
              <p>
                By Creating account means you agree to the{" "}
                <span>Terms & conditions</span> and our{" "}
                <span>privacy policy</span>
              </p>
            </div>
          </div>
          <div className="signupbutton">
            <button type="submit"> Sign Up</button>
          </div>
          <div className="tytle">
            <p className="titl"> Or sign up With</p>
          </div>
          <div className="google">
            <div className="gicn">
              <FcGoogle />
            </div>
            <div className="gcont">
              <h5>Sign in with Google</h5>
            </div>
          </div>
          <div className="havanacc">
            <h5>
              Already have an account? <span>Sign In</span>
            </h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
