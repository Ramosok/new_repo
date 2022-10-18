import React, { useState } from "react";
import style from "./header.module.css";

import { UserInfo } from "./UserInfo";
import { Link, useLocation } from "react-router-dom";

const Header = () => {
  const { pathname } = useLocation();

  return (
    <div className={style.header}>
      {pathname !== "/" && <Link to="/">Назад</Link>}
      <UserInfo />
    </div>
  );
};

export default Header;
