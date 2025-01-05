import React from "react";

const Card = ({ link, image, title }) => {
  return (
    <a href={link} className="col-sm-12 col-md-6 col-lg-3 col-xl-3 mb-3">
      <div className="item">
        <div className="item-img">
          <img src={image} className="card-img-top" alt={title} />
        </div>
        <div className="border card-title-div">
          <span>
            <h5 className="card-title pt-2">{title}</h5>
          </span>
        </div>
      </div>
    </a>
  );
};

export default Card;
