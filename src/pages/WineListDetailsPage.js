import React, { useState, useEffect, useRef } from "react";
import { useParams, Link } from "react-router-dom";
import Chart from "chart.js/auto";
import WhiteWine from "../assets/white-wine.png"
import RedWine from "../assets/red-wine.png"
import RoseWine from "../assets/rose-wine.png"

function WineListDetails(props) {
  const [foundWine, setFoundWine] = useState(null);
  const { wineId } = useParams();
  const chartRef = useRef(null);
  const chartInstanceRef = useRef(null);

  useEffect(() => {
    if (props.wines && props.wines.length > 0) {
      const wine = props.wines.find((wineObj) => wineObj._id === wineId);

      if (wine) {
        setFoundWine(wine);
      }
    }
  }, [props.wines, wineId]);

  useEffect(() => {
    if (foundWine) {
      console.log("Variety Score:", foundWine.varietyScore);
      console.log("Type Score:", foundWine.typeScore);
      console.log("Region Score:", foundWine.regionScore);

      const chartOptions = {
        scales: {
          r: {
            beginAtZero: true,
          },
        },
      };

      const chartData = {
        labels: ["Variety", "Type", "Region"],
        datasets: [
          {
            label: "Attributes",
            data: [
              foundWine.varietyScore,
              foundWine.typeScore,
              foundWine.regionScore,
            ],
            backgroundColor: [
              "rgba(255, 99, 132, 0.5)",
              "rgba(54, 162, 235, 0.5)",
              "rgba(75, 192, 192, 0.5)",
            ],
            borderColor: [
              "rgba(255, 99, 132, 1)",
              "rgba(54, 162, 235, 1)",
              "rgba(75, 192, 192, 1)",
            ],
            borderWidth: 1,
          },
        ],
      };

      const ctx = chartRef.current.getContext("2d");

      if (chartInstanceRef.current) {
        // Destroy the previous chart instance
        chartInstanceRef.current.destroy();
      }

      chartInstanceRef.current = new Chart(ctx, {
        type: "polarArea",
        data: chartData,
        options: chartOptions,
      });
    }
  }, [foundWine]);

  return (
    <div className="WineList_Details">
      {!foundWine && <h3>Wine not found!</h3>}
      {foundWine && (
        <>
          <div className="top-section">
            <div className="wine-image">
              {foundWine.type === "White" &&
                <img src={WhiteWine} className="wine-image" alt="White Wine" />
              }
              {foundWine.type === "Red" &&
                <img src={RedWine} className="wine-image" alt="Red Wine" />
              }
              {foundWine.type === "Rosé" &&
                <img src={RoseWine} className="wine-image" alt="Rosé Wine" />
              }
            </div>
            <div className="wine-info">
              <h2>{foundWine.name}</h2>
              <p>Type: {foundWine.type}</p>
              <p>Variety: {foundWine.variety}</p>
              <p>Region: {foundWine.region}</p>
            </div>
          </div>

          <div className="bottom-section">
            <canvas ref={chartRef} width="400" height="400" />
          </div>

          <Link to="/wine-list">Back</Link>
        </>
      )}
    </div>
  );
};

export default WineListDetails;
