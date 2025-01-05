import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Modal, Button } from "react-bootstrap";
import cakes from "../data/Cakes"; // Import cake data
import "./CakeList.css"; // Import styles

const CakeList = () => {
  const [filters, setFilters] = useState({
    weight: "any",
    availability: "any",
    priceRange: [200, 5000],
    eggFilter: "any",
    cakeType: "any",
  });
  const [wishlist, setWishlist] = useState(
    JSON.parse(localStorage.getItem("wishlist")) || []
  );
  const [cart, setCart] = useState(
    JSON.parse(localStorage.getItem("cart")) || []
  );
  const [selectedCake, setSelectedCake] = useState(null);
  const navigate = useNavigate();

  // Update localStorage when wishlist or cart changes
  useEffect(() => {
    localStorage.setItem("wishlist", JSON.stringify(wishlist)); // Store entire wishlist
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [wishlist, cart]);

  const applyFilters = () => {
    return cakes.filter((cake) => {
      const matchesWeight =
        filters.weight === "any" || cake.weight === filters.weight;
      const matchesAvailability =
        filters.availability === "any" ||
        cake.availability === filters.availability;
      const matchesPrice =
        cake.price >= filters.priceRange[0] &&
        cake.price <= filters.priceRange[1];
      const matchesEgg =
        filters.eggFilter === "any" || cake.eggOrEggless === filters.eggFilter;
      const matchesCakeType =
        filters.cakeType === "any" || cake.cakeType === filters.cakeType;
      return (
        matchesWeight &&
        matchesAvailability &&
        matchesPrice &&
        matchesEgg &&
        matchesCakeType
      );
    });
  };

  const toggleWishlist = (cake) => {
    const updatedWishlist = wishlist.some((item) => item.id === cake.id)
      ? wishlist.filter((item) => item.id !== cake.id)
      : [...wishlist, cake]; // Add the full cake object
    setWishlist(updatedWishlist);
  };
  
  const openQuickBuyModal = (cake) => {
    setSelectedCake(cake);
    const modal = new window.bootstrap.Modal(
      document.getElementById("quickBuyModal")
    );
    modal.show();
  };

  const addToCart = (cake) => {
    // Retrieve the current cart from localStorage or state
    let currentCart = JSON.parse(localStorage.getItem("cart")) || [];
  
    // Create a unique identifier based on cake ID, flavor, and weight
    const uniqueIdentifier = `${cake.id}-${cake.flavor || 'default'}-${cake.weight}`;
  
    // Check if the cake variant (based on flavor and weight) is already in the cart
    const existingCake = currentCart.find(item => item.uniqueIdentifier === uniqueIdentifier);
  
    if (existingCake) {
      // If the cake variant is already in the cart, increment the quantity
      existingCake.quantity += 1;
      existingCake.totalPrice = existingCake.price * existingCake.quantity; // Update the total price
    } else {
      // Otherwise, add the cake variant with quantity 1 and calculate total price
      const newCake = {
        ...cake,
        uniqueIdentifier,
        quantity: 1,
        totalPrice: cake.price, // Set initial total price as the price of the cake
      };
      currentCart.push(newCake);
    }
  
    // Save the updated cart to localStorage
    localStorage.setItem("cart", JSON.stringify(currentCart));
  
    // Update the cart state if you're using React state
    setCart(currentCart);
  };
  

  const updatePrice = () => {
    if (!selectedCake) return;
    const weight = document.getElementById("modalProductWeight").value;
    const flavor = document.getElementById("modalProductFlavor").value;
    const egg = document.getElementById("modalProductEgg").value;
    const price =
      selectedCake.price * weight; // Adjust based on weight
    document.getElementById("modalProductPrice").innerText = `Rs. ${price}`;
  };

  return (
    <div className="cake-list container-fluid">
      <div className="row">
        {/* Left Filters Section */}
        <div className="col-md-3">
          <div className="filters p-3">
            <h5>Filter Cakes</h5>
            <div className="d-flex flex-column">
              {/* Weight Filter */}
              <div className="form-group mb-3">
                <label htmlFor="weightFilter">Weight</label>
                <select
                  id="weightFilter"
                  className="form-control"
                  value={filters.weight}
                  onChange={(e) =>
                    setFilters({ ...filters, weight: e.target.value })
                  }
                >
                  <option value="any">Any</option>
                  <option value="0.5 kg">0.5 kg</option>
                  <option value="1 kg">1 kg</option>
                  <option value="2 kg">2 kg</option>
                  <option value="5 kg">5 kg</option>
                </select>
              </div>

              {/* Availability Filter */}
              <div className="form-group mb-3">
                <label htmlFor="availabilityFilter">Availability</label>
                <select
                  id="availabilityFilter"
                  className="form-control"
                  value={filters.availability}
                  onChange={(e) =>
                    setFilters({ ...filters, availability: e.target.value })
                  }
                >
                  <option value="any">Any</option>
                  <option value="in_stock">In Stock</option>
                  <option value="out_of_stock">Out of Stock</option>
                </select>
              </div>

              {/* Price Range Filter */}
              <div className="form-group mb-3">
                <label htmlFor="priceRange">
                  Price Range: Rs. {filters.priceRange[0]} - Rs.{" "}
                  {filters.priceRange[1]}
                </label>
                <input
                  type="range"
                  className="form-range"
                  id="priceRange"
                  min="200"
                  max="5000"
                  value={filters.priceRange[1]}
                  onChange={(e) =>
                    setFilters({
                      ...filters,
                      priceRange: [filters.priceRange[0], Number(e.target.value)],
                    })
                  }
                />
              </div>

              {/* Egg or Eggless Filter */}
              <div className="form-group mb-3">
                <label htmlFor="eggFilter">Egg or Eggless</label>
                <select
                  id="eggFilter"
                  className="form-control"
                  value={filters.eggFilter}
                  onChange={(e) =>
                    setFilters({ ...filters, eggFilter: e.target.value })
                  }
                >
                  <option value="any">Any</option>
                  <option value="egg">With Egg</option>
                  <option value="eggless">Eggless</option>
                </select>
              </div>

              {/* Cake Type Filter */}
              <div className="form-group mb-3">
                <label htmlFor="cakeTypeFilter">Cake Type</label>
                <select
                  id="cakeTypeFilter"
                  className="form-control"
                  value={filters.cakeType}
                  onChange={(e) =>
                    setFilters({ ...filters, cakeType: e.target.value })
                  }
                >
                  <option value="any">Any</option>
                  <optgroup label="Layers">
                    <option value="one">One</option>
                    <option value="two">Two</option>
                    <option value="three">Three</option>
                  </optgroup>
                  <optgroup label="Shapes">
                    <option value="square">Square</option>
                    <option value="circle">Circle</option>
                    <option value="heart">Heart</option>
                    <option value="tall">Tall</option>
                  </optgroup>
                  <optgroup label="Flavours">
                    <option value="chocolate">Chocolate</option>
                    <option value="blueberry">Blueberry</option>
                    <option value="pineapple">Pineapple</option>
                    <option value="fresh fruit">Fresh Fruit</option>
                    <option value="red velvet">Red Velvet</option>
                    <option value="vanilla">Vanilla</option>
                    <option value="butterscotch">Butterscotch</option>
                  </optgroup>
                  <optgroup label="Occasions">
                    <option value="birthday">Birthday</option>
                    <option value="anniversary">Anniversary</option>
                    <option value="wedding">Wedding</option>
                    <option value="baby shower">Baby Shower</option>
                    <option value="engagement">Engagement</option>
                    <option value="mothers day">Mother's Day</option>
                    <option value="fathers day">Father's Day</option>
                    <option value="valentines day">Valentine's Day</option>
                    <option value="classic cakes">Classic Cakes</option>
                    <option value="friendships day">Friendship's Day</option>
                  </optgroup>
                </select>
              </div>
            </div>
          </div>
        </div>

    
        {/* Right Cake Cards Section */}
        <div className="col-md-9">
          <div className="row" id="productList">
            {applyFilters().map((cake) => (
              <div
                className="col-md-3 mb-4 mx-4 cake1"
                key={cake.id}
                onClick={() => navigate(`/SProduct/${cake.id}`)}
              >
                <div className="card product-card">
                  <img src={cake.image} alt={cake.name} className="card-img-top" />
                  <span
                    className="wishlist-icon"
                    onClick={(e) => {
                      e.stopPropagation();
                      toggleWishlist(cake);
                    }}
                  >
                    <i
                      className={`fa-heart ${
                        wishlist.some((item) => item.id === cake.id) ? "fas" : "far"
                      }`}
                      style={{
                        color: wishlist.some((item) => item.id === cake.id) ? "red" : "grey",
                        fontSize: "1.5rem",
                      }}
                    ></i>
                  </span>
                  <div className="p-2 d-flex justify-content-between align-items-center">
                    <div className="cake-info">
                      <h6>{cake.name}</h6>
                      <p>Weight: {cake.weight}</p>
                      <p>Price: Rs. {cake.price}</p>
                      <p>
                        Rating: {cake.rating}
                        <span className="text-warning fa fa-star"></span>
                      </p>
                    </div>
                    <button
                      className="btn btn-primary quick-buy-btn"
                      onClick={(e) => {
                        e.stopPropagation();
                        openQuickBuyModal(cake);
                      }}
                    >
                      Quick Buy
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Quick Buy Modal */}
      {selectedCake && (
        <Modal
          show={selectedCake !== null}
          onHide={() => setSelectedCake(null)}
          id="quickBuyModal"
        >
          <Modal.Header closeButton>
            <Modal.Title>Product Description</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div className="modal-product-details">
              {/* Image Section */}
              <img
                src={selectedCake.image}
                alt={selectedCake.name}
                className="img-fluid"
              />

              {/* Description Section */}
              <div>
                <h5>{selectedCake.name}</h5>
                <div>
                  <label>Weight</label>
                  <select
                    id="modalProductWeight"
                    onChange={updatePrice}
                    className="form-control"
                  >
                    <option value="1">1 kg</option>
                    <option value="2">2 kg</option>
                    <option value="5">5 kg</option>
                  </select>
                </div>
                <div>
                  <label>Flavor</label>
                  <select
                    id="modalProductFlavor"
                    className="form-control"
                    onChange={updatePrice}
                  >
                    <option value="chocolate">Chocolate</option>
                    <option value="vanilla">Vanilla</option>
                  </select>
                </div>
                <div>
                  <label>Egg or Eggless</label>
                  <select
                    id="modalProductEgg"
                    className="form-control"
                    onChange={updatePrice}
                  >
                    <option value="eggless">Eggless</option>
                    <option value="egg">Egg</option>
                  </select>
                </div>
                <p id="modalProductPrice">Rs. {selectedCake.price}</p>
              </div>
            </div>
          </Modal.Body>
          <Modal.Footer>
            <Button
              variant="primary"
              onClick={() => {
                addToCart(selectedCake);
                setSelectedCake(null);
              }}
            >
              Buy Now
            </Button>
          </Modal.Footer>
        </Modal>
      )}
    </div>
  );
};



export default CakeList;
