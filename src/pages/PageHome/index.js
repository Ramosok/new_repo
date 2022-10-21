import React, { useEffect, useState } from "react";
import { getWeacher } from "../../api/wheacherServises";
import { useFetch } from "../../CustomHooks/useFetch";
import { getUserCity } from "../../api/userLocationServises";

const PageHome = () => {
  const [searchCity, setSearchCity] = useState("");

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
    if (userLocation) {
      fetchFunc(userLocation?.city);
    }
  }, [userLocation?.city]);

  console.log(weather);

  return (
    <div>
      <input value={searchCity} type="text" onChange={handleChangeCity} />
      <button onClick={handleGetWeather}>
        Посмотреть погоду в другом городе
      </button>
    </div>
  );
};

export default PageHome;
