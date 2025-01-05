import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaShoppingCart, FaHeart, FaUser } from 'react-icons/fa';
import Marquee from "../components/Marquee";
import './Header.css';

const Header = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const location = useLocation();

  const toggleModal = () => {
    setIsModalVisible(!isModalVisible);
  };

  return (
    <div className="header w-100">
      {/* Show Marquee only on Home page */}
      {location.pathname === '/' && <Marquee />}

      <div className="row col-12 align-items-center">
        {/* Logo and Icons Row for Mobile View */}
        <div className="col-12 d-flex d-md-none justify-content-between align-items-center px-3">
          <Link to="/" className="d-flex align-items-center">
            <img
              src="../images/logo.jpg"
              className="border-end border-dark rounded-circle"
              width="60px"
              height="60px"
              alt="Logo"
            />
          </Link>
          <div className="d-flex icons">
            <Link to="/cart" className="icon-link mx-2">
              <FaShoppingCart className="icon-s" style={{ fontSize: '1.2rem', color: '#333' }} />
            </Link>
            <Link to="/wishlist" className="icon-link mx-2">
              <FaHeart className="icon-s" style={{ fontSize: '1.2rem', color: '#333' }} />
            </Link>
            <Link to="/profile" className="icon-link mx-2">
              <FaUser className="icon-s" style={{ fontSize: '1.2rem', color: '#333' }} />
            </Link>
          </div>
        </div>

        {/* Logo for Laptop View */}
        <div className="col-md-4 d-none d-md-flex align-items-center px-3">
          <Link to="/">
            <img
              src="../images/logo.jpg"
              className="border-end border-dark rounded-circle"
              width="60px"
              height="60px"
              alt="Logo"
            />
          </Link>
        </div>

        {/* Search Bar */}
        <div className="col-12 col-md-4 mt-2 align-self-center text-center">
          <input
            className="form-control rounded-pill p-2 text-center"
            type="search"
            placeholder="Search for cakes, desserts, and more"
            aria-label="Search"
          />
        </div>

        {/* Icons for Laptop View */}
        <div className="col-md-4 d-none d-md-flex justify-content-end align-items-center px-3">
          <Link to="/cart" className="icon-link mx-2">
            <FaShoppingCart className="icon-s" style={{ fontSize: '1.2rem', color: '#333' }} />
          </Link>
          <Link to="/wishlist" className="icon-link mx-2">
            <FaHeart className="icon-s" style={{ fontSize: '1.2rem', color: '#333' }} />
          </Link>
          <Link to="/profile" className="icon-link mx-2">
            <FaUser className="icon-s" style={{ fontSize: '1.2rem', color: '#333' }} />
          </Link>
        </div>
      </div>

      {/* Modal */}
      {isModalVisible && (
        <div
          className="modal fade show"
          style={{ display: 'block' }}
          role="dialog"
          aria-labelledby="authModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="authModalLabel">
                  Sign Up
                </h5>
                <button
                  type="button"
                  className="close"
                  onClick={toggleModal}
                  aria-label="Close"
                >
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="modal-body">
                <SignupLogin />
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

const SignupLogin = () => {
  const [isSignup, setIsSignup] = useState(true);

  return (
    <div>
      {isSignup ? (
        <div id="signupForm">
          <div className="form-group">
            <label htmlFor="signupFullName">Full Name</label>
            <input type="text" className="form-control" id="signupFullName" required />
          </div>
          <div className="form-group">
            <label htmlFor="signupEmail">Email or Mobile No.</label>
            <input type="text" className="form-control" id="signupEmail" required />
          </div>
          <div className="form-group">
            <label htmlFor="signupPassword">Password</label>
            <input type="password" className="form-control" id="signupPassword" required />
          </div>
          <button type="submit" className="btn btn-primary btn-block" id="signupBtn">
            Sign Up
          </button>
          <p className="text-center mt-3">
            Already have an account?{' '}
            <span
              className="form-switch"
              style={{ cursor: 'pointer' }}
              onClick={() => setIsSignup(false)}
            >
              Login
            </span>
          </p>
        </div>
      ) : (
        <div id="loginForm">
          <div className="form-group">
            <label htmlFor="loginEmail">Email or Mobile No.</label>
            <input type="text" className="form-control" id="loginEmail" required />
          </div>
          <div className="form-group">
            <label htmlFor="loginPassword">Password</label>
            <input type="password" className="form-control" id="loginPassword" required />
          </div>
          <button type="submit" className="btn btn-primary btn-block" id="loginBtn">
            Login
          </button>
          <p className="text-center mt-3">
            Don’t have an account?{' '}
            <span
              className="form-switch"
              style={{ cursor: 'pointer' }}
              onClick={() => setIsSignup(true)}
            >
              Sign Up
            </span>
          </p>
        </div>
      )}
    </div>
  );
};

export default Header;
