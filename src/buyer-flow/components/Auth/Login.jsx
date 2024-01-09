import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios"; // Don't forget to import axios
import API_ENDPOINTS from "../../../ApiPoints/apiConfig";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  };

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(`${API_ENDPOINTS.BASE_URL}/login`, {
        email,
        password,
      });

      // Assuming your API returns a token upon successful login
      const  users  = response.data.data;
      console.log(users);
      // Store the token in localStorage or a secure cookie
     // Store the token in localStorage or a secure cookie
      localStorage.setItem("user", JSON.stringify(users));

      // Redirect or perform other actions upon successful login
      console.log("Login successful");
    } catch (error) {
      console.error("Error during login:", error.message);
      // Handle the error (show an error message, etc.)
    }
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
              <form className="form" onSubmit={handleLogin}>
                <div className="form-fields">
                  <label className="label" htmlFor="username">
                    Email
                  </label>
                  <input
                    className="input"
                    type="text"
                    id="email"
                    placeholder="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
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
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                    />
                    <i className="fa fa-eye" onClick={handleTogglePassword}></i>
                  </div>

                  <a href="http://" className="fg-pass">
                    Forgot Password?
                  </a>
                </div>
                <button type="submit" className="button submit-btn">
                  Login
                </button>
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
