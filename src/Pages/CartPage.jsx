import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./CartPage.css";

const CartPage = () => {
  const [cart, setCart] = useState([]);
  const [recommendations] = useState([
    { name: "Birthday Firecracker", price: 50, image: "https://img.freepik.com/free-photo/strawberry-fruit-cake-fresh-strawberry-wooden-table_176474-2523.jpg?t=st=1736489703~exp=1736493303~hmac=fceee4c1250df91f70d2a9491facc7e192330a05b8009aab346863855105b3e7&w=740" },
    { name: "Candles", price: 20, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQE9HywyOV36fbC8AU_R-lwFWM964pfmytDXA&s" },
    { name: "Chocolate Cake", price: 50, image: "https://mrbrownbakery.com/image/images/GJ7uCwGiteTF24HTWBclkziVTdhpQeZWH23MvQfq.jpeg?p=full" },
  ]);
  const [orderFor, setOrderFor] = useState("");
  const [birthDate, setBirthDate] = useState("");

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

  const handleOrderDetailsChange = (e) => {
    const { name, value } = e.target;
    if (name === "orderFor") {
      setOrderFor(value);
    } else if (name === "birthDate") {
      setBirthDate(value);
    }
  };

  const saveOrderDetails = () => {
    console.log("Order Details Saved", { orderFor, birthDate });
  };

  const { itemsPrice, totalPrice } = calculateOrderSummary();

  return (
    <div className="pb-5 pt-2 col-lg-12 px-3 container">
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
                <div
                  key={index}
                  className="cake-card d-flex justify-content-between align-items-center mb-3"
                >
                  <img
                    src={item.image}
                    alt={item.name}
                    className="cake-img"
                    onError={(e) => {
                      e.target.src = "/images/fallback.jpg"; // Replace with your fallback image path
                    }}
                  />
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
                  <button
                    className="btn btn-danger"
                    onClick={() => removeFromCart(index)}
                  >
                    Remove
                  </button>
                </div>
              ))}
            </>
          )}

          {/* Recommended Items */}
          <div id="recommendations" className="mt-5">
            <h4 className="text-center">Recommended Items</h4>
            <div
              className="row d-flex justify-content-center"
              style={{ gap: "15px" }}
            >
              {recommendations.map((item, index) => (
                <div
                  key={index}
                  className="col-md-3 text-center rec-card mb-3 d-flex flex-column align-items-center"
                  style={{ maxWidth: "200px" }}
                >
                  <img
                    src={item.image}
                    alt={item.name}
                    className="cake-img img-fluid"
                    style={{ height: "150px", objectFit: "cover" }}
                    onError={(e) => {
                      e.target.src = "/images/fallback.jpg"; // Replace with your fallback image path
                    }}
                  />
                  <div className="pt-2" style={{ textAlign: "center" }}>
                    <h5 style={{ fontSize: "16px", margin: "5px 0" }}>
                      {item.name}
                    </h5>
                    <p style={{ margin: "5px 0" }}>₹{item.price}</p>
                  </div>
                  <button
                    className="btn btn-primary mb-2"
                    style={{ marginTop: "auto", width: "100%" }}
                    onClick={() => addRecommendationToCart(index)}
                  >
                    Add to Cart
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Order Details and Summary */}
        <div className="col-lg-2 border">
          <div className="order-summary p-3">
            <h4>Order For</h4>
            <input
              type="text"
              name="orderFor"
              value={orderFor}
              onChange={handleOrderDetailsChange}
              placeholder="Enter recipient's name"
            />
            <input
              type="date"
              name="birthDate"
              value={birthDate}
              onChange={handleOrderDetailsChange}
            />
            <button className="btn btn-primary" onClick={saveOrderDetails}>
              Save Details
            </button>

            <h4>Order Summary</h4>
            <p>Items Price: ₹{itemsPrice}</p>
            <p>Shipping Charge: ₹{shippingCharge}</p>
            <h5>Total Price: ₹{totalPrice}</h5>
            <button
              className="btn btn-primary"
              onClick={() => (window.location.href = "/review")}
            >
              Proceed to Review
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartPage;
