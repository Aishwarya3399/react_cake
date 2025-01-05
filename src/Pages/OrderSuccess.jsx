import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./OrderSuccess.css"; // Assuming styles are saved in a CSS file

const OrderSuccess = () => {
  const [lastOrder, setLastOrder] = useState(null);
  const [rewardPoints, setRewardPoints] = useState(0);
  const history = useHistory();

  useEffect(() => {
    const orders = JSON.parse(localStorage.getItem("orders")) || [];
    const lastOrderData = orders[orders.length - 1];
    setLastOrder(lastOrderData);

    // Assuming `totalAmountPaid` is part of the last order
    if (lastOrderData) {
      const totalAmountPaid = lastOrderData.totalAmountPaid || 0;
      setRewardPoints(calculateRewardPoints(totalAmountPaid));
    }
  }, []);

  const calculateRewardPoints = (amount) => {
    return (amount * 0.1).toFixed(2); // 10% of the total amount
  };

  const goToOrdersPage = () => {
    history.push("/orders");
  };

  const closePopup = () => {
    document.getElementById("rewardPopup").style.display = "none";
  };

  return (
    <div className="mainpage">
      <div className="container text-center pt-3">
        <h1>Order Success</h1>
        <div className="order-details-container border" id="orderDetails">
          {lastOrder ? (
            <>
              <div className="left-column">
                <h3>Delivery Address:</h3>
                <p>
                  {lastOrder.shippingAddress.fullName}
                  <br />
                  {lastOrder.shippingAddress.mobileNumber}
                  <br />
                  {lastOrder.shippingAddress.address}
                  <br />
                  {lastOrder.shippingAddress.city},{" "}
                  {lastOrder.shippingAddress.state} -{" "}
                  {lastOrder.shippingAddress.zip}
                  <br />
                  {lastOrder.shippingAddress.country}
                </p>
                <h3>Delivery Details:</h3>
                <p>Option: {lastOrder.deliveryDetails.option}</p>
                {lastOrder.deliveryDetails.option === "dateTime" && (
                  <>
                    <p>Date: {lastOrder.deliveryDetails.date}</p>
                    <p>Time Slot: {lastOrder.deliveryDetails.time}</p>
                  </>
                )}
              </div>
              <div className="right-column">
                <h2>Order ID: {lastOrder.orderId}</h2>
                <h3 className="mt-4">Order Items:</h3>
                <ul>
                  {lastOrder.cart.map((item, index) => (
                    <li key={index}>
                      <img
                        src={item.image}
                        alt={item.name}
                        style={{ width: "80px", height: "80px" }}
                      />
                      <div>
                        {item.name} - {item.weight}, {item.eggOrEggless} - Rs.{" "}
                        {item.price} x {item.quantity}
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </>
          ) : (
            <p>No order details found.</p>
          )}
        </div>
        <button className="btn btn-warning btn-lg my-4" onClick={goToOrdersPage}>
          View My Orders
        </button>
        {rewardPoints > 0 && (
          <div id="rewardPopup" className="reward-popup">
            <div className="reward-popup-content">
              <span className="close" onClick={closePopup}>
                &times;
              </span>
              <h2>Congratulations!</h2>
              <p>You have earned {rewardPoints} reward points!</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default OrderSuccess;
