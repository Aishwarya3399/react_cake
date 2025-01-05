import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'; // Import Link for internal routing
import './ByOccasion.css';

const ByOccasion = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [visibleItems, setVisibleItems] = useState(4);

  const items = [
    { src: './images/HCC.jpg', title: 'Birthday', path: '/CakeList' },
    { src: './images/AC.webp', title: 'Anniversary', path: '/CakeList' },
    { src: './images/WC.jpg', title: 'Wedding', path: '/CakeList' },
    { src: './images/C4.jpg', title: 'Baby Shower', path: '/CakeList' },
    { src: './images/EC.jpg', title: 'Engagement', path: '/CakeList' },
    { src: './images/VB.jpg', title: 'Mothers Day', path: '/CakeList' },
    { src: './images/CC1.jpg', title: 'Fathers Day', path: '/CakeList' },
    { src: './images/CB.webp', title: 'Valentines Day', path: '/CakeList' },
    { src: './images/HCC.jpg', title: 'Classic cakes', path: '/CakeList' },
    { src: './images/AC.webp', title: 'Friendships Day', path: '/CakeList' },
    { src: './images/WC.jpg', title: 'New Year', path: '/CakeList' },
    { src: './images/C4.jpg', title: 'Christmas', path: '/CakeList' },
    { src: './images/EC.jpg', title: 'Teachers Day', path: '/CakeList' },
    { src: './images/fwc.jpg', title: 'Fairwell Cakes', path: '/CakeList' },
  ];

  const updateVisibleItems = () => {
    setVisibleItems(window.innerWidth <= 600 ? 1 : 4);
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % items.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + items.length) % items.length);
  };

  useEffect(() => {
    updateVisibleItems();
    window.addEventListener('resize', updateVisibleItems);

    return () => {
      window.removeEventListener('resize', updateVisibleItems);
    };
  }, []);

  const offset = currentIndex * -(100 / visibleItems);

  return (
    <div className="col-md-12 col-lg-12  wow fadeInUp">
      <h1 className="text-center text-danger mb-4">BY OCCASION</h1>

      <div
        className="carousel-container mt-5"
        id="carouselOccasion"
        style={{ position: 'relative' }}
      >
        <div
          className="carousel"
          style={{
            display: 'flex',
            transform: `translateX(${offset}%)`,
            transition: 'transform 0.5s ease',
          }}
        >
          {items.map((item, index) => (
            <div
              className="item"
              key={index}
              style={{
                flex: `0 0 ${100 / visibleItems}%`,
                textAlign: 'center',
                height: '23rem',
                padding: '0 10px',
              }}
            >
              <Link to={item.path || '#'}>
                <div className="px-3 item-cards">
                  <div
                    className="item-img"
                    style={{
                      overflow: 'hidden',
                      borderRadius: '10px 10px 0px 0px',
                    }}
                  >
                    <img
                      src={item.src}
                      className="card-img-top"
                      alt={item.title}
                      style={{
                        transition: 'transform 0.6s',
                        maxHeight: '318px',
                      }}
                    />
                  </div>
                  <div
                    className="border card-title-div"
                    style={{
                      borderRadius: '0px 0px 10px 10px',
                    }}
                  >
                    <h5 className="card-title pt-2">{item.title}</h5>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>

        <button
          className="carousel-control-prev"
          onClick={prevSlide}
          style={buttonStyles}
        >
          &#10094;
        </button>
        <button
          className="carousel-control-next"
          onClick={nextSlide}
          style={buttonStyles}
        >
          &#10095;
        </button>
      </div>
    </div>
  );
};

const buttonStyles = {
  position: 'absolute',
  top: '50%',
  transform: 'translateY(-50%)',
  backgroundColor: 'rgba(0, 0, 0, 0.5)',
  color: 'white',
  border: 'none',
  padding: '10px',
  cursor: 'pointer',
  zIndex: 10,
  width: '40px',
  height: '40px',
};

export default ByOccasion;
