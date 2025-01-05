import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './Wishlist.css';

const Wishlist = () => {
  const [wishlist, setWishlist] = useState(
    JSON.parse(localStorage.getItem('wishlist')) || []
  );

  useEffect(() => {
    // Keep the wishlist updated in localStorage whenever it changes
    localStorage.setItem('wishlist', JSON.stringify(wishlist));
  }, [wishlist]);

  const removeFromWishlist = (index) => {
    const updatedWishlist = [...wishlist];
    updatedWishlist.splice(index, 1);
    setWishlist(updatedWishlist);
  };

  const addToCart = (index) => {
    const cake = wishlist[index];
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    const existingItemIndex = cart.findIndex((c) => c.id === cake.id);

    if (existingItemIndex > -1) {
      cart[existingItemIndex].quantity += 1;
    } else {
      cake.quantity = 1;
      cart.push(cake);
    }

    localStorage.setItem('cart', JSON.stringify(cart));
    removeFromWishlist(index); // Optionally remove the item from the wishlist after adding to the cart
  };

  return (
    <div className="pb-5 pt-2 col-lg-12 px-3">
      <div className="row">
        <div className="col-lg-2 mt-5 side-card text-center align-self-top">
          <div className="sticky-filter mt-4">
            <Link className="nav-link active mt-4 mx-2 mb-3" to="/profile">
              My Account
            </Link>
            <a className="nav-link mt-3 mx-2 mb-3" href="/orders">
              My Orders
            </a>
            <Link className="nav-link mt-3 mx-2 mb-3" to="/wishlist">
              My Wishlist
            </Link>
            <Link className="nav-link mt-3 mx-2 mb-3" to="/wallet">
              My Wallet
            </Link>
            <a
              className="nav-link mt-3 mx-2 mb-4"
              href="../Address_Page/manage-address.html"
            >
              Manage Address
            </a>
          </div>
        </div>
        <div className="container col-lg-6 text-center">
          <h1 className="fw-bold">My Wishlist</h1>
          {wishlist.length === 0 ? (
            <div className="empty-message text-center" id="empty-message">
              <img
                src="../images/preview.png"
                className="empty-cart-image img-fluid"
                alt="Empty Cart"
              />
              <h3>There are no items in your wishlist.</h3>
            </div>
          ) : (
            <div id="wishlistItems" className="container row gx-0 justify-content-center my-4">
              {wishlist.map((cake, index) => (
                <div key={index} className="d-flex border m-1 justify-content-between wishlist-card">
                  <img
                    src={cake.image || '../images/default-cake.jpg'} // Fallback image
                    className="cake-img border"
                    alt={cake.name}
                  />
                  <div className="p-1">
                    <p className="card-text fs-5 fw-bold mb-2 pt-2">{cake.name}</p>
                    <p className="card-text mb-1">
                      {cake.weight}, {cake.eggOrEggless},
                    </p>
                    <p className="card-text mb-0">
                      Rs. {cake.price}, {cake.rating}{' '}
                      <span className="text-warning fa fa-star"></span>
                    </p>
                  </div>
                  <div className="px-4">
                    <button className="btn btn-sm btn-primary mx-2" onClick={() => addToCart(index)}>
                      Add to Cart
                    </button>
                    <button className="btn btn-sm btn-danger" onClick={() => removeFromWishlist(index)}>
                      Remove
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Wishlist;
