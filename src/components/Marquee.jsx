import React from "react";
import "./Marquee.css"; // Import the CSS for styling

const Marquee = () => {
  return (
    <div className="marquee border-bottom">
      <div className="track">
        <div className="content">
          {Array(30)
            .fill("Fresh-Bakes")
            .map((text, index) => (
              <span key={index}>{text} </span>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Marquee;
