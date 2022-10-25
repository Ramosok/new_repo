import React, { useCallback, useState } from "react";

export const useFetch = (callback) => {
  const [data, setData] = useState(null);

  const fetchFunc = useCallback(
    async (...arg) => {
      const data = await callback(...arg);
      if (data.status < 400) {
        const responseData = await data.json();
        setData(responseData);
      }
    },
    [callback]
  );

  return [data, fetchFunc];
};
