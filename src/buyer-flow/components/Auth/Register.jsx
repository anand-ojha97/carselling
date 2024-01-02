import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
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
              <img src="/images/reg-section.png" alt="logo" />
            </div>
          </div>
          <div className="col-lg-6">
            <div className="form-section">
              <p className="title">Join & Connect with us!!</p>
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
                  <label className="label" htmlFor="category">
                    Select Country
                  </label>
                  <select className="input" id="category">
                    <option value="usa">USA</option>
                    <option value="canada">Canada</option>
                    <option value="uk">UK</option>
                  </select>
                </div>
                <button className="button submit-btn">Register</button>
              </form>
              <div className="reg-link login-link">
                <p>
                  Already have an account ?<Link to="/login"> Login</Link>
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
