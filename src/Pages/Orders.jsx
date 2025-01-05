import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Orders.css";

const Orders = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    let storedOrders = JSON.parse(localStorage.getItem("orders")) || [];

    // Update orders to include missing timestamps
    storedOrders = storedOrders.map((order) => {
      if (!order.hasOwnProperty("timestamp")) {
        order.timestamp = Date.now(); // Assign the current timestamp if missing
      }
      return order;
    });

    localStorage.setItem("orders", JSON.stringify(storedOrders)); // Save updated orders
    setOrders(storedOrders.reverse()); // Display the latest order first
  }, []);

  const startCancelTimer = (button, orderId) => {
    let timeRemaining = parseInt(button.getAttribute("data-time-remaining"));

    const timerInterval = setInterval(() => {
      timeRemaining -= 1;

      if (timeRemaining <= 0) {
        clearInterval(timerInterval);
        button.classList.add("hidden");
      } else {
        button.innerText = `Cancel Order (${Math.floor(timeRemaining)}s)`;
      }
    }, 1000);
  };

  const cancelOrder = (orderId) => {
    let updatedOrders = orders.filter((order) => order.orderId !== orderId);
    localStorage.setItem("orders", JSON.stringify(updatedOrders));
    setOrders(updatedOrders);
  };

  return (
    <div className="pb-5 pt-2 col-lg-12">
      <div className="row">
        <div className="col-lg-2 mt-5 side-card text-center align-self-top">
          <div className="sticky-filter mt-4">
           <Link className="nav-link active mt-4 mx-2 mb-3" to="/profile">
                My Account
              </Link>
              <Link className="nav-link mt-3 mx-2 mb-3" to="/orders">
                My Orders
              </Link>
              <Link className="nav-link mt-3 mx-2 mb-3" to="/wishlist">
                My Wishlist
              </Link>
              <Link className="nav-link mt-3 mx-2 mb-3" to="/wallet">
                My Wallet
              </Link>
              <Link className="nav-link mt-3 mx-2 mb-4" to="/manage-address">
                Manage Address
              </Link>
          </div>
        </div>
        <div className="container col-lg-6 text-center mt-2">
          <h1>My Orders</h1>
          <div id="ordersContainer">
            {orders.length > 0 ? (
              orders.map((order, index) => {
                const requiredProps = ["orderId", "shippingAddress", "deliveryDetails", "cart", "timestamp"];
                const missingProps = requiredProps.filter((prop) => !order.hasOwnProperty(prop) || !order[prop]);

                if (missingProps.length === 0) {
                  const timeElapsed = (Date.now() - new Date(order.timestamp).getTime()) / 1000;
                  const canCancel = timeElapsed < 600;

                  return (
                    <div key={index} className="order-card">
                      <div className="order-details">
                        <h2>Order ID: {order.orderId}</h2>
                        <h4>Delivery Address:</h4>
                        <p>
                          {order.shippingAddress.fullName || "N/A"}<br />
                          {order.shippingAddress.mobileNumber || "N/A"}<br />
                          {order.shippingAddress.address || "N/A"}<br />
                          {order.shippingAddress.city || "N/A"}, {order.shippingAddress.state || "N/A"} - {order.shippingAddress.zip || "N/A"}<br />
                          {order.shippingAddress.country || "N/A"}
                        </p>
                        <h4>Delivery Details:</h4>
                        <p>Option: {order.deliveryDetails.option || "N/A"}</p>
                        {order.deliveryDetails.option === "dateTime" && (
                          <>
                            <p>Date: {order.deliveryDetails.date || "N/A"}</p>
                            <p>Time Slot: {order.deliveryDetails.time || "N/A"}</p>
                          </>
                        )}
                      </div>
                      <div className="order-items mt-5">
                        <h4>Order Items:</h4>
                        <ul>
                          {order.cart.map((item, idx) => (
                            <li key={idx}>
                              <img src={item.image || "default-image.jpg"} alt={item.name || "Item"} style={{ width: "100px", height: "100px" }} />
                              <div>
                                {item.name || "Item Name"} - {item.weight || "Weight"}, {item.eggOrEggless || "Type"} - Rs. {item.price || "0"} x {item.quantity || "1"}
                              </div>
                            </li>
                          ))}
                        </ul>
                        <div className="order-status">
                          <h4>Status: {order.status || "Pending"}</h4>
                        </div>
                      </div>
                      {canCancel && (
                        <button
                          className="btn cancel-btn btn-danger h-50 w-50 align-self-center ms-5"
                          onClick={() => cancelOrder(order.orderId)}
                        >
                          Cancel Order ({Math.floor(600 - timeElapsed)}s)
                        </button>
                      )}
                    </div>
                  );
                } else {
                  console.error(`Order at index ${index} is missing required properties:`, missingProps);
                  return null;
                }
              })
            ) : (
              <p>No orders found.</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Orders;
