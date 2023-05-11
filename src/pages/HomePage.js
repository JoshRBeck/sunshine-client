import SunShine from "../assets/sunshine.png"
import WarmSunset from "../assets/warmSunset.png"
import WinterSnow from "../assets/winerSnow.png"
import Raining from "../assets/raining.png"
import Fish from "../assets/fish.png"
import Beef from "../assets/beef.png"
import Excitement from "../assets/excitement.png"
import Romance from "../assets/romance.png"

function HomePage() {
    return (
        <div className="wine-list">
        <div className="wine-list-intropage">
            <h1><span className="first-span">THE</span><span className="second-span">WINELIST</span></h1>
            <input className="Searchbar" type="search" id="site-search" name="site-search" placeholder="Search for a wine"/>
        </div>
            <div className="main-wine-preferences">
            <div>
                <h2>Weather Wines</h2>
                <a href="/wine-list"><img src={SunShine} alt="Sunshine"/></a>
                <a href="/wine-list"><img src={WarmSunset} alt="Warmsunset"/></a>
                <a href="/wine-list"><img src={WinterSnow} alt="WinterSnow"/></a>
                <a href="/wine-list"><img src={Raining} alt="Raining"/></a>
            </div>
            <div>
                <h2>Food pairings</h2>
                <a href="/wine-list"><img src={Fish} alt="Fish"/></a>
                <a href="/wine-list"><img src={Beef} alt="Beef"/></a>
                
            </div>
            <div>
                <h2>Mood</h2>
                <a href="/wine-list"><img src={Excitement} alt="Excitement"/></a>
                <a href="/wine-list"><img src={Romance} alt="Romance"/></a>
            </div>


            </div>
        </div>
    )
}

export default HomePage