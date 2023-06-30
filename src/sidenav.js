import React  from 'react';
import tower from "./images/tower.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGreaterThan, faSun, faPaperPlane, faLessThan, faSquarePlus } from "@fortawesome/free-solid-svg-icons";

const imgStyle = {
  position: "absolute",
  marginTop: "155px"
};

const SideNav = () => {
  return (
    <div className="left-container">
      <div className="left-top-info">
        <div style={{margin: "49px 0px 30px 4px"}}>
          <FontAwesomeIcon icon={faSquarePlus} style={{fontSize: '25px'}}/>
        </div>
        <div style={{ display: "flex"}}>
          <div className='left-content'>
            <FontAwesomeIcon icon={faPaperPlane} />
            <span className='left-text' style={{marginLeft: "5px"}}>
              Chennai INDIA
            </span>
          </div>
          
          <div className='right-content'>
            <FontAwesomeIcon icon={faSun} style={{ color: "#FFFFFF" }} />
            <span style={{marginLeft: "5px"}}>07:32</span>
          </div>
          
        </div>
        <div style={{ display: "flex", }}>
        <div className='left-content'>
            
          <span className='left-text' style={{marginLeft: "20px"}}>
            Today 30 June
          </span>
          </div>
          <div className='right-content' >
            <FontAwesomeIcon icon={faSun} style={{ color: "#FFFFFF" }} />
            <span style={{marginLeft: "5px"}} >17:32</span>
          </div>
        </div>
      </div>
      <div className='left-weather-status'>
        <div style={{ marginRight: "50px", fontSize: "14px", paddingTop: "28px" }}>
          <FontAwesomeIcon icon={faLessThan} />
        </div>
        <div>27&#176;</div>
        <div style={{ marginLeft: "50px", fontSize: "14px", paddingTop: "28px" }}>
          <FontAwesomeIcon icon={faGreaterThan} />
        </div>
      </div>
      <div className='weather-status' style={{textAlign: 'center', margin: "10px 0 0 100px", color:"#FFF"}}> 
        <FontAwesomeIcon icon={faSun} />
        <span style={{marginLeft: "5px"}}>Sunny</span>
      </div>
      <div style={imgStyle}>
        <img src={tower} style={{width: "230px"}} />
      </div>
    </div>
  );
};
export default SideNav;
