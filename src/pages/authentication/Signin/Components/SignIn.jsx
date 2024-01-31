import { useState, useEffect } from 'react';
import img from '../assets/Cover.png';
import img1 from '../../Signin/assets/eye-off.png';
import img2 from '../../Signin/assets/rednot.png';
import img3 from '../../Signin/assets/red.png';
// import img4 from '../../Signin/assets/check.png';
import { Link } from "react-router-dom";


import './SignIn.scss';

// const handleClick = () => {
//  <p>signed in Successfully</p>
// }



const SignIn = () => {
    const initialValues = { email: "", password: "", allfield: "" };
    const [formValue, setFormValues] = useState(initialValues);
    const [formErrors, setFormErrors] = useState({});
    const [isSubmit, setIsSubmit] = useState(false);
    const [visibleImg, setVisibleImg] = useState(false);
    const [imageVis, setImageVis] = useState(false);
    const [success, setSucess] = useState(false);
    const [matchpassword, setMatchPassword] = useState(true);


    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormValues({ ...formValue, [name]: value });

    };
    const handleSubmit = (e) => {
        e.preventDefault();
        setFormErrors(validate(formValue));
        setIsSubmit(true);
        setVisibleImg(true);
        setImageVis(true)
        setSucess(true);
        setMatchPassword(false);

    };



    useEffect(() => {
        console.log(formErrors)
        if (Object.keys(formErrors).length == 0 && isSubmit) {
            console.log(formValue);
        }

    }, [formErrors, formValue, isSubmit])
    const validate = (values) => {
        const errors = {

        }

        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!values.email || !values.password) {
            errors.allfield = "Missing Required fields. Please enter valid details.";
        } else {

            if (!values.email) {
                errors.email = "email is required";
            }
            else if (!regex.test(values.email)) {
                errors.email = "this is not a valid email format"
            }
            else if (!values.password) {
                errors.password = "password is required";
            }
            else if (values.password.length < 4) {
                errors.password = "password must be more than 4 character"
            }
            else if (values.password.length > 10) {
                errors.password = "password cannot exceed more than 10 number"
            }
            else {
                allfield = "dbfuialwefhnaer"
            }
        }

        alert(errors)

    }
    return (

        <>
            <section className="container">
                <div className="signin">
                    <img src={img} alt="" />
                </div>


                <div className="left">
                    <div className="text">
                        <h1>Sign In to your Account</h1>
                        <p>Welcome back! please enter your detail</p>
                    </div>

                    {
                        Object.keys(formErrors).length === 0 && isSubmit && (<div className='uimessagesuccess'>Signed In Successfully</div>)
                    }

                    <form onSubmit={handleSubmit}>
                        <div className='isemail'>
                            <input type="email"
                                placeholder='Enter your Email'
                                onChange={handleChange}
                                value={formValue.email}
                                name='email' />
                            <p>{formErrors.email}</p>

                            <div className="para">

                                <p>
                                    {visibleImg ? formErrors.email && (
                                        <>
                                            <img src={img3} alt='img3' />
                                            {formErrors.email}
                                        </>
                                    ) : null}</p>
                            </div>
                        </div>


                        <div className='field'>
                            <input type="text"
                                placeholder='password'
                                name='password'
                                onChange={handleChange}
                                value={formValue.password}
                            />
                            <p>{formErrors.password}</p>

                            <p>
                                {visibleImg ? formErrors.password && (
                                    <>
                                        <img src={img3} alt='img3' />  {formErrors.password} </>)
                                    : null} </p>

                        </div>


                        <div className='image'>
                            <img src={img1} alt="vbjj" />
                        </div>

                        {/* <div className="link"> */}
                        <Link to="#">Forgot Password?</Link>
                        {/* </div> */}


                        {/* all field button  */}
                        <div className='allbut'>
                            <h5>
                                {imageVis ? formErrors.allfield && (
                                    <>  <img src={img2} alt='img5' /> {formErrors.allfield} </>) : null
                                }
                            </h5>
                        </div>

                        <button className='btn'>Sign In</button>

                    </form>


                </div>
            </section>




        </>




    )
}

export default SignIn