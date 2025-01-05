import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import cakes from "../data/Cakes"; // Assuming you have cake data
import "./SProduct.css";

const SProduct = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [cake, setCake] = useState(null);
  const [mainImage, setMainImage] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const selectedCake = cakes.find((item) => item.id === parseInt(id, 10));
    if (selectedCake) {
      setCake(selectedCake);
      setMainImage(selectedCake.image);
    } else {
      navigate("/not-found");
    }
  }, [id, navigate]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        (prevIndex + 1) % [cake.image, cake.image1, cake.image2, cake.image3].length
      );
    }, 3000); // Auto-scroll every 3 seconds
    return () => clearInterval(interval);
  }, [cake]);

  useEffect(() => {
    if (cake) {
      const images = [cake.image, cake.image1, cake.image2, cake.image3];
      setMainImage(images[currentIndex]);
    }
  }, [currentIndex, cake]);

  const handlePrevClick = () => {
    setCurrentIndex(
      (prevIndex) =>
        (prevIndex - 1 + [cake.image, cake.image1, cake.image2, cake.image3].length) %
        [cake.image, cake.image1, cake.image2, cake.image3].length
    );
  };

  const handleNextClick = () => {
    setCurrentIndex(
      (prevIndex) =>
        (prevIndex + 1) % [cake.image, cake.image1, cake.image2, cake.image3].length
    );
  };

  const handleThumbnailClick = (index) => {
    setCurrentIndex(index);
    setMainImage([cake.image, cake.image1, cake.image2, cake.image3][index]);
  };

  if (!cake) return <div>Loading...</div>;

  return (
    <div className="container p-4">
      <div className="row justify-content-center">
        {/* Main Image Section */}
        <div className="col-md-6 position-relative">
          <div className="main-image-container">
            <img
              src={mainImage}
              alt={cake.name}
              className="img-fluid main-image rounded-3"
            />
            {/* Navigation Arrows */}
            <button
              className="arrow left-arrow"
              onClick={handlePrevClick}
            >
              &#60;
            </button>
            <button
              className="arrow right-arrow"
              onClick={handleNextClick}
            >
              &#62;
            </button>
          </div>

          {/* Thumbnails */}
          <div className="thumbnail-container d-flex justify-content-between mt-3">
            {[cake.image, cake.image1, cake.image2, cake.image3].map(
              (img, index) => (
                <img
                  key={index}
                  src={img}
                  alt={`Thumbnail ${index + 1}`}
                  className={`thumbnail img-thumbnail ${
                    currentIndex === index ? "active" : ""
                  }`}
                  onClick={() => handleThumbnailClick(index)}
                />
              )
            )}
          </div>
        </div>

        {/* Cake Details Section */}
        <div className="col-md-6">
          <h1>{cake.name}</h1>
          <p>{cake.description}</p>
          <form>
            <div className="form-group mb-3">
              <label htmlFor="productWeight">Weight</label>
              <select className="form-control" id="productWeight">
                <option value="0.5">0.5 kg</option>
                <option value="1">1 kg</option>
                <option value="2">2 kg</option>
                <option value="3">3 kg</option>
                <option value="4">4 kg</option>
                <option value="5">5 kg</option>
              </select>
            </div>
            <div className="form-group mb-3">
              <label htmlFor="productFlavor">Flavor</label>
              <select className="form-control" id="productFlavor">
                <option>Chocolate</option>
                <option>Vanilla</option>
                <option>Strawberry</option>
                <option>Butterscotch</option>
                <option>Blueberry</option>
              </select>
            </div>
            <div className="form-group mb-3">
              <label htmlFor="productEgg">Egg/Eggless</label>
              <select className="form-control" id="productEgg">
                <option value="withEgg">With Egg</option>
                <option value="eggless">Eggless</option>
              </select>
            </div>
            <div className="form-group mb-3">
              <label htmlFor="productMessage">Message</label>
              <input
                type="text"
                className="form-control"
                placeholder="Enter your message here"
              />
            </div>
            <div className="form-group mb-3">
              <label htmlFor="productPrice">Price: Rs. {cake.price}</label>
            </div>
            <button type="button" className="btn btn-lg btn-danger">
              Buy Now
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SProduct;
