import React, { useEffect, useState } from "react";
import { getWeacher } from "../../api/wheacherServis";
import { useFetch } from "../../CustomHooks/useFetch";

const PageHome = ({ userLocation }) => {
  const [searchCity, setSearchCity] = useState("");

  const [weather, fetchFunc] = useFetch(getWeacher, userLocation?.city);

  const handleChangeCity = (event) => {
    const city = event.target.value;
    setSearchCity(city);
  };

  const handleGetWeather = () => {
    //fetchFunc();
  };

  useEffect(() => {
    fetchFunc();
  }, [userLocation]);

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
