import React from 'react';
import "./styles.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBarsProgress,
  faDroplet,
  faRainbow,
  faRulerHorizontal,
  faSliders,
  faSnowflake,
  faSun,
  faTemperature0,
  faThermometer,
  faWater
} from "@fortawesome/free-solid-svg-icons";
import { faWind } from "@fortawesome/free-solid-svg-icons";
import { faGauge } from "@fortawesome/free-solid-svg-icons";
import { faCloudRain } from "@fortawesome/free-solid-svg-icons";

const Box = () => {
  const weatherStatus = [{
    name: 'good',
    count: 100
  },
  {
    name: 'noraml',
    count: 80
  },
  {
    name: 'bad',
    count: 20
  }]
  const feels = [{
    "name": [0, 25, 50],
    "count": 70
  } 
  ]
  const uvindex = [
    {
      "name": "0 - 2",
      "count": 100
    },
    {
      "name": "3 - 5",
      "count": 60
    },
    {
      "name": "6 - 7",
      "count": 0
    },
    {
      "name": "8 - 10",
      "count": 0
    },
    {
      "name": "11+",
      "count": 0
    }
  ]
  const precipitation = [
    {
      "name": "0",
      "count": 100
    },
    {
      "name": "10",
      "count": 60
    },
    {
      "name": "20",
      "count": 30
    },
    {
      "name": "30",
      "count": 0
    },
    {
      "name": "40",
      "count": 0
    },
    {
      "name": "50",
      "count": 0
    },
    {
      "name": "60",
      "count": 0
    },
    {
      "name": "70",
      "count": 0
    },
    {
      "name": "80",
      "count": 0
    },
    {
      "name": "90",
      "count": 0
    }
    

  ]
  const rain = [
    {
      "name": [0,25,50,75,100],
      "count": 60
    },]
  return (
    
      <div className="current-weather">
        <h4 style={{marginLeft: "15px"}}>More details of today's weather</h4>
        <div className="row-section">
          <div className="individual-weather">
            <div className="weather-details">
              <div className="weather-title">
                <h2 >Humidity</h2>
              </div>

              <div className="weather-icon">
                <FontAwesomeIcon icon={faDroplet} className="weather-fa-icon" />
              </div>
            </div>
            <h2 style={{ textAlign: 'center', marginTop: "-10px" }}>87% Bad</h2>
            <div className="weather-status">
              {weatherStatus.map((item, index) => (

                <div className="status-info" key={index}>
                  <div className="status-title">
                    {item.name}
                    <div className="progress-bar">
                      <div className="progress-status" style={{ width: `${item.count}%` }}></div>
                    </div>
                  </div>
                </div>
              )
              )}
            </div>
          </div>
          <div className="individual-weather">
            <div className="weather-details">
              <div className="weather-title">
                <h2>Wind</h2>
              </div>
              <div className="weather-icon">
                <FontAwesomeIcon icon={faWind} className="weather-fa-icon" />
              </div>
            </div>
            <h2 style={{ textAlign: 'center', marginTop: "-10px" }}>8 km/h</h2>
            <div className="weather-status">
              {weatherStatus.map((item, index) => (
                <div className="status-info" key={index}>
                  <div className="status-title">
                    {item.name}
                    <div className="progress-bar">
                      <div className="progress-status" style={{ width: `${item.count}%` }}></div>
                    </div>
                  </div>
                </div>
              )
              )}
            </div>
          </div>
          <div className="individual-weather">
            <div className="weather-details">
              <div className="weather-title">
                <h2>Precipitation</h2>
              </div>
              <div className="weather-icon">
                <FontAwesomeIcon icon={faCloudRain} className="weather-fa-icon" />
              </div>
            </div>
            <h2 style={{ textAlign: 'center', marginTop: "-10px" }}>1.4 Cm</h2>
            <div className="weather-status">
              {precipitation.map((item, index) => (

                <div className="par-status-info" key={index}>
                  <div className="status-title">
                    {item.name}
                    <div className="progress-bar">
                      <div className="progress-status" style={{ width: `${item.count}%` }}></div>
                    </div>
                  </div>
                </div>
              )
              )}
            </div>
          </div>

          
        </div>

        <div className="row-section">
          <div className="individual-weather">
            <div className="weather-details">
              <div className="weather-title">
                <h2>UV Index</h2>
              </div>
              <div className="weather-icon">
                <FontAwesomeIcon icon={faSun} className="weather-fa-icon" />
              </div>
            </div>
            <h2 style={{ textAlign: 'center', marginTop: "-10px" }}>
              4 <i>medium</i>
            </h2>
            <div className="weather-status">
            <div className='row-section'>
              {uvindex.map((item, index) => (
                
                <div className="uv-status-info" key={index}>
                  <div className="status-title">
                    {item.name}
                    <div className="progress-bar">
                      <div className="progress-status" style={{ width: `${item.count}%` }}></div>
                    </div>
                  </div>
                </div>
               
                
              )
              )}
              </div>
            </div>
          </div>
          <div className="individual-weather">
            <div className="weather-details">
              <div className="weather-title">
                <h2>Feel Like</h2>
              </div>
              <div className="weather-icon">
                <FontAwesomeIcon icon={faTemperature0} className="weather-fa-icon" />
              </div>
            </div>
            <h2 style={{ textAlign: 'center', marginTop: "-10px" }}>30&#176;</h2>
            <div className="weather-status">
            
              {feels.map((item, index) => (

                <div className="weather-status-info" key={index}>
                  <div className="status-title">
                  <div className='row-section'>
                      <div style={{width: `33%`}}>0&#176;</div>
                      <div style={{width: `33%`, textAlign: 'center'}}>25&#176;</div>
                      <div style={{width: `33%`, textAlign: 'right'}}>50&#176;</div>
                    </div>
                    <div className="progress-bar">
                      <div className="progress-status" style={{ width: `${item.count}%` }}></div>
                    </div>
                  </div>
                </div>
              )
              )}
              
            </div>
          </div>
          <div className="individual-weather">
            <div className="weather-details">

              <div className="weather-title">
                <h2>Chance of Rain</h2>
              </div>
              <div className="weather-icon">
                <FontAwesomeIcon icon={faRainbow} className="weather-fa-icon" />
              </div>
            </div>
            <h2 style={{ textAlign: 'center', marginTop: "-10px" }}>42%</h2>
            <div className="weather-status">
              {rain.map((item, index) => (
                <div className="weather-status-info" key={index}>
                  <div className="status-title">
                  <div className='row-section'>
                      {item.name.map((item1, index) => (
                        <div style={{width: `30%`}}>{item1}%</div>
                      )
                      )}
                    </div>
                    <div className="progress-bar">
                      <div className="progress-status" style={{ width: `${item.count}%` }}></div>
                    </div>
                  </div>
                </div>
              )
              )}
            </div>
          </div>

          

        </div>

      </div>
    
  );
};

export default Box;
