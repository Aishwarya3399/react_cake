import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Review.css";

const Review = () => {
  const [cart, setCart] = useState([]);
  const [availablePoints, setAvailablePoints] = useState(100);
  const [usePoints, setUsePoints] = useState(false);
  const [totalPrice, setTotalPrice] = useState(0);
  const [pointsDeduction, setPointsDeduction] = useState(0);
  const shippingCharge = 40;

  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem("cart")) || [];
    setCart(storedCart);
    calculateTotalPrice(storedCart, usePoints);
  }, []);

  const calculateTotalPrice = (cartItems, usePointsFlag) => {
    const itemsPrice = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
    const deduction = usePointsFlag ? Math.min(availablePoints, itemsPrice) : 0;
    setPointsDeduction(deduction);
    setTotalPrice(itemsPrice - deduction + shippingCharge);
  };

  const toggleRewardPointsUsage = () => {
    setUsePoints((prevUsePoints) => {
      const newUsePoints = !prevUsePoints;
      calculateTotalPrice(cart, newUsePoints);
      return newUsePoints;
    });
  };

  const proceedToPay = () => {
    const orderId = `ORD${Math.floor(Math.random() * 1000000)}`;
    const orderDetails = {
      orderId,
      cart,
      totalPrice,
      pointsDeduction,
      shippingCharge,
    };
    const orders = JSON.parse(localStorage.getItem("orders")) || [];
    orders.push(orderDetails);
    localStorage.setItem("orders", JSON.stringify(orders));
    localStorage.removeItem("cart");
    window.location.href = "/order-success";
  };

  return (

    <div className="container">
          <div className="row">
            {/* Side Card */}
            <div className="col-lg-2 mt-5 side-card text-center align-self-top">
              <div className="sticky-filter mt-4">
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
    
        {/* Main Content */}
        <div className="container col-lg-8 mt-2">
          <h1 className="text-center my-4">Review Your Order</h1>

          {cart.length === 0 ? (
            <div className="empty-message text-center">
              <img
                src="/images/empty-cart.png"
                className="empty-cart-image img-fluid"
                alt="Empty Cart"
              />
              <h2>Your cart is empty.</h2>
            </div>
          ) : (
            <>
              {/* Order Items */}
              <div>
                <h3>Cart Items</h3>
                {cart.map((item, index) => (
                  <div key={index} className="cake-card d-flex justify-content-between align-items-center mb-3">
                    <img src={item.image} className="cake-img" alt={item.name} />
                    <div>
                      <h5>{item.name}</h5>
                      <p>Quantity: {item.quantity}</p>
                      <p>Rs. {item.price * item.quantity}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Payment Summary */}
              <div className="mt-4">
                <h3>Payment Summary</h3>
                <p>Items Price: ₹{cart.reduce((total, item) => total + item.price * item.quantity, 0)}</p>
                <p>Shipping Charge: ₹{shippingCharge}</p>
                <div>
                  <input
                    type="checkbox"
                    id="useRewardPoints"
                    checked={usePoints}
                    onChange={toggleRewardPointsUsage}
                  />
                  <label htmlFor="useRewardPoints">Use Reward Points ({availablePoints} points available)</label>
                </div>
                {usePoints && (
                  <div>
                    <p>Points Deduction: ₹{pointsDeduction}</p>
                  </div>
                )}
                <h5>Total Price: ₹{totalPrice}</h5>
              </div>

              <button className="btn btn-success mt-3" onClick={proceedToPay}>
                Proceed to Pay
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Review;
