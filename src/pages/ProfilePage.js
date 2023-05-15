import { AuthContext } from "../context/auth.context";
import { useState, useEffect, useContext } from "react";
import axios from "axios";

function ProfilePage() {

    const { user, setUser } = useState("")

    const apiURL = "http://localhost:3000/api/sunshine";

    const getUser = () => {

        axios
            .get(apiURL)
            .then((response) => {
                const oneUser = response.data;
                setUser(oneUser);
            })
            .catch((error) => console.log(error));
    };

    useEffect(() => {
        getUser();
    }, []);

    return (
        <div className="ProfilePage">
            <h1>Profile Page</h1>
            {user && (
                <>
                    <p>Hello {user.name}, welcome back!</p>
                    <h2>Username: {user.name}</h2>
                    <img src={user.image} alt="User" />
                    <p>E-Mail: {user.email}</p>
                </>
            )}
            <form>
                <label for="description">About me:</label>
                <textarea name="description" id="description" rows="4" cols="20">
                </textarea>
            </form>

  // const {user, setUser} = useState(null)

  // const apiURL = "http://localhost:3000/api/sunshine";

  // const getUser = () => {

  //     axios
  //       .get(apiURL)
  //       .then((response) => {
  //           const oneUser = response.data;
  //           setUser(oneUser);
  //         })
  //       .catch((error) => console.log(error));
  //   };

  //   useEffect(()=> {
  //     getUser();
  //   }, [] );

  const { user } = useContext(AuthContext);


            <div className="wine-preferences">
                <h1>Wine Preferences</h1>

                <h2 className="profileLabels">Wine type:</h2>
                <form>
                    <label for="wine-type">Choose a preferred wine type</label>
                    <select name="wine-type" id="wine-type">
                        <option value="red">Red</option>
                        <option value="white">White</option>
                        <option value="rosé">Rosé</option>
                    </select>
                </form>

                <h2>Wine Region</h2>
                <form>
                    <label for="wine-region">Choose a preferred wine region</label>
                    <select name="wine-region" id="wine-region">
                        <option value="napa-valley">Napa Valley</option>
                        <option value="marlborough">Marlborough</option>
                        <option value="bordeaux">Bordeaux</option>
                        <option value="burgundy">Burgundy</option>
                        <option value="barossa-valley">Barossa Valley</option>
                        <option value="mendoza">Mendoza</option>
                        <option value="california">California</option>
                        <option value="mosel">Mosel</option>
                        <option value="alsace">Alsace</option>
                        <option value="friuli-venezia-giulia">Friuli-Venezia Giulia</option>
                        <option value="tuscany">Tuscany</option>
                        <option value="rioja">Rioja</option>
                        <option value="chianti-classico">Chianti Classico</option>
                        <option value="cotes-du-rhone">Côtes du Rhône</option>
                        <option value="condrieu">Condrieu</option>
                        <option value="stellenbosch">Stellenbosch</option>
                        <option value="gavi">Gavi</option>
                        <option value="rias biaxas">Rías Baixas</option>
                        <option value="piedmont">Piedmont</option>
                        <option value="colchagua-valley">Colchagua Valley</option>
                        <option value="hunter-valley">Hunter Valley</option>
                        <option value="veneto">Veneto</option>
                        <option value="gavi">Provence</option>
                    </select>
                </form>

                <h2>Wine style</h2>
                <form>
                    <label for="wine-variety">Choose a preferred wine style</label>
                    <select name="wine-variety" id="wine-variety">
                        <option value="chardonnay">Chardonnay</option>
                        <option value="sauvignon-blanc">Sauvignon Blanc</option>
                        <option value="cabernet-sauvignon">Cabernet Sauvignon</option>
                        <option value="merlot">Merlot</option>
                        <option value="pinot-noir">Pinot Noir</option>
                        <option value="malbec">Malbec</option>
                        <option value="riesling">Riesling</option>
                        <option value="gewürztraminer">Gewürztraminer</option>
                        <option value="pinot-grigio-Pinot-gris">Pinot Grigio/Pinot Gris</option>
                        <option value="sangiovese">Sangiovese</option>
                        <option value="tempranillo">Tempranillo</option>
                        <option value="grenache-garnacha">Grenache/Garnacha</option>
                        <option value="viognier">Viognier</option>
                        <option value="chenin-blanc">Chenin Blanc</option>
                        <option value="cortese">cortese</option>
                        <option value="albariño">Albariño</option>
                        <option value="moscato">Moscato</option>
                        <option value="carmenere">Carmenere</option>
                        <option value="sémillon">Sémillon</option>
                    </select>
                </form>
            </div>
        </div>
    )

  return (
    <div className="ProfilePage">
      <h1>Profile Page</h1>
      {user && (
        <div className="UserInformation">
          <p>
            Hello{" "}
            {`${user.name[0].toUpperCase()}${user.name.slice(
              1,
              user.name.length
            )}`}
            , welcome back!
          </p>
          <h3>
            Username:{" "}
            {`${user.name[0].toUpperCase()}${user.name.slice(
              1,
              user.name.length
            )}`}
          </h3>
          {/* <img src={user.image} alt="User"/> */}
          <h3>E-Mail: {user.email}</h3>
        </div>
      )}
      <form>
        <div class="form-group">
          <label className="UserDescription" for="exampleFormControlTextarea1">About me:</label>
          <textarea
            class="form-control"
            id="exampleFormControlTextarea1"
            rows="3"
          ></textarea>
        </div>
      </form>

      <div className="wine-preferences">
        <h1>Wine Preferences</h1>
        <br />
        <br />
        <form>
          <h2>Wine type:</h2>
          <select class="form-select" aria-label="Default select example">
            <option selected>Choose a preferred wine type</option>
            <option value="red">Red</option>
            <option value="white">White</option>
            <option value="rosé">Rosé</option>
          </select>
          <br />
          <br />
          <h2>Wine region:</h2>
          <select class="form-select" aria-label="Default select example">
            <option selected>Choose a preferred wine region</option>
            <option value="italy">Italy</option>
            <option value="spain">Spain</option>
            <option value="france">France</option>
            <option value="portugal">Portugal</option>
            <option value="germany">Germany</option>
          </select>
          <br />
          <br />
          <h2>Wine style:</h2>
          <select class="form-select" aria-label="Default select example">
            <option selected>Choose a preferred wine style</option>
            <option value="dry">Dry</option>
            <option value="sweet">Sweet</option>
            <option value="sparkling">Sparkling</option>
          </select>
          <h2>Wine attributes</h2>
          <select class="form-select" aria-label="Default select example">
            <option selected>Choose a preferred wine attribute</option>
            <option value="savoury">Savoury</option>
            <option value="bitter">Bitter</option>
            <option value="age">Age</option>
            <option value="hightAlcohol">High alcohol</option>
          </select>
        </form>
      </div>
    </div>
  );

}

export default ProfilePage;
