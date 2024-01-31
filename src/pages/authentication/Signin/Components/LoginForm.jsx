import React from "react";
import { useForm } from "react-hook-form";
import Popup from "reactjs-popup";

import img from '../assets/Cover.png';


import './LoginForm.scss';
const LoginForm = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const [showPopup, setShowPopup] = React.useState(false);

  const onSubmit = (data) => {
    // send data to server
    console.log(data);
    // show pop-up
    setShowPopup(true);
  };

  return (
    <div className="container">
      <div className="signin">
        <img src={img} alt="" />
      </div>

      <div className="content">
        <div className="text">
          <h1>Sign In to your Account</h1>
          <p>Welcome back! please enter your detail</p>
        </div>

        <form onSubmit={handleSubmit(onSubmit)}>
          <label>Email</label>
          <input
            type="email"
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: "Invalid email address",
              },
            })}
          />
          {errors.email && <p>{errors.email.message}</p>}

          <label>Password</label>
          <input
            type="password"
            {...register("password", { required: "Password is required" })}
           
          />
          {errors.password && <p>{errors.password.message}</p>}

          <button type="submit">Sign in</button>
        </form>
        <Popup open={showPopup} onClose={() => setShowPopup(false)}>
          <div>
            <h2>You have successfully logged in!</h2>
            <button onClick={() => setShowPopup(false)}>Close</button>
          </div>
        </Popup>
      </div>
    </div>
  );
};

export default LoginForm;