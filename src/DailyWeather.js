import React from "react";
import "./styles.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSun, faCloud } from "@fortawesome/free-solid-svg-icons";

import Chart from './Chart'

const DailyWeather = () => {
  const dailyWeatherReport = [
    {
      time: "Now",
      icon: <FontAwesomeIcon icon={faSun} className="hourly-fa-icon" />,
      degree: "27",
    },
    {
      time: "11:00",
      icon: <FontAwesomeIcon icon={faSun} className="hourly-fa-icon" />,
      degree: "28",
    },
    {
      time: "12:00",
      icon: <FontAwesomeIcon icon={faCloud} className="hourly-fa-icon" />,
      degree: "28",
    },
    {
      time: "13:00",
      icon: <FontAwesomeIcon icon={faCloud} className="hourly-fa-icon" />,
      degree: "29",
    },
    {
      time: "14:00",
      icon: <FontAwesomeIcon icon={faSun} className="hourly-fa-icon" />,
      degree: "30",
    },
    {
      time: "15:00",
      icon: <FontAwesomeIcon icon={faSun} className="hourly-fa-icon" />,
      degree: "29",
    },
    {
      time: "16:00",
      icon: <FontAwesomeIcon icon={faSun} className="hourly-fa-icon" />,
      degree: "29",
    },
    {
      time: "17:00",
      icon: <FontAwesomeIcon icon={faCloud} className="hourly-fa-icon" />,
      degree: "28",
    },
  ];
  return (
    <div className="current-weather">
      <div className="row-section">
        <div className="main-weather">
          <h2>Upcoming Hours</h2>
          <div className="weather-details">
            <div className="daily-report">
              {dailyWeatherReport.map((item) => (
                <div className="hourly-report">
                  <div className="hourly-time">{item.time}</div>
                  <div className="hourly-icon">{item.icon}</div>
                  <div className="degree-celsius">{item.degree}&#176;</div>
                </div>
              ))}
            </div>
          </div>
          <div>
              <Chart />
            </div>
        </div>
      </div>
    </div>
  );
};

export default DailyWeather;
