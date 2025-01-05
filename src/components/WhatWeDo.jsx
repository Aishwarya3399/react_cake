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
          { name: "Item 1", link: "/CakeList", image: "./images/AC.webp", title: "Cakes" },
          { name: "Item 2", link: "/CakeList", image: "./images/BC.webp", title: "Cup-Cake" },
          { name: "Item 3", link: "/CakeList", image: "./images/CA.jpg", title: "Pastry" },
          { name: "Item 4", link: "/CakeList", image: "./images/BC.webp", title: "Desserts" },
        ]);
      }, 1000);
    };

    fetchData();
  }, []);

  if (!items.length) {
    return <div className="loading-spinner text-center mt-5">Loading...</div>;
  }

  return (
    <div className="container ">
      <div className="what-we-do">
        <h1 className="text-center text-danger mb-4 mt-5">WHAT WE DO</h1>
        <div className="row">
          {items.map((item, index) => (
            <div key={index} className="col-md-3 col-sm-6 mb-0">
              <Card
                link={item.link}
                image={item.image}
                title={item.title}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WhatWeDo;
