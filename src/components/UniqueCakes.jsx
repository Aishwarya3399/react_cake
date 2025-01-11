import React from "react";
import "bootstrap/dist/css/bootstrap.min.css"; // Ensure Bootstrap is imported
import Card from "./Card";
import "./UniqueCakes.css";

const UniqueCakes = () => {
  const uniqueCakes = [
    {
      id: 1,
      name: "Mouse Cake",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQE9HywyOV36fbC8AU_R-lwFWM964pfmytDXA&s",
      link: "/CakeList",
    },
    {
      id: 2,
      name: "Bomb Cake",
      image: "https://img.freepik.com/free-photo/strawberry-fruit-cake-fresh-strawberry-wooden-table_176474-2523.jpg?t=st=1736489703~exp=1736493303~hmac=fceee4c1250df91f70d2a9491facc7e192330a05b8009aab346863855105b3e7&w=740",
      link: "/CakeList",
    },
    {
      id: 3,
      name: "Chiffon Cake",
      image: "https://img.freepik.com/free-photo/yummy-cake-table_140725-884.jpg?t=st=1736487571~exp=1736491171~hmac=65ba43d66cb0e5e17df74fe627b8f4c44d4f5086b0085242cc3b164bacddeb20",
      link: "/CakeList",
    },
    {
      id: 4,
      name: "Butter Cake",
      image: "https://mrbrownbakery.com/image/images/GJ7uCwGiteTF24HTWBclkziVTdhpQeZWH23MvQfq.jpeg?p=full",
      link: "/CakeList",
    },
  ];

  return (
    <div className="col-md-12 col-lg-12  wow fadeInUp">
      <h1 className="text-center text-danger mb-4">UNIQUE CAKES</h1>
      <div className="col-sm-12 col-md-12 col-lg-12 col-xl-12">
        <div className="magic-spacing">
          <div className="row">
            {uniqueCakes.map((cake) => (
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

export default UniqueCakes;
