import { sendRequest } from "./index";

const baseUrl = "http://localhost:5000";

export const getUser = (path, id) => {
  const newPath = `${path}/${id}`;
  return sendRequest({ baseUrl, path: newPath });
};

export const editUser = (path, id, newData) => {
  const newPath = `${path}/${id}`;
  return sendRequest({
    baseUrl,
    path: newPath,
    method: "PUT",
    body: newData,
    headers: {
      "Content-Type": "application/json",
    },
  });
};
