import BackButton from "../assets/BackButton.png";
import { Link } from "react-router-dom";
import WhiteWine from "../assets/white-wine.png";
import RedWine from "../assets/red-wine.png";
import Rose3 from "../assets/Rose4";
import location from "../assets/location.png";
import grapes from "../assets/grapes.png";
import cards from "../assets/cards.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

function WineListPage(props) {
  // const handleDelete = (wineId) => {
  //   // Delete logic goes here
  // };

  // const DeleteButton = ({ wineId }) => {
  //   const handleDelete = () => {
  //     handleDelete(wineId);
  //   };
  // };

  return (
    <div className="wine-list-card_Container">
      <div className="heading-container">
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
      {props.wines && props.wines.map((wine) => (
        <div
       className={
  wine.type === "White"
    ? "white-wine one-wine"
    : wine.type === "Red"
      ? "red-wine one-wine"
      : wine.type === "Rosé"
        ? "rose-wine one-wine"
        : "one-wine"
}

          key={wine._id}>
          <div>
            {/* <button onClick={handleDelete}>
              <FontAwesomeIcon icon={faTrash} className="delete-icon" />
            </button> */}
          </div>
          <div className="wine-details">
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
          <div className="wine-image">
            {wine.type === "White" && <img className="Wine" src={WhiteWine} alt="White Wine" />}
            {wine.type === "Red" && <img className="Wine" src={RedWine} alt="Red Wine" />}
            {wine.type === "Rosé" && <img className="Wine" src={Rose3} alt="Rosé Wine" />}
          </div>
        </div>
      ))}
      <div className="wine-list-card">
      </div>
    </div>
  );
}

export default WineListPage;
