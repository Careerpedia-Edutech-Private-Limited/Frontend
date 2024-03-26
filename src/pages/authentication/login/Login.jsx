import AuthLeft from "../../../layout/authLeft/AuthLeft";
import "./login.scss";
import { FcGoogle } from "react-icons/fc";
import sinimg from "../../../assets/signupp.png";


const Login = () => {
  return (
    <div className="admin-login">
      <div className="lgnimg">
        <img src={sinimg} alt="" />
      </div>


      <div className="login-right">

        <div className="signincont">
          <div className="siginphead">
            <h2>Sign in your Account</h2>
            <p>Welcome back please enter your details</p>
          </div>



          <div className="signinform">
         
         
          <div className="loginname">
            <input type="text"    className="inpt" placeholder="Enter name/mobile" id="sinin" required />
          </div>
          <div className="signinpassword">
            <input type="password"    className="inpt" placeholder=" password" id="sinpas"  required />
          </div>
        </div>

        <div className="frgt">
          <h5>Forget password?</h5>
        </div>

        
        <div className="formcontent">
          
          <div className="signinbutton">
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


    </div>
  );
};

export default Login;
