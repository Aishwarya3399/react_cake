import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./address.css";

const Address = () => {
  // State Management
  const [savedAddresses, setSavedAddresses] = useState([]);
  const [addressFormVisible, setAddressFormVisible] = useState(false);
  const [noSavedAddressVisible, setNoSavedAddressVisible] = useState(false);
  const [selectedAddressIndex, setSelectedAddressIndex] = useState(null);

  // Load saved addresses from localStorage on component mount
  useEffect(() => {
    const addresses = JSON.parse(localStorage.getItem("savedAddresses")) || [];
    setSavedAddresses(addresses);
    setNoSavedAddressVisible(addresses.length === 0);
  }, []);

  // Show the address form
  const showAddressForm = () => {
    setAddressFormVisible(true);
    setNoSavedAddressVisible(false);
  };

  // Save a new address or edited address to localStorage
  const saveAddress = () => {
    const newAddress = {
      fullName: document.getElementById("fullNameInput").value,
      mobileNumber: document.getElementById("mobileNumberInput").value,
      address: document.getElementById("addressInput").value,
      city: document.getElementById("cityInput").value,
      state: document.getElementById("stateInput").value,
      zip: document.getElementById("zipInput").value,
      country: document.getElementById("countryInput").value,
      saveAddress: document.getElementById("saveAddressCheckbox").checked,
    };

    const updatedAddresses = [...savedAddresses, newAddress];
    localStorage.setItem("savedAddresses", JSON.stringify(updatedAddresses));
    setSavedAddresses(updatedAddresses);
    setAddressFormVisible(false);
    setNoSavedAddressVisible(false);
  };

  // Delete an address
  const deleteAddress = (index) => {
    const updatedAddresses = [...savedAddresses];
    updatedAddresses.splice(index, 1);
    localStorage.setItem("savedAddresses", JSON.stringify(updatedAddresses));
    setSavedAddresses(updatedAddresses);
    setNoSavedAddressVisible(updatedAddresses.length === 0);
  };

  // Edit an existing address
  const editAddress = (index) => {
    const address = savedAddresses[index];
    document.getElementById("fullNameInput").value = address.fullName;
    document.getElementById("mobileNumberInput").value = address.mobileNumber;
    document.getElementById("addressInput").value = address.address;
    document.getElementById("cityInput").value = address.city;
    document.getElementById("stateInput").value = address.state;
    document.getElementById("zipInput").value = address.zip;
    document.getElementById("countryInput").value = address.country;
    document.getElementById("saveAddressCheckbox").checked = address.saveAddress;

    showAddressForm();

    const updatedAddresses = [...savedAddresses];
    updatedAddresses.splice(index, 1);
    setSavedAddresses(updatedAddresses);
    localStorage.setItem("savedAddresses", JSON.stringify(updatedAddresses));
  };

  // Select an address for the order
  const selectAddress = (index) => {
    setSelectedAddressIndex(index);
    const selectedAddress = savedAddresses[index];
    localStorage.setItem(
      "selectedShippingAddress",
      JSON.stringify(selectedAddress)
    );
  };

  // Navigate to the review order page
  const reviewOrder = () => {
    const selectedAddress = localStorage.getItem("selectedShippingAddress");
    if (selectedAddress) {
      window.location.href = "/review";
    } else {
      alert("Please select a shipping address.");
    }
  };

  return (
   <div className="pb-5 pt-2 col-lg-12 px-3 container">
        <div className="row">
          {/* Side Card */}
          <div className="col-lg-6 mt-5 side-card text-center align-self-top">
            <div className="sticky-filter mt-5">
              <Link className="nav-link active mt-4 mx-2 mb-3" to="/cart">
                My Cart
              </Link>
              <Link className="nav-link mt-3 mx-2 mb-3" to="/address">
                Delivery Address
              </Link>
              <Link className="nav-link mt-3 mx-2 mb-3" to="/review">
                Review Order
              </Link>
            </div>
          </div>
        {/* Address Management Section */}
        <div className="col-lg-10 mt-5">
          <h2>Delivery Address</h2>
          {noSavedAddressVisible && (
            <p>No saved addresses available. Please add a new address.</p>
          )}

          {!addressFormVisible && (
            <button
              className="btn btn-primary mt-3"
              onClick={showAddressForm}
            >
              Add New Address
            </button>
          )}

          {addressFormVisible && (
            <form className="address-form mt-3">
              <input
                type="text"
                id="fullNameInput"
                className="form-control mb-2"
                placeholder="Full Name"
              />
              <input
                type="text"
                id="mobileNumberInput"
                className="form-control mb-2"
                placeholder="Mobile Number"
              />
              <textarea
                id="addressInput"
                className="form-control mb-2"
                placeholder="Address"
              ></textarea>
              <input
                type="text"
                id="cityInput"
                className="form-control mb-2"
                placeholder="City"
              />
              <input
                type="text"
                id="stateInput"
                className="form-control mb-2"
                placeholder="State"
              />
              <input
                type="text"
                id="zipInput"
                className="form-control mb-2"
                placeholder="ZIP Code"
              />
              <input
                type="text"
                id="countryInput"
                className="form-control mb-2"
                placeholder="Country"
              />
              <div className="form-check mb-2">
                <input
                  type="checkbox"
                  id="saveAddressCheckbox"
                  className="form-check-input"
                />
                <label htmlFor="saveAddressCheckbox" className="form-check-label">
                  Save Address
                </label>
              </div>
              <button
                type="button"
                className="btn btn-success"
                onClick={saveAddress}
              >
                Save Address
              </button>
            </form>
          )}

          {savedAddresses.map((address, index) => (
            <div className="address-card mt-3" key={index}>
              <p>
                <strong>{address.fullName}</strong>
                <br />
                {address.address}, {address.city}, {address.state} - {address.zip}
                <br />
                {address.country}
                <br />
                Mobile: {address.mobileNumber}
              </p>
              <button
                className="btn btn-secondary me-2"
                onClick={() => editAddress(index)}
              >
                Edit
              </button>
              <button
                className="btn btn-danger"
                onClick={() => deleteAddress(index)}
              >
                Delete
              </button>
              <button
                className="btn btn-primary mt-2"
                onClick={() => selectAddress(index)}
              >
                Select Address
              </button>
            </div>
          ))}

          <button
            className="btn btn-success mt-4"
            onClick={reviewOrder}
          >
            Proceed to Review Order
          </button>
        </div>
      </div>
    </div>
  );
};

export default Address;
