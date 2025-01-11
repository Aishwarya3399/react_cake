import React from "react";

const Footer = () => {
  return (
    <footer className="text-center text-lg-start bg-body-tertiary">
      <section className="d-flex justify-content-center justify-content-lg-center p-4 border-bottom">
        <div className="me-3 d-none d-lg-block">
          <span>Get connected with us on social networks :</span>
        </div>

        <div>
          <a href="#" className="me-4 text-reset">
            <i className="fab fa-facebook-f"></i>
          </a>
          <a href="#" className="me-4 text-reset">
            <i className="fab fa-instagram"></i>
          </a>
          <a href="#" className="me-4 text-reset">
            <i className="fab fa-twitter"></i>
          </a>
          <a href="#" className="me-4 text-reset">
            <i className="fab fa-youtube"></i>
          </a>
        </div>
      </section>

      <section className="border-bottom">
        <div className="container text-center text-md-start pt-5">
          <div className="row mt-3">
            <div className="col-md-3 col-lg-4 col-xl-4 mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-4">
                <i className="fas fa-gem me-3"></i>THE CAKE HEAVEN
              </h6>
              <p>
                "Experience the divine taste of our handcrafted delights at The
                Cake Heaven where every bite is a slice of paradise. Join us in
                celebrating life's sweetest moments!"
              </p>
            </div>

            <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-4">COLLECTIONS</h6>
              <p>
                <a href="/cakelist" className="text-reset">
                  Same Day Cakes
                </a>
              </p>
              <p>
                <a href="/cakelist" className="text-reset">
                  Classic Cakes
                </a>
              </p>
              <p>
                <a href="/cakelist" className="text-reset">
                  Custom Cakes
                </a>
              </p>
              <p>
                <a href="/cakelist" className="text-reset">
                  Cup Cakes
                </a>
              </p>
              <p>
                <a href="/cakelist" className="text-reset">
                  Desserts
                </a>
              </p>
              <p>
                <a href="/cakelist" className="text-reset">
                  Flowers
                </a>
              </p>
              <p>
                <a href="/cakelist" className="text-reset">
                  Anniversary Cakes
                </a>
              </p>
              <p>
                <a href="/cakelist" className="text-reset">
                  Birthday Cakes
                </a>
              </p>
            </div>

            <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-4">QUICK LINKS</h6>
              <p>
                <a href="/about" className="text-reset">Contact Us</a>
              </p>
              <p>
                <a href="/about" className="text-reset">About us</a>
              </p>
              <p>
                <a href="/PrivacyPolicy" className="text-reset">Privacy Policy</a>
              </p>
              <p>
                <a href="/terms" className="text-reset">Terms & Conditions</a>
              </p>
              <p>
                <a href="/shippingpolicy" className="text-reset">Shipping Policy</a>
              </p>
              <p>
                <a href="/Cancellation" className="text-reset">Return & Refund Policy</a>
              </p>
              <p>
                <a href="/faq" className="text-reset">FAQs</a>
              </p>
              <p>
                <a href="/career" className="text-reset">Career</a>
              </p>
            </div>

            <div className="col-md-4 col-lg-3 col-xl-4 mx-auto mb-md-0 mb-4">
              <h6 className="text-uppercase fw-bold mb-4">Contact</h6>
              <p><i className="fas fa-home me-3"></i> Kupwad, Sangli Maharashtra</p>
              <p>
                <i className="fas fa-envelope me-3"></i>
                contact@thecakeheaven.com
              </p>
              <p><i className="fas fa-phone me-3"></i> + 01 234 567 88</p>
              <p><i className="fas fa-print me-3"></i> + 01 234 567 89</p>
            </div>
          </div>
        </div>
      </section>

      <section className="text-center pb-3 pt-3">
        © 2024 Copyright:
        <a className="text-reset fw-bold" href="/">TheCakeHeaven.com</a>
      </section>
    </footer>
  );
};

export default Footer;
