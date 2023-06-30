import React  from 'react';
import "./styles.css";
import iitMadras from "./images/iitMadras.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEllipsis
} from "@fortawesome/free-solid-svg-icons";
const Header = () => {
  return (
    <div className="header-section">
      <div className="header-left-section">
        <div className="welcome-text">
          <b>Welcome Back IIT Madras!</b>
        </div>
        <div className="description">
          Check out todays whether Information
        </div>
      </div>
      <div className="header-right-section">
        <FontAwesomeIcon icon={faEllipsis} style={{fontSize: "14px", marginTop: "15px", marginRight: "15px"}}/>
        <img className="profile-logo" src={iitMadras} />
      </div>
    </div>
  );
};
export default Header;
