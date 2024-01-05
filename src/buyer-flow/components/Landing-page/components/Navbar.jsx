import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const Navbar = () => {
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
            <img src="http://194.195.117.10/pride-mile/_next/static/media/pdLOGO.f370d30b.png" alt="" style={{width:'150px'}} />
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
            <img src="/images/user.png" alt="user" />
            <span>Hello Anand Ojha</span>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
