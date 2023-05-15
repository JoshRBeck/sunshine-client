import BackButton from "../assets/BackButton.png";
import { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import WhiteWine from "../assets/white-wine.png"
import RedWine from "../assets/red-wine.png"
import RoseWine from "../assets/rose-wine.png"

function WineListPage(props) {


  return (
    <div className="WineListCard_Container">
      <div className="Heading_Container">
        <a href="/profile">
          <img src={BackButton} alt="GoBack" />
        </a>
      </div>
      <h2>WINE LIST</h2>
      {wines.map(wine => {
        return (
          <div key={wine._id} className="Onewine">
            {/* <h3>{wine.name}</h3> */}
            <h3><Link to={`/wine-list/${wine._id}`}>{wine.name}</Link></h3>
            <p>Wine type: {wine.type}</p>
            <p>{wine.attributes.name}</p>
            <div>
            {wine.attributes.map(attribute => {
              return (
              <p>{attribute.name}: {attribute.value}</p>
              )
            })}
            </div>
            <p>Wine variety: {wine.variety}</p>
            <p>Wine region: {wine.region}</p>
            

            {wine.type === "white" &&
            <img src={WhiteWine} alt="White Wine"/>
            }
            {wine.type === "red" &&
            <img src={RedWine} alt="Red Wine"/>
            }
            {wine.type === "wine" &&
            <img src={RoseWine} alt="Rosé Wine"/>
            }
          </div>
        )
      })}
      <div clasName="WineListCard">
        <></>
      </div>
    </div>
  );
}

export default WineListPage;
