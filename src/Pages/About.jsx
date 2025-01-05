import React from "react";
import { useNavigate } from "react-router-dom";
import "./About.css"; 

const About = () => {
  const navigate = useNavigate();

  const handleFormSubmit = (event) => {
    event.preventDefault();
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const number = document.getElementById("number").value;
    const message = document.getElementById("message").value;

    if (!name || !email || !number || !message) {
      alert("Please fill out all fields.");
      return;
    }

    alert(`Thank you, ${name}! Your message has been submitted.`);
    event.target.reset(); // Reset the form
  };

  const redirectToFrenchies = () => {
    navigate("/frenchies"); // Navigate to the Frenchies page
  };

  return (
    <div className="container">
      <h1 className="text-center text-danger mt-4 mb-4">
        <b>About Us</b>
      </h1>
      <div className="col-md-12 banner">
        <img className="w-100 h-75" src="../images/about-bakery.jpg" alt="" />
      </div>

      <div className="a">
        <section className="row content mt-5">
          <div className="col-lg-6 col-md-6 px-5 p-0 align-self-center">
            <p className="fs-5">
              Welcome to The Cake Heaven, where we specialize in delivering
              freshly baked, delicious cakes right to your door. Our wide range
              includes classic flavors like chocolate and vanilla, as well as
              specialty options such as red velvet all made with the finest
              ingredients for exceptional taste.
            </p>
            <p className="fs-5">
              Whether it's a birthday, anniversary, or any special occasion, we
              offer customization options to personalize your cake, ensuring it
              arrives fresh and beautifully decorated, ready to make your
              celebrations sweeter.
            </p>
          </div>
          <div className="col-lg-6 col-md-6 pr-5 p-0">
            <img
              className="img-fluid w-100 about-img"
              src="../images/cake.jpeg"
              alt=""
            />
          </div>
        </section>

        <section className="row content mb-0">
          <div className="col-lg-6 col-md-6 pl-5 p-0">
            <img
              className="img-fluid w-100 about-img"
              src="../images/fssai.jpeg"
              alt=""
            />
          </div>
          <div className="col-lg-6 col-md-6 px-5 p-0 align-self-center">
            <p className="fs-5">
              What makes us unique is our quick delivery service without
              compromising on quality. You can count on us to get your cake to
              you promptly and reliably, all at an affordable price. Plus, as a
              FSSI certified company, we prioritize food safety and hygiene in
              every cake we bake.
            </p>
          </div>
        </section>

        <div className="col-md-12 mt-5 p-0">
          <video width="100%" height="500" controls autoPlay loop>
            <source src="../images/V1.mp4" type="video/mp4" />
            <source src="movie.ogg" type="video/ogg" />
          </video>
        </div>

        {/* Contact Form */}
        <div className="contact1" id="contact1Div">
          <div className="container-xxl bg-white p-0">
            <div className="container-xxl py-5 px-0">
              <div className="row g-0">
                <div className="col-md-6">
                  <div className="video">
                    <button
                      type="button"
                      className="btn-play"
                      onClick={() =>
                        window.open(
                          "https://videocdn.cdnpk.net/videos/17ba2ee7-57c8-43a6-8229-78094e0e0d2d/horizontal/previews/watermarked/large.mp4",
                          "_blank"
                        )
                      }
                    >
                      <span></span>
                    </button>
                  </div>
                </div>
                <div className="col-md-6 bg-dark d-flex align-items-center">
                  <div className="p-5">
                    <h1 className="text-white mb-4">
                      Contact Us For Any Queries
                    </h1>
                    <form onSubmit={handleFormSubmit}>
                      <div className="row g-3">
                        <div className="col-md-6">
                          <input
                            type="text"
                            className="form-control"
                            id="name"
                            placeholder="Your Name"
                          />
                        </div>
                        <div className="col-md-6">
                          <input
                            type="tel"
                            className="form-control"
                            id="number"
                            placeholder="Mobile No"
                          />
                        </div>
                        <div className="col-md-6">
                          <input
                            type="email"
                            className="form-control"
                            id="email"
                            placeholder="Your Email"
                          />
                        </div>
                        <div className="col-md-6">
                          <input
                            type="text"
                            className="form-control"
                            id="datetime"
                            placeholder="Date & Time"
                          />
                        </div>
                        <div className="col-12">
                          <textarea
                            className="form-control"
                            placeholder="Special Request"
                            id="message"
                            style={{ height: "100px" }}
                          ></textarea>
                        </div>
                        <div className="col-12">
                          <button
                            className="btn btn-primary w-100 py-3"
                            type="submit"
                            style={{ backgroundColor: "#D90166" }}
                          >
                            Submit
                          </button>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="contact2">
          <div className="contact3">
            <h4>
              <b>Contact Us For Frenchies</b>
            </h4>
          </div>
          <div className="contact4">
            <button
              type="button"
              className="btn btn-danger mb-2 bg-danger fs-5"
              onClick={redirectToFrenchies}
            >
              <b> Click Here </b>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
