import React from "react";
import { useEffect, useState } from "react";
import Card from "../weather";
import axios from "axios";
import "./index.css";

const Index = () => {
  const [data, setData] = useState(null);
  const [cities, setCities] = useState([]);
  useEffect(() => {
    const cities = new Set(localStorage.getItem("recentCities").split("/"));
    const cityarr = [];
    for (const value of cities) {
      if (value !== "" && value !== "null") cityarr.push(value);
    }
    console.log(cityarr);
    setCities(cityarr);
  }, []);
  const showWeather = async (city) => {
    try {
      const res = await axios.get(
        `https://api.weatherapi.com/v1/current.json?key=4f8ec719add54f4f80e110210230810&q=${city}&aqi=no`
      );
      setData(res.data);
    } catch {
      console.log("error");
    }
  };
  return (
    <div className="recent-container">
      {data == null ? (
        cities.map((element) => (
          <div className="recent-city" onClick={() => showWeather(element)}>
            {element}
          </div>
        ))
      ) : (
        <div>
          <button type="submit" onClick={() => setData(null)} id="back-button">
            Back
          </button>
          <Card data={data} />
        </div>
      )}
    </div>
  );
};

export default Index;
