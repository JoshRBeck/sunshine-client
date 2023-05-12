import WineCard1 from "../assets/wine-card1.png";
import WineCard2 from "../assets/wine-card2.png";
import WineCard3 from "../assets/wine-card3.png";
import WineCard4 from "../assets/wine-card4.png";
import BackButton from "../assets/BackButton.png";

function WineListPage() {

  return (
    <div className="WineListCard_Container">
      <div className="Heading_Container">
        <a href="/profile">
          <img src={BackButton} alt="GoBack" />
        </a>
        <h2>SUNSHINE</h2>
      </div>
      <div clasName="WineListCard">
        <img src={WineCard1} alt="Wine" />
      </div>
      <div clasName="WineListCard">
        <img src={WineCard2} alt="Wine" />
      </div>
      <div clasName="WineListCard">
        <img src={WineCard3} alt="Wine" />
      </div>
      <div clasName="WineListCard">
        <img src={WineCard4} alt="Wine" />
      </div>
    </div>
  );
}

export default WineListPage;
