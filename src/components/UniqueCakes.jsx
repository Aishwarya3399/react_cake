import React from "react";
import "bootstrap/dist/css/bootstrap.min.css"; // Ensure Bootstrap is imported
import Card from "./Card";
import "./UniqueCakes.css";

const UniqueCakes = () => {
  const uniqueCakes = [
    {
      id: 1,
      name: "Mouse Cake",
      image: "./images/MC2.jpg",
      link: "/CakeList",
    },
    {
      id: 2,
      name: "Bomb Cake",
      image: "./images/BC.webp",
      link: "/CakeList",
    },
    {
      id: 3,
      name: "Chiffon Cake",
      image: "./images/CC3.webp",
      link: "/CakeList",
    },
    {
      id: 4,
      name: "Butter Cake",
      image: "./images/BCC.jpg",
      link: "/CakeList",
    },
  ];

  return (
    <div className="col-md-12 col-lg-12  wow fadeInUp">
      <h1 className="text-center text-danger mb-4">UNIQUE CAKES</h1>
      <div className="col-sm-12 col-md-12 col-lg-12 col-xl-12">
        <div className="row">
          {uniqueCakes.map((cake) => (
            <Card key={cake.id} link={cake.link} image={cake.image} title={cake.name} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default UniqueCakes;
