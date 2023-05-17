import BackButton from "../assets/BackButton.png";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import WhiteWine from "../assets/white-wine.png";
import RedWine from "../assets/red-wine.png";
import Rose3 from "../assets/Rose4"
import location from "../assets/location.png"
import grapes from "../assets/grapes.png"
import cards from "../assets/cards.png"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faPlus } from '@fortawesome/free-solid-svg-icons';


function WineListPage(props) {
  return (
    <div className="WineListCard_Container">
      <div className="Heading_Container">
        <div>
          <a href="/profile">
            <img src={BackButton} alt="GoBack" />
          </a>
          <h2>WINE LIST</h2>
        </div>
        <div>
          <Link to={"/addwine"}><FontAwesomeIcon icon={faPlus} className="add-icon" /></Link>
        </div>
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
              <p><img src={grapes} alt="Wine Type" />
                Type: <b>{wine.type}</b>
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
              <p><img src={cards} alt="Wine Variety" />
                Variety: <b>{wine.variety}</b>
              </p>
              <p><img src={location} alt="Wine RegioN" />
                Region: <b>{wine.region}</b>
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
                <img className="Wine" src={Rose3} alt="Rosé Wine" />
              )}
            </div>
          </div>
        );
      })}
      <div className="WineListCard">
        <></>
      </div>
    </div>
  );
}

export default WineListPage;