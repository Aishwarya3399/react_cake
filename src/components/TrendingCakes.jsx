import React from "react";
import "bootstrap/dist/css/bootstrap.min.css"; // Ensure Bootstrap is imported
import Card from "./Card";
import './TrendingCakes.css';

const TrendingCakes = () => {
  const trendingCakes = [
    {
      id: 1,
      name: "Pinata Cake",
      image: "./images/PC.webp",
      link: "/CakeList",
    },
    {
      id: 2,
      name: "Half Cake",
      image: "./images/HC.jpeg",
      link: "/CakeList",
    },
    {
      id: 3,
      name: "Bomb Cake",
      image: "./images/BC.webp",
      link: "/CakeList",
    },
    {
      id: 4,
      name: "Bento Cake",
      image: "./images/BC1.jpg",
      link: "/CakeList",
    },
  ];

  return (
    <div className="col-md-12 col-lg-12  wow fadeInUp">
      <h1 className="text-center text-danger mb-4">TRENDING CAKES</h1>
      <div className="col-sm-12 col-md-12 col-lg-12 col-xl-12">
        <div className="row">
          {trendingCakes.map((cake) => (
            <Card key={cake.id} link={cake.link} image={cake.image} title={cake.name} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default TrendingCakes;
