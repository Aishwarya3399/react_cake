import React, { useState, useEffect } from 'react';

const ByFlavor = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [visibleItems, setVisibleItems] = useState(4);

  const items = [
    { src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQE9HywyOV36fbC8AU_R-lwFWM964pfmytDXA&s', title: 'Chocolate', path: '/CakeList' },
    { src: 'https://img.freepik.com/free-photo/strawberry-fruit-cake-fresh-strawberry-wooden-table_176474-2523.jpg?t=st=1736489703~exp=1736493303~hmac=fceee4c1250df91f70d2a9491facc7e192330a05b8009aab346863855105b3e7&w=740', title: 'Vanilla', path: '/CakeList' },
    { src: 'https://mrbrownbakery.com/image/images/GJ7uCwGiteTF24HTWBclkziVTdhpQeZWH23MvQfq.jpeg?p=full', title: 'Red Velvet', path: '/CakeList' },
    { src: 'https://img.freepik.com/free-photo/yummy-cake-table_140725-884.jpg?t=st=1736487571~exp=1736491171~hmac=65ba43d66cb0e5e17df74fe627b8f4c44d4f5086b0085242cc3b164bacddeb20', title: 'Strawberry', path: '/CakeList' },
    { src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQE9HywyOV36fbC8AU_R-lwFWM964pfmytDXA&s', title: 'Fruits', path: '/CakeList' },
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
