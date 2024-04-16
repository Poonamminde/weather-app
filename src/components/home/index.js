import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import Card from "../weather";
import "./index.css";

const Index = () => {
  const [city, setCity] = useState("");
  const [data, setData] = useState(null);
  const [error, setError] = useState(false);
  /**
   * get last search city from localstorage;
   */
  useEffect(() => {
    if (localStorage.getItem("city")) {
      setCity(localStorage.getItem("city"));
    }
  }, []);
  useEffect(() => {
    getAPIdata();
  });
  /**
   * fetch weather api data for city
   * save api data to data state
   * if data is not fetched set error as true otherwise its false
   */
  const getAPIdata = async () => {
    try {
      if (city !== "") {
        const response = await axios.get(
          `https://api.weatherapi.com/v1/current.json?key=4f8ec719add54f4f80e110210230810&q=${city}&aqi=no`
        );
        setData({ ...response.data });
        console.log(data);
        if (response.data) {
          localStorage.setItem("city", city);
          localStorage.setItem(
            "recentCities",
            localStorage.getItem("recentCities") +
              "/" +
              response.data.location.name
          );
        }
        setError(false);
      }
    } catch {
      console.log("not valid city");
      setData(null);
      setError(true);
    }
  };
  /**
   * clouser function for searching city
   * @returns callback
   */
  const debounceSearch = () => {
    let timer;
    return (e) => {
      clearTimeout(timer);
      timer = setTimeout(() => {
        setCity(e.target.value);
        console.log(city);
        localStorage.setItem("city", e.target.value);
      }, 500);
    };
  };
  /**
   * when we search for city name
   */
  const handleOnChange = debounceSearch();
  return (
    <div className="home-container">
      <input
        type="text"
        onChange={(e) => handleOnChange(e)}
        id="input-field"
        placeholder="Enter city"
      />
      {error && (
        <div id="error">
          Please enter city name, this is not valid city, check for spelling
          mistakes
        </div>
      )}
      {data !== null && <Card data={data} />}
    </div>
  );
};

export default Index;
