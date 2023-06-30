import React  from 'react';
import Header from "./Header";
import Box from "./box";
import DailyWeather from "./DailyWeather";

const MainNav = () => {
  return (
    <div className="right-container">
      <div className="top-header">
        <Header />
      </div>
      <div className="weather-container">
        <DailyWeather />
      </div>
      <div className="weather-container">
        <Box />
      </div>
      
    </div>
  );
};

export default MainNav;
