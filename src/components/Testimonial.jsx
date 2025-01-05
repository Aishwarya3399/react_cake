import React from "react";
import OwlCarousel from "react-owl-carousel";
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import "./Testimonial.css"

const Testimonial = () => {
  const options = {
    loop: true,
    margin: 30,
    nav: false,
    dots: true,
    autoplay: true,
    autoplayTimeout: 3000,
    responsive: {
      0: { items: 1 },
      576: { items: 2 },
      768: { items: 3 },
      992: { items: 3 },
    },
  };

  return (
    <div className="col-md-12 col-lg-12 my-5 wow fadeInUp">
      {/* Testimonial Start */}
      <div className="container-xxl py-5">
        <div className="container">
          <div className="text-center">
            <h1 className="mb-5">Our Clients Say!!!</h1>
          </div>
          <OwlCarousel className="owl-carousel testimonial-carousel" {...options}>
            <div className="testimonial-item bg-transparent border rounded p-4">
              <i className="fa fa-quote-left fa-2x text-primary mb-3"></i>
              <p className="testimonial-item-p">"Strawberry cake was fantastic!"</p>
              <div className="d-flex align-items-center">
                <img
                  className="img-fluid flex-shrink-0 rounded-circle"
                  src="img/testimonial-3.jpg"
                  alt="Bob White"
                  style={{ width: "50px", height: "50px" }}
                />
                <div className="ps-3">
                  <h5 className="mb-1">Bob White</h5>
                  <small>Rating: ★★★★☆</small>
                </div>
              </div>
            </div>
            <div className="testimonial-item bg-transparent border rounded p-4">
              <i className="fa fa-quote-left fa-2x text-primary mb-3"></i>
              <p className="testimonial-item-p">
                "Red Velvet cake was delicious and moist."
              </p>
              <div className="d-flex align-items-center">
                <img
                  className="img-fluid flex-shrink-0 rounded-circle"
                  src="img/testimonial-4.jpg"
                  alt="Alice Brown"
                  style={{ width: "50px", height: "50px" }}
                />
                <div className="ps-3">
                  <h5 className="mb-1">Alice Brown</h5>
                  <small>Rating: ★★★★★</small>
                </div>
              </div>
            </div>
            <div className="testimonial-item bg-transparent border rounded p-4">
              <i className="fa fa-quote-left fa-2x text-primary mb-3"></i>
              <p className="testimonial-item-p">"Absolutely loved the vanilla cake!"</p>
              <div className="d-flex align-items-center">
                <img
                  className="img-fluid flex-shrink-0 rounded-circle"
                  src="img/testimonial-2.jpg"
                  alt="John Doe"
                  style={{ width: "50px", height: "50px" }}
                />
                <div className="ps-3">
                  <h5 className="mb-1">John Doe</h5>
                  <small>Rating: ★★★★☆</small>
                </div>
              </div>
            </div>
            <div className="testimonial-item bg-transparent border rounded p-4">
              <i className="fa fa-quote-left fa-2x text-primary mb-3"></i>
              <p className="testimonial-item-p">
                "The best chocolate cake I've ever had!"
              </p>
              <div className="d-flex align-items-center">
                <img
                  className="img-fluid flex-shrink-0 rounded-circle"
                  src="img/testimonial-1.jpg"
                  alt="Jane Smith"
                  style={{ width: "50px", height: "50px" }}
                />
                <div className="ps-3">
                  <h5 className="mb-1">Jane Smith</h5>
                  <small>Rating: ★★★★★</small>
                </div>
              </div>
            </div>
          </OwlCarousel>
        </div>
      </div>
      {/* Testimonial End */}
    </div>
  );
};

export default Testimonial;
