import React from "react";

import Current from "../Current/Current";
import Forecast from "../Forecast/Forecast";

import "./main.css";

export default function Main({ weatherInfo, location, date, contentState }) {
  const dates = [];
  for (let i = 0; i < 6; i++) {
    dates[i] = (date[1] + i + 1) % 7;
  }

  if (contentState === "weather")
    return (
      <div className="Main">
        <div className="Main__currentWeather">
          <Current
            weatherInfo={weatherInfo}
            location={location}
            date={date[0][date[1]]}
          />
        </div>
        <div className="Main__Trend">Next few days..</div>
        <div className="Main__forecast">
          {dates.map((dayIndex, index) => {
            console.log(index, dayIndex);
            return (
              <Forecast
                key={index}
                weatherInfo={weatherInfo.daily[index]}
                date={date[0][dayIndex]}
              />
            );
          })}
        </div>
      </div>
    );
  else if (contentState === "warning")
    return (
      <div className="Main Main--warning">
        <h2 className="Main__no-location">No location found</h2>
        <p className="Main__no-location-paragraph">
          Try informing city/town and state/country
        </p>
        <p className="Main__no-location-paragraph">Ex: Dallas, Texas</p>
        <p className="Main__no-location-paragraph">Ex: Tokyo, Japan </p>
      </div>
    );
  else if (contentState === "blank") return <div className="Main"></div>;
}
