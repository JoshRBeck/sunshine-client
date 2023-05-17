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
    const [search, setSearch] = useState("");

    const navigate = useNavigate();

    const [searchParams, setSearchParams] = useSearchParams();
    const name = searchParams.get("name");

    function handleSearch(e) {
        setSearch(e.target.value);
    }

    function handleSubmit(e) {
        e.preventDefault();
        setSearchParams({ name: search });

        const wineToNavigate = wines.find((wine) => {
            return wine.name.toLowerCase().includes(search.toLowerCase());
        });

        // Check if a matching wine is found
        if (wineToNavigate) {
            navigate(`/wine-list/${wineToNavigate.id}`);
        } else {
            // Handle the case where no matching wine is found
            console.log("Wine not found");
        }
    }
    useEffect(() => {
        const fetchedWines = [
          {
            name: "",
            type: "",
            attributes: {
              acidity: "",
              sweetness: "",
              alcohol: "",
              age: "",
              structure: "",
              finish: "",
              tannins: "",
              fruitLevel: ""
            },
            variety: "",
            region: ""
          }
        ];
      
        setWines(fetchedWines);
      }, []);
      
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
                        <h1 className="homeTitle"><span className="first-span">THE</span><span className="second-span">WINELIST</span></h1>
                    </div>
                    <div>
                        {/* <input " type="search" id="site-search" name="site-search" placeholder="Search for a wine" /> */}
                        <form onSubmit={handleSubmit} className="search-form">
                            <div className="search-bar">
                                <input value={search} onChange={handleSearch} className="Searchbar" />
                                {/* <input type="image" src={searchIcon} alt="search" className="search-icon" /> */}
                            </div>
                        </form>


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