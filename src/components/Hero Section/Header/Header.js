import React from "react";
import { Link, NavLink } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";


const Header = () => {
  const { user, logOut } = useAuth();
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light" style={{minHeight:'80px'}}>
        <div className="container">
          <NavLink className="navbar-brand fs-2 fw-bolder" to="/">
          <span style={{color:'#0188df'}}>M</span>ed<span style={{color:'#0188df'}}>C</span>are 
          </NavLink>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link
                  className="nav-link active"
                  aria-current="page"
                  to="/home"
                >
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/profile">
                  Profile
                </Link>
              </li>
              {user?.email && (
                <li className="my-auto fw-bold me-2">{user.displayName}</li>
              )}
              {user?.email ? (
                <Link to="/">
                  <button className="btn btn-danger" onClick={logOut}>Logout</button>
                </Link>
              ) : (
                <Link to="/login">
                  <button className="btn btn-primary ">Sign In</button>
                </Link>
              )}

              <Link to="/appointment">
                <button className="btn btn-success mx-md-3">
                  Make Appointment
                </button>
              </Link>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
