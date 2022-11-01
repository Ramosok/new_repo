import React from "react";
import style from "./header.module.css";

import { UserInfo } from "./UserInfo";
import { Link, useLocation } from "react-router-dom";

const Header = () => {
  const { pathname } = useLocation();

  return (
    <div className={style.header}>
      {pathname !== "/" && <Link to="/">Назад</Link>}
      <Link to="/counter">counter</Link>
      <UserInfo />
    </div>
  );
};

export default Header;
