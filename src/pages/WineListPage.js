import BackButton from "../assets/BackButton.png";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import WhiteWine from "../assets/white-wine.png";
import RedWine from "../assets/red-wine.png";
import RoseWine from "../assets/rose-wine.png";

function WineListPage(props) {
  return (
    <div className="WineListCard_Container">
      <div className="Heading_Container">
        <a href="/profile">
          <img src={BackButton} alt="GoBack" />
        </a>
        <h2>WINE LIST</h2>
      </div>
      {props?.wines?.map((wine) => {
        return (
          <div
            className={
              wine.type === "White"
                ? "WhiteWine OneWine"
                : wine.type === "Red"
                ? "RedWine OneWine"
                : wine.type === "Rosé"
                ? "RoseWine OneWine"
                : "OneWine"
            }
            key={wine._id}
          >
            <div className="WineDetails">
              {/* <h3>{wine.name}</h3> */}
              <h3>
                <Link to={`/wine-list/${wine._id}`}>{wine.name} </Link>
              </h3>
              <p>
                Wine type: <b>{wine.type}</b>
              </p>
              <p>{wine.attributes.name}</p>
              {/* <div>
                {wine.attributes.map((attribute) => {
                  return (
                    <p>
                      {attribute.name}: <b>{attribute.value}</b>
                    </p>
                  );
                })}
              </div> */}
              <p>
                Wine variety: <b>{wine.variety}</b>
              </p>
              <p>
                Wine region: <b>{wine.region}</b>
              </p>
            </div>

            <div className="WineImage">
              {wine.type === "White" && (
                <img className="Wine" src={WhiteWine} alt="White Wine" />
              )}
              {wine.type === "Red" && (
                <img className="Wine" src={RedWine} alt="Red Wine" />
              )}
              {wine.type === "Rosé" && (
                <img className="Wine" src={RoseWine} alt="Rosé Wine" />
              )}
            </div>
          </div>
        );
      })}
      <div clasName="WineListCard">
        <></>
      </div>
    </div>
  );
}

export default WineListPage;