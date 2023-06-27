import SunShine from "../assets/sunshine.png"
import WarmSunset from "../assets/warmSunset.png"
import WinterSnow from "../assets/winerSnow.png"
import Raining from "../assets/raining.png"
import Fish from "../assets/fish.png"
import Beef from "../assets/beef.png"
import Excitement from "../assets/excitement.png"
import Romance from "../assets/romance.png"
import { useState, useEffect } from "react"
import { useNavigate, useSearchParams } from "react-router-dom"

function HomePage() {
  const [wines, setWines] = useState([]);
  const [filteredWines, setFilteredWines] = useState([]);
  const [search, setSearch] = useState("");
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();
  const name = searchParams.get("name", "type", "variety");

  //This handles the search and records everything entered into the search bar
  function handleSearch(e) {
    setSearch(e.target.value);
    console.log(e);
  }

  //This function takes the event value from the handlesearch function and uses it to navigate to the desired results
  function handleSubmit(e) {
    e.preventDefault();
    navigate(`/wine-list?query=${search}`);
    console.log(search);
  }

  useEffect(() => {
    setFilteredWines(wines.filter((e) => e.type === "white"))
  }, [])

  useEffect(() => {
    if (!name) {
      setWines(wines);
    } else {
      const filteredWines = wines.filter((wine) => {
        return wine.name.toLowerCase().includes(name.toLowerCase());
      });
      setWines(filteredWines);
    }
  }, [name, wines]);

  return (
    <div className="wine-list">
      <div className="wine-list-container">
        <div className="wine-list-intropage">
          <div>
            <h1 className="home-title"><span className="first-span">THE</span><span className="second-span">WINELIST</span></h1>
          </div>
          <div>
            {/* <input " type="search" id="site-search" name="site-search" placeholder="Search for a wine" /> */}
            <form className="search-form" onSubmit={handleSubmit}>
              <div className="search-bar">
                <input
                  value={search}
                  className="search-bar"
                  placeholder="Search for a wine"
                  onChange={handleSearch}
                />
              </div>
            </form>
            {/* <input type="image" src={searchIcon} alt="search" className="search-icon" /> */}

            {wines.map((wine) => {
              return (
                <div key={wine.id} className="wine">
                  <h3>{wine.name}</h3>
                  <p>{wine.technologies}</p>
                </div>
              );
            })}
          </div>
        </div>
        <div className="main-wine-preferences">
          <div>
            <h2 className="home-headings">Weather Wines</h2>
            <a href="/wine-list"><img src={SunShine} alt="Sunshine" /></a>
            <a href="/wine-list"><img src={WarmSunset} alt="Warmsunset" /></a>
            <a href="/wine-list"><img src={WinterSnow} alt="WinterSnow" /></a>
            <a href="/wine-list"><img src={Raining} alt="Raining" /></a>
          </div>
          <div>
            <h2 className="home-headings">Food pairings</h2>
            <a href="/wine-list"><img src={Fish} alt="Fish" /></a>
            <a href="/wine-list"><img src={Beef} alt="Beef" /></a>

          </div>
          <div>
            <h2 className="home-headings">Mood</h2>
            <a href="/wine-list"><img src={Excitement} alt="Excitement" /></a>
            <a href="/wine-list"><img src={Romance} alt="Romance" /></a>
          </div>

        </div>
      </div>
    </div>
  )
}

export default HomePage