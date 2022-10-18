import { sendRequest } from "./index";

const baseUrl = "http://localhost:5000";

export const getUser = (path, id) => {
  const newPath = `${path}/${id}`;
  return sendRequest({ baseUrl, path: newPath });
};

export const editUser = (path, id, newName) => {
  const newPath = `${path}/${id}`;
  return sendRequest({
    baseUrl,
    path: newPath,
    method: "PUT",
    body: newName,
    headers: {
      "Content-Type": "application/json",
    },
  });
};
