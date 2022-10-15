import React from "react";
import { Routes, Route } from "react-router-dom";
import PageHome from "./pages/PageHome";
import { PageTodo } from "./pages/PageTodo";
import Header from "./components/Header";
import { PersonalAccount } from "./pages/PersonalAccount";

import "./App.css";

function App() {
  return (
    <div className="app">
      <Header />
      <Routes>
        <Route path="/" element={<PageHome />} />
        <Route path="todo" element={<PageTodo />} />
        <Route path="personal_account" element={<PersonalAccount />} />
      </Routes>
    </div>
  );
}
export default App;
