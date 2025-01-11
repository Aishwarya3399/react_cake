import React from "react";
import { useNavigate } from "react-router-dom";
import "./OrderSuccess.css"; // Import the CSS file for styling

const OrderSuccess = () => {
  const navigate = useNavigate();

  const handleContinueShopping = () => {
    navigate("/CakeList"); // Redirect to the catalogue page
  };

  return (
    <div className="container order-success-page">
      <div className="text-center">
        <img
          src="./images/order_success.png"
          alt="Order Success"
          className="order-success-image"
        />
        <h1>Thank You for Your Order!</h1>
        <p>Your order has been successfully placed.</p>
        <button className="btn btn-primary" onClick={handleContinueShopping}>
          Continue Shopping
        </button>
      </div>
    </div>
  );
};
export default OrderSuccess;
