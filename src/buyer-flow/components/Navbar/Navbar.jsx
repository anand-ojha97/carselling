import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Dropdown, Menu } from "antd";
import { Link } from "react-router-dom";

const Navbar = () => {
  const user = JSON.parse(localStorage.getItem("user"));
  const username = user ? user.name : null;

  // Logout function
  const handleLogout = () => {
    localStorage.removeItem("user");
    console.log("Logged out");
  };

  // Menu for the Dropdown
  const menu = user ? (
    <Menu>
      <Menu.Item key="logout" onClick={handleLogout}>
        Logout
      </Menu.Item>
    </Menu>
  ) : (
    <Menu>
      <Menu.Item key="login">
        <Link to="/login">Login</Link>
      </Menu.Item>
      <Menu.Item key="register">
        <Link to="/register">Register</Link>
      </Menu.Item>
    </Menu>
  );

  
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light" id="main-header">
        <div className="container">
          {/* Menu on the left */}
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="logo">
            <img
              src="http://194.195.117.10/pride-mile/_next/static/media/pdLOGO.f370d30b.png"
              alt=""
              style={{ width: "150px" }}
            />
          </div>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Search Cars
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  How to Buy
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Services
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  More
                </a>
              </li>
            </ul>
          </div>
          {/* Search bar on the right */}
          <div className="d-flex">
            <div className="search-bar input-group">
              <span className="search">Search Cars</span>
              <input
                type="text"
                className="form-control"
                placeholder="The better way to find your perfect used car from Japan"
              />
              <button className="btn btn-outline-secondary">
                <i className="fa fa-search"></i>
              </button>
            </div>
          </div>
          <div className="user">
            <Dropdown overlay={menu} placement="bottomRight" arrow>
              <div className="user">
                <img src="/images/user.png" alt="user" />
                <span>Hello {username ? username : "user"}</span>
              </div>
            </Dropdown>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
