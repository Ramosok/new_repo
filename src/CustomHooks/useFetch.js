import React, { useCallback, useState } from "react";

export const useFetch = (callback, ...arg) => {
  const [data, setData] = useState(null);

  const fetchFunc = useCallback(async () => {
    const data = await callback(...arg);
    if (data.status < 400) {
      const responseData = await data.json();
      setData(responseData);
    }
  }, []);

  // useEffect(() => {
  //   fetchFunc();
  // }, [fetchFunc]);

  return [data, fetchFunc];
};
