import BackButton from "../assets/BackButton.png";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import WhiteWine from "../assets/white-wine.png";
import RedWine from "../assets/red-wine.png";
import Rose3 from "../assets/Rose4";
import location from "../assets/location.png";
import grapes from "../assets/grapes.png";
import cards from "../assets/cards.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faTrash } from '@fortawesome/free-solid-svg-icons';
import { useSearchParams } from "react-router-dom";

function WineListPage(props) {
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get("query");

  const handleDelete = (wineId) => {
    // Delete logic goes here
  };

  const DeleteButton = ({ wineId }) => {
    const handleDeleteClick = () => {
      handleDelete(wineId);
    };
    return (
      <button onClick={handleDeleteClick}>
        <FontAwesomeIcon icon={faTrash} className="delete-icon" />
      </button>
    );
  };

  return (
    <div className="WineListCard_Container">
      <div className="Heading_Container">
        <div className="wine-list-and-button">
          <a href="/">
            <img src={BackButton} alt="GoBack" style={{ marginRight: '25px', paddingLeft: '15px' }} />
          </a>
          <h1>WINE LIST</h1>
        </div>
        <div>
          <Link to={"/addwine"}><FontAwesomeIcon icon={faPlus} className="add-icon" /></Link>
        </div>
      </div>
      {props.wines.map((wine) => (
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
          <div>
          <DeleteButton wineId={wine._id} onDelete={handleDelete} />
          </div>
          <div className="WineDetails">
            <h2>
              <Link to={`/wine-list/${wine._id}`}>{wine.name} </Link>
            </h2>
            <p className="wine-list-text">
              <img src={grapes} alt="Wine Type" className="wine-list-card-icons" />
              Type: <b>{wine.type}</b>
            </p>
            <p className="wine-list-text">
              <img src={cards} alt="Wine Variety" className="wine-list-card-icons" />
              Variety: <b>{wine.variety}</b>
            </p>
            <p className="wine-list-text">
              <img src={location} alt="Wine Region" className="wine-list-card-icons" />
              Region: <b>{wine.region}</b>
            </p>
          </div>
          <div className="WineImage">
            {wine.type === "White" && <img className="Wine" src={WhiteWine} alt="White Wine" />}
            {wine.type === "Red" && <img className="Wine" src={RedWine} alt="Red Wine" />}
            {wine.type === "Rosé" && <img className="Wine" src={Rose3} alt="Rosé Wine" />}
          </div>
        </div>
      ))}
      <div className="WineListCard">
        <></>
      </div>
    </div>
  );
}

export default WineListPage;
