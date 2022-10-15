import { sendRequest } from "./index";

const baseUrl = "http://localhost:5000";

export const getPost = (path) => {
  return sendRequest({ baseUrl, path });
};

export const addPost = (path, post) => {
  return sendRequest({
    baseUrl,
    path,
    method: "POST",
    body: post,
    headers: {
      "Content-Type": "application/json",
    },
  });
};

export const removePost = (path, id) => {
  const newPath = `${path}/${id}`;
  return sendRequest({ baseUrl, path: newPath, method: "DELETE" });
};

export const editPost = (path, id, editPost) => {
  const newPath = `${path}/${id}`;
  return sendRequest({
    baseUrl,
    path: newPath,
    method: "PUT",
    body: editPost,
    headers: {
      "Content-Type": "application/json",
    },
  });
};
