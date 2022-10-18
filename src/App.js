import React, { createContext, useCallback, useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import PageHome from "./pages/PageHome";
import { PageTodo } from "./pages/PageTodo";
import Header from "./components/Header";
import { PersonalAccount } from "./pages/PersonalAccount";
import { getUser } from "./api/userServises";

import "./App.css";

export const UserContext = createContext({});

function App() {
  const [user, setUser] = useState({});

  const loadUser = useCallback(async () => {
    const data = await getUser("user", 1);
    if (data.status < 400) {
      const user = await data.json();
      setUser(user);
    }
  }, []);

  useEffect(() => {
    loadUser();
  }, [loadUser]);

  return (
    <div className="app">
      <UserContext.Provider value={user}>
        <Header />
        <Routes>
          <Route path="/" element={<PageHome />} />
          <Route path="todo" element={<PageTodo />} />
          <Route path="personal_account" element={<PersonalAccount />} />
        </Routes>
      </UserContext.Provider>
    </div>
  );
}
export default App;
