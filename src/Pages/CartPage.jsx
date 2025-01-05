import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./CartPage.css";

const CartPage = () => {
  const [cart, setCart] = useState([]);
  const [recommendations] = useState([
    { name: "Birthday Firecracker", price: 50, image: "/images/HCC.jpg" },
    { name: "Candles", price: 20, image: "/images/CC1.jpg" },
    { name: "Chocolate Cake", price: 50, image: "/images/choclate.webp" },
  ]);
  const shippingCharge = 40;

  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem("cart")) || [];
    setCart(storedCart);
  }, []);

  const updateLocalStorage = (updatedCart) => {
    localStorage.setItem("cart", JSON.stringify(updatedCart));
    setCart(updatedCart);
  };

  const addRecommendationToCart = (index) => {
    const item = recommendations[index];
    const updatedCart = [...cart, { ...item, quantity: 1 }];
    updateLocalStorage(updatedCart);
  };

  const removeFromCart = (index) => {
    const updatedCart = cart.filter((_, i) => i !== index);
    updateLocalStorage(updatedCart);
  };

  const updateQuantity = (index, increment) => {
    const updatedCart = [...cart];
    updatedCart[index].quantity += increment;
    if (updatedCart[index].quantity === 0) updatedCart.splice(index, 1);
    updateLocalStorage(updatedCart);
  };

  const calculateOrderSummary = () => {
    const itemsPrice = cart.reduce(
      (total, item) => total + (item.price * item.quantity || 0),
      0
    );
    return {
      itemsPrice,
      totalPrice: itemsPrice + shippingCharge,
    };
  };

  const { itemsPrice, totalPrice } = calculateOrderSummary();

  return (
    <div className="pb-5 pt-2 col-lg-12 px-3 container ">
      <div className="row">
        {/* Side Card */}
        <div className="col-lg-2 mt-5 side-card text-center align-self-top">
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

        {/* Cart Items */}
        <div className="col-lg-8">
          <h1 className="text-center my-4">Your Cart</h1>
          {cart.length === 0 ? (
            <div className="empty-message">
              <img
                src="/images/empty-cart.png"
                className="empty-cart-image"
                alt="Empty Cart"
              />
              <h2>Your cart is empty.</h2>
            </div>
          ) : (
            <>
              {cart.map((item, index) => (
                <div key={index} className="cake-card d-flex justify-content-between align-items-center mb-3">
                  <img src={item.image} alt={item.name} className="cake-img" />
                  <div>
                    <h5>{item.name}</h5>
                    <p>₹{item.price}</p>
                  </div>
                  <div className="d-flex align-items-center">
                    <button
                      className="btn btn-outline-secondary"
                      onClick={() => updateQuantity(index, -1)}
                    >
                      -
                    </button>
                    <input
                      type="text"
                      value={item.quantity}
                      readOnly
                      className="form-control mx-2 mt-4 text-center"
                      style={{ width: "50px" }}
                    />
                    <button
                      className="btn btn-outline-secondary mx-2"
                      onClick={() => updateQuantity(index, 1)}
                    >
                      +
                    </button>
                  </div>
                  <button className="btn btn-danger" onClick={() => removeFromCart(index)}>
                    Remove
                  </button>
                </div>
              ))}
            </>
          )}

          {/* Recommended Items */}
          <div id="recommendations" className="mt-5">
            <h4 className="text-center">Recommended Items</h4>
            <div className="row">
              {recommendations.map((item, index) => (
                <div key={index} className="col-md-3 text-center rec-card mb-3">
                  <img src={item.image} alt={item.name} className="cake-img img-fluid" />
                  <div className="pt-2">
                    <h5>{item.name}</h5>
                    <p>₹{item.price}</p>
                  </div>
                  <button
                    className="btn btn-primary mb-2"
                    onClick={() => addRecommendationToCart(index)}
                  >
                    Add to Cart
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Order Summary */}
        <div className="col-lg-2 border">
          <div className="order-summary p-3">
            <h4>Order Summary</h4>
            <p>Items Price: ₹{itemsPrice}</p>
            <p>Shipping Charge: ₹{shippingCharge}</p>
            <h5>Total Price: ₹{totalPrice}</h5>
            <button className="btn btn-primary" onClick={() => window.location.href = "/review"}>
              Proceed to Review
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartPage;
