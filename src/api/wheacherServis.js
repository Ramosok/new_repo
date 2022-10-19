import { sendRequest } from "./index";

const baseUrl = "https://api.openweathermap.org";
const apiKey = "c3ca8a2f3b593b6df2011af8209c3088";

export const getWeacher = (city) => {
  const pathName = `/data/2.5/weather?q=${city}&appid=${apiKey}`;

  return sendRequest({ baseUrl, path: pathName });
};
