import { useState, useEffect } from "react";
import axios from "axios"

function ProfilePage() {
    const {user, setUser} = useState("")
    
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

      useEffect(()=> {
        getUser();
      }, [] );

    return (
   <div className="ProfilePage">
    <h1>Profile Page</h1>
    {user && (
    <>
    <p>Hello {user.name}, welcome back!</p>
    <h2>Username: {user.name}</h2>
    <img src={user.image} alt="User"/>
    <p>E-Mail: {user.email}</p>
    </>
    )}
    <form>
    <label for="description">About me:</label>
    <textarea name="description" id="description" rows="4" cols="20">
    </textarea>
    </form>



    <div className="wine-preferences">
        <h1>Wine Preferences</h1>

        <h2>Wine type:</h2>
        <form>
            <label for="wine-type">Choose a preferred wine type</label>
            <select name="wine-type" id="wine-type">
                <option value="red">Red</option>
                <option value="white">White</option>
                <option value="rosé">Rosé</option>
                <option value="savoury">Savoury</option>
                <option value="bitter">Bitter</option>
            </select>
        </form>

        <h2>Wine Region</h2>
        <form>
        <label for="wine-region">Choose a preferred wine region</label>
            <select name="wine-region" id="wine-region">
                <option value="italy">Italy</option>
                <option value="spain">Spain</option>
                <option value="france">France</option>
                <option value="portugal">Portugal</option>
                <option value="germany">Germany</option>
            </select>
        </form>

        <h2>Wine style</h2>
        <form>
        <label for="wine-style">Choose a preferred wine style</label>
            <select name="wine-region" id="wine-region">
                <option value="dry">Dry</option>
                <option value="sweet">Sweet</option>
                <option value="sparkling">Sparkling</option>
            </select>
        </form>
    </div>
   </div>
    )
}

export default ProfilePage