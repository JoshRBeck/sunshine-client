import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import WhiteWine from "../assets/white-wine.png"
import RedWine from "../assets/red-wine.png"
import RoseWine from "../assets/Rose4"
import location from "../assets/location.png"
import grapes from "../assets/grapes.png"
import cards from "../assets/cards.png"
import backButtonWhite from "../assets/Back Button White.png"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit } from '@fortawesome/free-solid-svg-icons';

function useFilteredWineList(wines, wineId) {
  const [foundWine, setFoundWine] = useState(null);

  useEffect(() => {
    if (wines && wines.length > 0) {
      const wine = wines.find((wineObj) => wineObj._id === wineId);
      console.log(wine);
      setFoundWine(wine ?? null);
    }
  }, [wines, wineId]);

  return foundWine
}

function WineListDetails({ wines }) {
  // const [foundWine, setFoundWine] = useState(null);
  const { wineId } = useParams();
  const foundWine = useFilteredWineList(wines, wineId)

  // useEffect(() => {
  //   if (wines && wines.length > 0) {
  //     const wine = wines.find((wineObj) => wineObj._id === wineId);
  //     console.log(wine);
  //     setFoundWine(wine ?? null);
  //   }
  // }, [wines, wineId]);

  return (
    <div className="WineList_Details">
      {!foundWine && <h3>Wine not found!</h3>}
      {foundWine && (
        <>
          <div className={`top-section ${foundWine.type.toLowerCase()}-wine`}>
            <div className="image-and-button">
              <div className="buttons-details-page">
                <Link to="/wine-list"><img src={backButtonWhite} alt="white button" className="back-button-details" /></Link>
                <Link to={"/editwine"}><FontAwesomeIcon icon={faEdit} className="edit-icon" /></Link>

              </div>
              <div className="wine-image">
                {foundWine.type === "White" &&
                  <img src={WhiteWine} className="wine-image" alt="White Wine" />
                }
                {foundWine.type === "Red" &&
                  <img src={RedWine} className="wine-image" alt="Red Wine" />
                }
                {foundWine.type === "Rosé" &&
                  <img src={RoseWine} className="wine-image" alt="Rosé Wine" />
                }
              </div>
            </div>
            <div className="wine-info">
              <h1>{foundWine.name}</h1>
              <p><img src={grapes} className="grapes" alt="grapes"></img>Type: {foundWine.type}</p>
              <p><img src={location} className="location" alt="location"></img>Region: {foundWine.region}</p>
              <p><img src={cards} className="cards" alt="cards"></img>Variety: {foundWine.variety}</p>
            </div>
          </div>

          <div className="bottom-section">
            <div className="wine-attributes">
              <div className="left-column">
                {foundWine.attributes.slice(0, 4).map((attribute, index) => {
                  const attributeValue =
                    typeof attribute.value === 'string'
                      ? attribute.value.charAt(0).toUpperCase() + attribute.value.slice(1)
                      : attribute.value;
                  return (
                    <div className="attribute-container" key={index}>
                      <span className="wine-attribute-one">{attribute.name.charAt(0).toUpperCase() + attribute.name.slice(1)}</span>
                      <span className="attribute-value">{attributeValue}</span>
                    </div>
                  );
                })}
              </div>
              <div className="right-column">
                {foundWine.attributes.slice(4).map((attribute, index) => {
                  const attributeValue =
                    typeof attribute.value === 'string'
                      ? attribute.value.charAt(0).toUpperCase() + attribute.value.slice(1)
                      : attribute.value;
                  return (
                    <div className="attribute-container" key={index}>
                      <span className="wine-attribute-two">{attribute.name.charAt(0).toUpperCase() + attribute.name.slice(1)}</span>
                      <span className="attribute-value">{attributeValue}</span>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default WineListDetails;
