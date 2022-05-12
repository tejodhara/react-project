import React from 'react'
import {withRouter} from 'react-router-dom';
import { useState } from 'react/cjs/react.development';
function Signup(props) {

  const [signupData, setsignupData] = useState({
    firstName:'',
    lastName:'',
    email:'',
    password:'',
    confirmPassword:''
  })

  const [firstNameError, setFirstNameError] = useState('');
  const [lastNameError, setLastNameError] = useState('');
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [confirmpasswordError, setconfirmPasswordError] = useState("");

  //route
    const navigateToLogin=()=>{
        // console.log(props);
        props.history.push('/login')
    }

     //updateSignupData
  const updateSignupData = (event) => {
    setsignupData({
      ...signupData,
      [event.target.name]: event.target.value,
    });
    console.log(signupData);
  };

    //validation function
//first name
    let validateFirstName = () => {
      if (signupData.firstName) {
          let regex = /^[a-zA-Z]{2,30}$/;
          if (regex.test(signupData.firstName)) {
              setFirstNameError("")
              return true;
          } else {
              setFirstNameError("*Enter valid first name, only characters allowed")
          }
  
      } else {
          setFirstNameError('*First Name Required')
      }
      return false;
  }
  
  //last name
  let validateLastName = () => {
      if (signupData.lastName) {
          let regex = /^[a-zA-Z]{2,30}$/;
          if (regex.test(signupData.lastName)) {
              setLastNameError("")
              return true;
          } else {
              setLastNameError("*Enter valid last name, only characters allowed")
          }
  
      } else {
          setLastNameError('*Last Name Required')
      }
      return false;
  }
     //email validate
  const validateEmail = () => {
    if (signupData.email) {
      let regex = /^\S+@\S+$/;
      if (regex.test(signupData.email)) {
        setEmailError("");
        return true;
      } else {
        setEmailError("*Enter valid Email-id");
      }
    } else {
      setEmailError("*Email-id is Required");
    }
    return false;
  };

  //password validate
  const validatePassword = () => {
    if (signupData.password) {
      let regex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
      if (regex.test(signupData.password)) {
        setPasswordError("");
        return true;
      } else {
        setPasswordError(`*Enter valid password,Minimum eight characters, at least one letter and one number:
         `);
      }
    } else {
      setPasswordError("*Password is Required");
    }
    return false;
  };

  //confirm password

  const validateConfirmPassword = ()=>{
      if(signupData.confirmPassword){
        if(signupData.confirmPassword===signupData.password){
          setconfirmPasswordError("");
          return true
        }else{
          setconfirmPasswordError("*Password and Confirm Password does not match");
          return false;
        }
      }else{
        setconfirmPasswordError("*Please confirm the password  ");
        return false;
      }
  }

/////
  const saveData = (event) => {
    //validation
    validateFirstName();
    validateLastName();
    validateEmail();
    validatePassword();
    validateConfirmPassword()
    if (validateFirstName() && validateLastName() && validateEmail() && validatePassword() && validateConfirmPassword()) {
      props.getUserSignupData(signupData);

      setsignupData({
        firstName:'',
        lastName:'',
        email:'',
        password:'',
        confirmPassword:''
      });

      const clearData = () => {
        setFirstNameError('')
        setLastNameError('')
        setEmailError('');
        setPasswordError('');  
    }
    clearData()
  }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
  };
    return (
        <div>
         <div className="container border  mt-4 form__main">
        <form onSubmit={handleSubmit}>
        <div className="mb-3  mt-3">
          <label htmlFor="firstName" className="form-label">First Name</label>
          <input name='firstName' value={signupData.firstName} placeholder="Enter First Name" type="text" 
          className="form-control" id="firstName" onChange={(event) => {updateSignupData(event)}} /> 

        {firstNameError && <div className="errormsg">{firstNameError}</div>}
        </div>

        <div className="mb-3">
          <label htmlFor="lastName" className="form-label">Last Name</label>
          <input name='lastName' value={signupData.lastName} placeholder="Enter Last Name" type="text" className="form-control" id="lastName" 
          onChange={(event) => {updateSignupData(event)}} /> 

        {lastNameError && <div className="errormsg">{lastNameError}</div>}
        </div>

        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
          <input name='email' value={signupData.email} placeholder="Enter Email id" type="email" className="form-control" id="exampleInputEmail1" 
           onChange={(event) => {updateSignupData(event)}} />

        {emailError && <div className="errormsg">{emailError}</div>}
        </div>

        <div className="mb-3">
          <label htmlFor="password" className="form-label">Password</label>
          <input name='password' value={signupData.password} placeholder="Enter Password" type="text" className="form-control" id="password" 
          onChange={(event) => {updateSignupData(event)}} />

        {passwordError && <div className="errormsg">{passwordError}</div>}
        </div>
        <div className="mb-3">
          <label htmlFor="confirmPassword" className="form-label">Confirm Password</label>
          <input name='confirmPassword' value={signupData.confirmPassword} placeholder="Enter Password Again" type="text" className="form-control" id="confirmPassword" 
          onChange={(event) => {updateSignupData(event)}} />

        {confirmpasswordError && <div className="errormsg">{confirmpasswordError}</div>}
        </div>
       
        <button type="submit" className="btn btn-primary" onClick={()=>{saveData()}}>Sign Up</button>

        <h6 className="mb-3  mt-3" style={{ cursor: "pointer" , marginTop:'8px'}} onClick={navigateToLogin}>
            Already have an account? Click here to Login !</h6>
      </form>

        </div>
        </div>
    )
}

export default withRouter(Signup)
