import { useState, useEffect } from "react"
import { useParams, Link } from "react-router-dom"

function WineListDetails(props) {
    const [foundWine, setFoundWine] = useState(null)

    const { wineId } = useParams()

    useEffect(() => {
        const wine = props.wines.find(wineObj => {
          return wineObj._id === wineId
        })
    
        if (wine) {
          setFoundWine(wine)
        }
      }, [wineId])

    return (
        <div class="WineList_Details">
            <h1>Wine Details</h1>
            {!foundWine && <h3>Wine not found!</h3>}

            {foundWine && (
        <>
          <h2>{foundWine.name}</h2>
          <h3>Type: {foundWine.type}</h3>
          <p>{foundWine.variety}</p>
          <p>{foundWine.region}</p>
          <Link to="/wine-list">Back</Link>
        </>
      )}

        </div>
    )
}

export default WineListDetails