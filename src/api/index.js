export const sendRequest = async ({ baseUrl, path, method, body, headers }) => {
  const requestUrl = `${baseUrl}/${path}`;
  const options = {
    method,
    headers: {
      ...headers,
    },
    body: body,
  };

  if (method === "POST" || method === "PUT") {
    options.body = JSON.stringify(body);
  }

  const response = await fetch(requestUrl, options);

  const contentType = response.headers.get("Content-Type");

  if (contentType.includes("application/json")) {
    return response;
  } else {
    throw new Error("Не тот формат данных");
  }
};
