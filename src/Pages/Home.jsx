import React from "react";
import StoryContainer from "../components/StoryContainer";
import '../Pages/Home.css'; // Make sure you define the styles in Home.css
import BannerSlider from "../components/BannerSlider";
import UserSatisfaction from "../components/UserSatisfaction";
import WhatWeDo from "../components/WhatWeDo";
import TrendingCakes from "../components/TrendingCakes";
import UniqueCakes from "../components/UniqueCakes";
import ByType from "../components/ByType";
import ByOccasion from "../components/ByOccasion";
import ByFlavor from "../components/ByFlavor";
import Testimonial from "../components/Testimonial";



const Home = () => {
  return (
    <div className="home">
      <StoryContainer />
      <BannerSlider />
      <UserSatisfaction />
      <WhatWeDo />
      <TrendingCakes />
      <UniqueCakes />
      <ByType />
      <ByOccasion />
      <ByFlavor />
      <Testimonial />
     </div>
  );
};

export default Home;


