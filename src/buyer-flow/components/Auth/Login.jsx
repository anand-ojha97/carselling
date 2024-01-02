import React from "react";
import { useState } from "react";
import { Link } from 'react-router-dom';

const Login = () => {

  const [showPassword, setShowPassword] = useState(false);
  
  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  };
  return (
    <>
      <div className="container">
        <div className="row login-section">
          <div className="col-lg-6">
            <div className="img">
              <img src="/images/left-section.png" alt="logo" />
            </div>
          </div>
          <div className="col-lg-6">
            <div className="form-section">
              <p className="title">Welcome Back !</p>
              <form className="form" action="">
                <div className="form-fields">
                  <label className="label" htmlFor="username">
                    Email
                  </label>
                  <input
                    className="input"
                    type="text"
                    id="username"
                    placeholder="Username"
                  />

                  <label className="label" htmlFor="password">
                    Password
                  </label>
                  <div className="fields-groups">
                    <input
                      className="input"
                      type={showPassword ? "text" : "password"}
                      id="password"
                      placeholder="Password"
                    />
                    <i className="fa fa-eye" onClick={handleTogglePassword}></i>
                  </div>

                  <a href="http://" className="fg-pass">
                    Forgot Password?
                  </a>
                </div>
                <button className="button submit-btn">Login</button>
              </form>
              <div className="reg-link">
                <p>
                  Don't have an account?
                  <Link to="/register"> Register</Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
