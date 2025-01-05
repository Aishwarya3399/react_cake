// src/pages/Profile.jsx
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import './Profile.css';

const Profile = () => {
  // Initial user data state
  const [userData, setUserData] = useState({
    name: "",
    birthday: "1990-01-01",
    gender: "male",
    phone: "1234567890",
    email: "email@gmail.com",
  });

  const [editMode, setEditMode] = useState(false);

  useEffect(() => {
    // Load user data from localStorage
    const storedUserData = JSON.parse(localStorage.getItem("userProfile"));
    if (storedUserData) {
      setUserData(storedUserData);
    }
  }, []);

  const handleSaveChanges = () => {
    localStorage.setItem("userProfile", JSON.stringify(userData));
    setEditMode(false);
  };

  const handleCancelChanges = () => {
    const storedUserData = JSON.parse(localStorage.getItem("userProfile"));
    setUserData(storedUserData || userData);
    setEditMode(false);
  };

  return (
    <div className="pb-5 pt-2 col-lg-12">
      <div className="row">
        <div className="col-lg-2 mt-5 side-card text-center align-self-top mx-4">
          <div className="sticky-filter mt-3">
          <Link className="nav-link active mt-4 mx-2 mb-3" to="/profile"> My Account</Link>             
            <a className="nav-link mt-3 mx-2 mb-3" href="/orders">
              My Orders
            </a>
           <Link className="nav-link mt-3 mx-2 mb-3" to="/wishlist">
                   My Wishlist
                 </Link>
            <a className="nav-link mt-3 mx-2 mb-3" href="/wallet">
              My Wallet
            </a>
            <a className="nav-link mt-3 mx-2 mb-4" href="/manage-address">
              Manage Address
            </a>
          </div>
        </div>

        <div className="container col-lg-4 text-center mt-2">
          <h1>
            <strong>Profile Details</strong>
          </h1>
          <form className="mt-4" id="profileForm">
            <div className="mb-3">
              <label htmlFor="userName" className="form-label">
                Name
              </label>
              <input
                type="text"
                className="form-control"
                id="userName"
                placeholder="Enter your name"
                value={userData.name}
                onChange={(e) =>
                  setUserData({ ...userData, name: e.target.value })
                }
                disabled={!editMode}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="userBirthday" className="form-label">
                Birthday
              </label>
              <input
                type="date"
                className="form-control"
                id="userBirthday"
                value={userData.birthday}
                onChange={(e) =>
                  setUserData({ ...userData, birthday: e.target.value })
                }
                disabled={!editMode}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="userGender" className="form-label">
                Gender
              </label>
              <select
                className="form-select"
                id="userGender"
                value={userData.gender}
                onChange={(e) =>
                  setUserData({ ...userData, gender: e.target.value })
                }
                disabled={!editMode}
              >
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
              </select>
            </div>
            <div className="mb-3">
              <label htmlFor="userPhone" className="form-label">
                Phone Number
              </label>
              <input
                type="tel"
                className="form-control"
                id="userPhone"
                value={userData.phone}
                onChange={(e) =>
                  setUserData({ ...userData, phone: e.target.value })
                }
                disabled={!editMode}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="userEmail" className="form-label">
                Email ID
              </label>
              <input
                type="email"
                className="form-control"
                id="userEmail"
                value={userData.email}
                onChange={(e) =>
                  setUserData({ ...userData, email: e.target.value })
                }
                disabled={!editMode}
              />
            </div>
            <button
              type="button"
              className="btn btn-primary"
              onClick={() => setEditMode(true)}
              disabled={editMode}
            >
              Edit Profile
            </button>
            <button
              type="button"
              className="btn btn-success"
              onClick={handleSaveChanges}
              style={{ display: editMode ? "inline-block" : "none" }}
            >
              Save Changes
            </button>
            <button
              type="button"
              className="btn btn-secondary"
              onClick={handleCancelChanges}
              style={{ display: editMode ? "inline-block" : "none" }}
            >
              Cancel
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Profile;
