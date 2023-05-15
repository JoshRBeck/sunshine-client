import React from "react";
import { Link } from "react-router-dom";
import houseWhite from "../assets/houseWhite.png";
import profileIcon from "../assets/Profile Icon.png";
import searchIconWhite from "../assets/searchIconwhite.png"
import whiteWineBottle from "../assets/White Wine bottle.png"
import starIcon from "../assets/WhiteStar.png"

function Footer() {
  return (
    <div className="footer-bar">
      <Link to="/">
        <img src={houseWhite} alt="house-white" style={{ maxHeight: '30px' }} />
      </Link>
      <Link to="/search">
        <img src={searchIconWhite} alt="search-icon" style={{ maxHeight: '30px' }} />
      </Link>
      <Link to="/favorites">
        <img src={starIcon} alt="star-icon" style={{ maxHeight: '30px' }} />
      </Link>
      <Link to="/wine-list">
        <img src={whiteWineBottle} alt="White Wine" style={{ maxHeight: '30px' }} />
      </Link>
      <Link to="/profile">
        <img src={profileIcon} alt="profile" style={{ maxHeight: '30px' }} />
      </Link>
    </div>
  );
}

export default Footer;

