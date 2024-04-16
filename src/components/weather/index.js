import React from "react";
import "./index.css";

const index = ({ data }) => {
  console.log("weather");
  return (
    <div className="weather-container">
      <h1 className="weather-title">{data.location.name}</h1>
      <img
        src={data.current.condition.icon}
        alt={data.current.condition.text}
        class="weather-image"
      />
      <div className="weather-section">
        <div class="weather-section-first">
          <div>Temperature</div>
          <div>:</div>
        </div>
        <div>
          {data.current.temp_c}{" "}
          <small>
            <sup>o</sup>
          </small>
          C /{data.current.temp_f}{" "}
          <small>
            <sup>o</sup>
          </small>
          F
        </div>
      </div>
      <div className="weather-section">
        <div class="weather-section-first">
          <div>Cloud</div>
          <div>:</div>
        </div>
        <div>{data.current.cloud} %</div>
      </div>
      <div className="weather-section">
        <div class="weather-section-first">
          <div>Humidity</div>
          <div>:</div>
        </div>
        <div>{data.current.humidity} %</div>
      </div>

      <div className="weather-section">
        <div class="weather-section-first">
          <div>Wind Direction</div>
          <div>:</div>
        </div>
        <div>{data.current.wind_dir} </div>
      </div>
      <div className="weather-section">
        <div class="weather-section-first">
          <div>Wind degree</div>
          <div>:</div>
        </div>
        <div>{data.current.wind_degree}</div>
      </div>
      <div className="weather-section">
        <div class="weather-section-first">
          <div>Wind Speed</div>
          <div>:</div>
        </div>
        <div>
          {data.current.wind_kph} kmp / {data.current.wind_mph} mph
        </div>
      </div>
      <div className="weather-section">
        <div class="weather-section-first">
          <div>Gust</div>
          <div>:</div>
        </div>
        <div>
          {data.current.gust_kph} kph / {data.current.gust_mph} mph
        </div>
      </div>
      <div className="weather-section">
        <div class="weather-section-first">
          <div>Precipation</div>
          <div>:</div>
        </div>
        <div>
          {data.current.precip_in} kph / {data.current.precip_mm} mph
        </div>
      </div>
      <div className="weather-section">
        <div class="weather-section-first">
          <div>Region</div>
          <div>:</div>
        </div>
        <div>{data.location.region}</div>
      </div>
      <div className="weather-section">
        <div class="weather-section-first">
          <div>Country</div>
          <div>:</div>
        </div>
        <div>{data.location.country} </div>
      </div>
      <div className="weather-section">
        <div class="weather-section-first">
          <div>Time Zone</div>
          <div>:</div>
        </div>
        <div>{data.location.tz_id} </div>
      </div>
      <div className="weather-section">
        <div class="weather-section-first">
          <div>Last Updated</div>
          <div>:</div>
        </div>
        <div>{data.current.last_updated}</div>
      </div>
    </div>
  );
};

export default index;
