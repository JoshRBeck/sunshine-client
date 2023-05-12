import { AuthContext } from "../context/auth.context";
import { useState, useEffect, useContext } from "react";
import axios from "axios";

function ProfilePage() {
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
