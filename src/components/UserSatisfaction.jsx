import React from "react";

const UserSatisfaction = () => {
  return (
    <div
      className="col-md-12 col-lg-12 pt-4 pb-4 mt-5"
      style={{ backgroundColor: "#ffabc7" }}
    >
      <div className="d-flex justify-content-evenly align-items-center">
        <h3 className="user-satisfaction">
          <i className="fa-solid fa-truck mx-2 fa-1x"></i>100% On Time Delivery
        </h3>
        <h3 className="user-satisfaction">
          <i className="fa-solid fa-cake-candles mx-2 fa-1x"></i>100% Fresh And
          Hygienic
        </h3>
        <h3 className="user-satisfaction">
          <i className="fas fa-certificate mx-2 fa-1x"></i>FSSAI Certified
        </h3>
      </div>
    </div>
  );
};

export default UserSatisfaction;
