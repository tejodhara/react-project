import React, { useState } from "react";
import { withRouter } from "react-router-dom";
import "./Login.css";

function Login(props) {
  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });

  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  //validation function
  //email validate
  const validateEmail = () => {
    if (loginData.email) {
      let regex = /^\S+@\S+$/;
      if (regex.test(loginData.email)) {
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
    if (loginData.password) {
      let regex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
      if (regex.test(loginData.password)) {
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

  const updateLoginData = (event) => {
    setLoginData({
      ...loginData,
      [event.target.name]: event.target.value,
    });
  };

  const saveData = (event) => {
    console.log("login button pressed");
    //validation
    validateEmail();
    validatePassword();
    if (validateEmail() && validatePassword()) {
      props.getUserData(loginData);
      setLoginData({
        email: "",
        password: "",
      });
    }
  };

  //handlesubmit
  const handleSubmit = (event) => {
    event.preventDefault();
  };

  const navigateToSignup = () => {
    props.history.push("/signup");
  };
  return (
    <div className="container border form__main">
      <form onSubmit={handleSubmit}>
        <div className="mb-3 mt-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Email address
          </label>
          <input
           title="email"
            placeholder="Enter Email id"
            onChange={(event) => {
              updateLoginData(event);
            }}
            name="email"
            type="email"
            value={loginData.email}
            className="form-control"
            aria-describedby="emailHelp"
          />
          {emailError && <div className="errormsg">{emailError}</div>}
        </div>

        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">
            Password
          </label>
          <input
            placeholder="Enter Password"
            onChange={(event) => {
              updateLoginData(event);
            }}
            name="password"
            type="text"
            value={loginData.password}
            className="form-control"
          />
          {passwordError && <div className="errormsg">{passwordError}</div>}
        </div>

        <button
        title="loginBtn"
          type="submit"
          onClick={() => {
            saveData();
          }}
          className="btn btn-primary"
        >
          Login
        </button>
        <br />
        <h6
          style={{ cursor: "pointer", marginTop: "8px" }}
          className="mb-3"
          onClick={navigateToSignup}
        >
          Don't have an account? Click here to Signup !
        </h6>

      </form>
    </div>
  );
}

export default withRouter(Login);
// export default Login;
