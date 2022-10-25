import React, { useContext } from "react";
import style from "../header.module.css";

import { Link } from "react-router-dom";
import { UserContext } from "../../../App";

export const UserInfo = () => {
  let user = useContext(UserContext);

  return (
    <figure className={style.user_info}>
      <Link to="/personal_account">
        <img src={user?.img} alt={""} />
        <figcaption>{user?.nickName}</figcaption>
      </Link>
    </figure>
  );
};
