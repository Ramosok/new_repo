import { sendRequest } from "./index";

const baseUrl = "https://ipinfo.io";
const apiKey = "7e8587a0998bb7";

export const getUserCity = () => {
  const pathName = `?token=${apiKey}`;

  return sendRequest({ baseUrl, path: pathName });
};
