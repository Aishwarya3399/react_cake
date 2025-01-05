import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./ManageAddress.css";

const ManageAddress = () => {
  const [savedAddresses, setSavedAddresses] = useState([]);
  const [addressFormVisible, setAddressFormVisible] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    mobileNumber: "",
    address: "",
    city: "",
    state: "",
    zip: "",
    country: "",
    saveAddress: false,
  });

  useEffect(() => {
    // Load saved addresses from localStorage on component mount
    const addresses = JSON.parse(localStorage.getItem("savedAddresses")) || [];
    setSavedAddresses(addresses);
  }, []);

  const showAddressForm = () => {
    setAddressFormVisible(true);
  };

  const saveAddress = () => {
    const newAddress = { ...formData };

    const updatedAddresses = [...savedAddresses, newAddress];
    setSavedAddresses(updatedAddresses);
    localStorage.setItem("savedAddresses", JSON.stringify(updatedAddresses));

    // Reset form and hide it
    setFormData({
      fullName: "",
      mobileNumber: "",
      address: "",
      city: "",
      state: "",
      zip: "",
      country: "",
      saveAddress: false,
    });
    setAddressFormVisible(false);
  };

  const deleteAddress = (index) => {
    const updatedAddresses = savedAddresses.filter((_, i) => i !== index);
    setSavedAddresses(updatedAddresses);
    localStorage.setItem("savedAddresses", JSON.stringify(updatedAddresses));
  };

  const editAddress = (index) => {
    const addressToEdit = savedAddresses[index];
    setFormData(addressToEdit);
    setAddressFormVisible(true);

    // Remove the address being edited from the list
    const updatedAddresses = savedAddresses.filter((_, i) => i !== index);
    setSavedAddresses(updatedAddresses);
    localStorage.setItem("savedAddresses", JSON.stringify(updatedAddresses));
  };

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
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
   
        <div className="container col-8 col-lg-8 address-page text-center mt-2">
          <div className="pt-2">
            {!savedAddresses.length && (
              <div id="noSavedAddressMessage" className="alert alert-warning">
                You don't have a saved address.
                <button className="btn btn-primary btn-sm mt-2" onClick={showAddressForm}>
                  Add Address
                </button>
              </div>
            )}

            {savedAddresses.length > 0 && (
              <div id="savedAddressesList">
                <h5>Saved Addresses</h5>
                <div id="savedAddresses" className="row justify-content-center">
                  {savedAddresses.map((address, index) => (
                    <div key={index} className="address-card col-lg-3 mx-2">
                      <p>{address.fullName}</p>
                      <p>{address.mobileNumber}</p>
                      <p>{address.address}</p>
                      <p>{address.city}, {address.state}, {address.zip}</p>
                      <p>{address.country}</p>
                      <button className="btn btn-secondary btn-sm" onClick={() => editAddress(index)}>Edit</button>
                      <button className="btn btn-danger btn-sm" onClick={() => deleteAddress(index)}>Delete</button>
                    </div>
                  ))}
                </div>
                <button className="btn btn-primary btn-md" onClick={showAddressForm}>
                  Add Another Address
                </button>
              </div>
            )}

            {addressFormVisible && (
              <form className="address-form" id="addressForm">
                <div className="mb-3">
                  <label htmlFor="fullNameInput" className="form-label">Full Name</label>
                  <input
                    type="text"
                    className="form-control"
                    id="fullNameInput"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="mobileNumberInput" className="form-label">Contact Number</label>
                  <input
                    type="number"
                    className="form-control"
                    id="mobileNumberInput"
                    name="mobileNumber"
                    value={formData.mobileNumber}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="addressInput" className="form-label">Address</label>
                  <input
                    type="text"
                    className="form-control"
                    id="addressInput"
                    name="address"
                    value={formData.address}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="cityInput" className="form-label">City</label>
                  <input
                    type="text"
                    className="form-control"
                    id="cityInput"
                    name="city"
                    value={formData.city}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="stateInput" className="form-label">State</label>
                  <input
                    type="text"
                    className="form-control"
                    id="stateInput"
                    name="state"
                    value={formData.state}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="zipInput" className="form-label">Zip Code</label>
                  <input
                    type="text"
                    className="form-control"
                    id="zipInput"
                    name="zip"
                    value={formData.zip}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="countryInput" className="form-label">Country</label>
                  <input
                    type="text"
                    className="form-control"
                    id="countryInput"
                    name="country"
                    value={formData.country}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div className="mb-3 form-check">
                  <input
                    type="checkbox"
                    className="form-check-input"
                    id="saveAddressCheckbox"
                    name="saveAddress"
                    checked={formData.saveAddress}
                    onChange={handleInputChange}
                  />
                  <label className="form-check-label" htmlFor="saveAddressCheckbox">Save this address for future orders</label>
                </div>
                <button type="button" className="btn btn-primary btn-block" onClick={saveAddress}>
                  Save and Continue
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ManageAddress;
