import React, { useEffect, useState } from "react";
import { getWeacher } from "../../api/wheacherServises";
import { useFetch } from "../../CustomHooks/useFetch";
import { getUserCity } from "../../api/userLocationServises";
import { backgroundMaper } from "../../constats";

import style from "./home_page.module.css";

const PageHome = () => {
  const [searchCity, setSearchCity] = useState("");
  const [weatherCity, setWeatherCity] = useState({});

  const [userLocation, fetchFuncUserLocation] = useFetch(getUserCity);

  const [weather, fetchFunc] = useFetch(getWeacher);

  const handleChangeCity = (event) => {
    const city = event.target.value;
    setSearchCity(city);
  };

  const handleGetWeather = (event) => {
    event.preventDefault();
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
      <form onSubmit={handleGetWeather}>
        <input value={searchCity} type="text" onChange={handleChangeCity} />
        <button type="submit">Посмотреть погоду в другом городе</button>
      </form>
      <h1 style={{ textAlign: "center" }}>{weatherCity.name}</h1>
      <h2 style={{ textAlign: "center" }}>
        {Math.round(+weatherCity.main?.temp - 273)}°C
      </h2>
      <div>
        <h3 style={{ textAlign: "center" }}>
          Ощущение - {Math.round(+weather?.main.feels_like - 273)}°C
        </h3>
        <h3 style={{ textAlign: "center" }}>
          Влажность - {weather?.main.humidity}
        </h3>
        <h3 style={{ textAlign: "center" }}>
          Давление - {weather?.main.pressure}
        </h3>
      </div>
    </div>
  );
};

export default PageHome;
