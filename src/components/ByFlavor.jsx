import React, { useState, useEffect } from 'react';

const ByFlavor = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [visibleItems, setVisibleItems] = useState(4);

  const items = [
    { src: './images/CA.webp', title: 'Chocolate', path: '/CakeList' },
    { src: './images/VC.webp', title: 'Vanilla', path: '/CakeList' },
    { src: './images/CH.jpg', title: 'Red Velvet', path: '/CakeList' },
    { src: './images/CC2.jpg', title: 'Strawberry', path: '/CakeList' },
    { src: './images/FC.webp', title: 'Fruits', path: '/CakeList' },
  ];

  const updateVisibleItems = () => {
    setVisibleItems(window.innerWidth <= 600 ? 1 : 4);
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % items.length);
  };

  const prevSlide = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + items.length) % items.length
    );
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
    <div className="col-md-12 col-lg-12 p-5 mt-5 wow fadeInUp">
      <h1 className="text-center text-danger mb-4">BY FLAVOR</h1>

      <div className="carousel-container mt-5" id="carouselFlavor" style={{ position: 'relative' }}>
        <div className="carousel" style={{ display: 'flex', transform: `translateX(${offset}%)`, transition: 'transform 0.5s ease' }}>
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
              <a href={item.path}>
                <div className="px-3 item-cards">
                  <div className="item-img" style={{ overflow: 'hidden', borderRadius: '10px 10px 0px 0px' }}>
                    <img src={item.src} className="card-img-top" alt={item.title} style={{ transition: 'transform 0.6s', maxHeight: '318px' }} />
                  </div>
                  <div className="border card-title-div" style={{ borderRadius: '0px 0px 10px 10px' }}>
                    <h5 className="card-title pt-2">{item.title}</h5>
                  </div>
                </div>
              </a>
            </div>
          ))}
        </div>

        <button className="carousel-control-prev" onClick={prevSlide} style={buttonStyles}>
          &#10094;
        </button>
        <button className="carousel-control-next" onClick={nextSlide} style={buttonStyles}>
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

export default ByFlavor;
