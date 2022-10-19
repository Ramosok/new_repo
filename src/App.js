import React, { createContext, useCallback, useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import PageHome from "./pages/PageHome";
import { PageTodo } from "./pages/PageTodo";
import Header from "./components/Header";
import { PersonalAccount } from "./pages/PersonalAccount";
import { getUser } from "./api/userServises";

import "./App.css";
import { useFetch } from "./CustomHooks/useFetch";
import { getUserCity } from "./api/userLocationServis";

export const UserContext = createContext({});

function App() {
  const [user, setUser] = useState({});

  const [userLocation, fetchFunc] = useFetch(getUserCity);

  // const [searchCity, setSearchCity] = useState("");

  // const loadUser = useCallback(async () => {
  //   const data = await getUser("user", 1);
  //   if (data.status < 400) {
  //     const user = await data.json();
  //     setUser(user);
  //   }
  // }, []);

  useEffect(() => {
    fetchFunc();
  }, [fetchFunc]);

  return (
    <div className="app">
      <UserContext.Provider value={user}>
        <Header />
        <Routes>
          <Route
            path="/"
            element={
              userLocation ? (
                <PageHome userLocation={userLocation} />
              ) : (
                <div>Loading....</div>
              )
            }
          />
          <Route path="todo" element={<PageTodo />} />
          <Route path="personal_account" element={<PersonalAccount />} />
        </Routes>
      </UserContext.Provider>
    </div>
  );
}
export default App;
