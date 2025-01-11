// Importing required modules and components
import React, { useState, useEffect } from "react";
import Card from "./Card";
import "./WhatWeDo.css";

const WhatWeDo = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    // Simulate fetching data
    const fetchData = async () => {
      setTimeout(() => {
        setItems([
          {
            name: "Item 1",
            link: "/cakelist",
            image:
              "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQE9HywyOV36fbC8AU_R-lwFWM964pfmytDXA&s",
            title: "Cakes",
          },
          {
            name: "Item 2",
            link: "/cakelist",
            image:
              "https://mrbrownbakery.com/image/images/GJ7uCwGiteTF24HTWBclkziVTdhpQeZWH23MvQfq.jpeg?p=full",
            title: "Cup-Cake",
          },
          {
            name: "Item 3",
            link: "/cakelist",
            image:
              "https://img.freepik.com/free-photo/strawberry-fruit-cake-fresh-strawberry-wooden-table_176474-2523.jpg?t=st=1736489703~exp=1736493303~hmac=fceee4c1250df91f70d2a9491facc7e192330a05b8009aab346863855105b3e7&w=740",
            title: "Pastry",
          },
          {
            name: "Item 4",
            link: "/cakelist",
            image:
              "https://img.freepik.com/free-photo/yummy-cake-table_140725-884.jpg?t=st=1736487571~exp=1736491171~hmac=65ba43d66cb0e5e17df74fe627b8f4c44d4f5086b0085242cc3b164bacddeb20",
            title: "Desserts",
          },
        ]);
      }, 1000);
    };

    fetchData();
  }, []);

  if (!items.length) {
    return <div className="loading-spinner text-center mt-5">Loading...</div>;
  }

  return (
    <div className="container-fluid">
      <div className="what-we-do">
        <h1 className="text-center text-danger mb-4 mt-5">WHAT WE DO</h1>
        <div className="magic-spacing">
          <div className="row justify-content-center">
            {items.map((item, index) => (
              <div key={index} className="col-md-4 col-sm-6">
                <Card link={item.link} image={item.image} title={item.title} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhatWeDo;