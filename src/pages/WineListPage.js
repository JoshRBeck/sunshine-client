import BackButton from "../assets/BackButton.png";
import { useState, useEffect } from "react"
import { Link } from "react-router-dom"

function WineListPage(props) {

  return (
    <div className="WineListCard_Container">
      <div className="Heading_Container">
        <a href="/profile">
          <img src={BackButton} alt="GoBack" />
        </a>
        <h2>SUNSHINE</h2>
      </div>
      <div clasName="WineListCard">
        <></>
      </div>
    </div>
  );
}

export default WineListPage;
