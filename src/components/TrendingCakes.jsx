import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Card from "./Card";
import "./TrendingCakes.css";

const TrendingCakes = () => {
  const trendingCakes = [
    {
      id: 1,
      name: "Pinata Cake",
      image: "https://img.freepik.com/free-photo/strawberry-fruit-cake-fresh-strawberry-wooden-table_176474-2523.jpg?t=st=1736489703~exp=1736493303~hmac=fceee4c1250df91f70d2a9491facc7e192330a05b8009aab346863855105b3e7&w=740",
      link: "/CakeList",
    },
    {
      id: 2,
      name: "Half Cake",
      image: "https://img.freepik.com/free-photo/yummy-cake-table_140725-884.jpg?t=st=1736487571~exp=1736491171~hmac=65ba43d66cb0e5e17df74fe627b8f4c44d4f5086b0085242cc3b164bacddeb20",
      link: "/CakeList",
    },
    {
      id: 3,
      name: "Bomb Cake",
      image: "https://mrbrownbakery.com/image/images/GJ7uCwGiteTF24HTWBclkziVTdhpQeZWH23MvQfq.jpeg?p=full",
      link: "/CakeList",
    },
    {
      id: 4,
      name: "Bento Cake",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQE9HywyOV36fbC8AU_R-lwFWM964pfmytDXA&s",
      link: "/CakeList",
    },
  ];

  return (
    <div className="container-fluid col-md-12 col-lg-12">
      <div className="trending-cakes">
        <h1 className="text-center text-danger mb-4 mt-5">TRENDING CAKES</h1>
        <div className="magic-spacing">
          <div className="row">
            {trendingCakes.map((cake) => (
              <div key={cake.id} className="col-md-3 col-sm-6">
                <Card link={cake.link} image={cake.image} title={cake.name} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrendingCakes;
