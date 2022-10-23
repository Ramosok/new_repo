import React, { useEffect, useState } from "react";
import { getWeacher } from "../../api/wheacherServises";
import { useFetch } from "../../CustomHooks/useFetch";
import { getUserCity } from "../../api/userLocationServises";

import style from "./home_page.module.css";

const backgroundMaper = {
  Clouds: "clouds",
  Rain: "rain",
  Clear: "clear",
};

const PageHome = () => {
  const [searchCity, setSearchCity] = useState("");
  const [weatherCity, setWeatherCity] = useState({});

  const [userLocation, fetchFuncUserLocation] = useFetch(getUserCity);

  const [weather, fetchFunc] = useFetch(getWeacher);

  const handleChangeCity = (event) => {
    const city = event.target.value;
    setSearchCity(city);
  };

  const handleGetWeather = () => {
    fetchFunc(searchCity);
  };

  useEffect(() => {
    fetchFuncUserLocation();
    if (userLocation?.city) {
      fetchFunc(userLocation?.city);
    }
  }, [userLocation?.city]);

  useEffect(() => {
    if (weather) {
      setWeatherCity(weather);
    }
  }, [weather]);

  return (
    <div
      // className={
      //   style.clouds
      // }
      className={style[`${backgroundMaper[weather?.weather[0]?.main]}`]}
    >
      <input value={searchCity} type="text" onChange={handleChangeCity} />
      <button onClick={handleGetWeather}>
        Посмотреть погоду в другом городе
      </button>

      <h3 style={{ textAlign: "center" }}>{weatherCity.name}</h3>
      <h4 style={{ textAlign: "center" }}>
        {Math.round(+weatherCity.main?.temp - 273)}°C
      </h4>
    </div>
  );
};

export default PageHome;
