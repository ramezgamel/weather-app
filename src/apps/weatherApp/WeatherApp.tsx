import "./weatherApp.css";
import sunny from "/weatherAppImages/sunny.png";
import cloudy from "/weatherAppImages/cloudy.png";
import snowy from "/weatherAppImages/snowy.png";
import rainy from "/weatherAppImages/rainy.png";
import loader from "/weatherAppImages/loading.gif";
import React, { useEffect, useMemo, useState } from "react";
const apiKey = import.meta.env.VITE_WEATHER_API_KEY;

type WeatherData = {
  name?: string;
  main?: {
    temp?: number;
    humidity?: number;
  };
  weather?: { main?: string }[];
  wind?: {
    speed?: number;
  };
};
const weatherImages = {
  Clear: sunny,
  Clouds: cloudy,
  Snow: snowy,
  Rain: rainy,
  Haze: cloudy,
  Mist: cloudy,
};
const backgroundImages = {
  Clear: "linear-gradient(to right, #f3b07c, #fcd283)",
  Clouds: "linear-gradient(to right, #57d6d4, #71eeec)",
  Rain: "linear-gradient(to right, #5bc8fb, #80eff)",
  Snow: "linear-gradient(to right, #eff2ff, #fff)",
  Haze: "linear-gradient(to right, #57d6d4, #71eeec)",
  Mist: "linear-gradient(to right, #57d6d4, #71eeec)",
};

const WeatherApp = () => {
  const [location, setLocation] = useState("Cairo");
  const [data, setData] = useState<WeatherData | null>(null);
  const [loading, setLoading] = useState(false);
  const handleSearchInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const debounce = setTimeout(() => {
      setLocation(e.target.value);
    }, 1000);

    return () => clearTimeout(debounce);
  };

  useEffect(() => {
    if (location) {
      setLoading(true);
      search();
    }
  }, [location]);
  useEffect(() => {
    document.title = "Weather App";
  }, []);
  const search = async () => {
    if (location.trim() !== "") {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${apiKey}&units=metric`
      );
      const data = await response.json();
      setLoading(false);
      if (data.cod !== 200) {
        setData(null);
        return;
      }
      setData(data);
    }
  };
  const date = useMemo(() => {
    const now = new Date();
    const day = now.getDate();
    const dayName = now.toLocaleString("default", { weekday: "short" });
    const month = now.toLocaleString("default", { month: "short" });
    return `${dayName}, ${day} ${month}`;
  }, []);

  const weatherImage = useMemo(() => {
    const main = data?.weather?.[0]?.main ?? "Clear";
    return weatherImages[main as keyof typeof weatherImages];
  }, [data]);
  const backgroundImage = useMemo(() => {
    const main = data?.weather?.[0]?.main ?? "Clear";
    return backgroundImages[main as keyof typeof backgroundImages];
  }, [data]);

  return (
    <div className="backgroundApp " style={{ background: backgroundImage }}>
      <div
        className="weather-app"
        style={{ background: backgroundImage.replace("right", "top") }}
      >
        <div className="search">
          <div className="search-top">
            <i className="fa-solid fa-location-dot"></i>
            <div className="location">{data?.name}</div>
          </div>
          <div className="search-bar ">
            <input
              type="text"
              onChange={handleSearchInput}
              placeholder="Enter Location"
            />
            <i className="fa-solid fa-magnifying-glass"></i>
          </div>
        </div>

        {loading ? (
          <img className="loader" src={loader} alt="Loading" />
        ) : data ? (
          <>
            <div className="weather">
              <img src={weatherImage} alt="sunny" />
              <div className="weather-type">
                {data?.weather?.[0]?.main ?? null}
              </div>
              <div className="temp">
                {typeof data?.main?.temp === "number"
                  ? `${Math.floor(data.main.temp)}°`
                  : "--°"}
              </div>
            </div>
            <div className="weather-date">
              <p>{date}</p>
            </div>
            <div className="weather-data">
              <div className="humidity">
                <div className="data-name">Humidity</div>
                <i className="fa-solid fa-droplet"></i>
                <div className="data">{data?.main?.humidity ?? "--"}%</div>
              </div>
              <div className="wind">
                <div className="data-name">Wind</div>
                <i className="fa-solid fa-wind"></i>
                <div className="data">
                  {Math.ceil(data?.wind?.speed ?? 0)} km/h
                </div>
              </div>
            </div>
          </>
        ) : (
          <div className="not-found">Not Found</div>
        )}
      </div>
    </div>
  );
};

export default WeatherApp;
