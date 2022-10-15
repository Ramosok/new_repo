import React, { useEffect, useState } from "react";
import style from "../header.module.css";
import { editUser } from "../../../api/userServises";
import { Link } from "react-router-dom";

export const UserInfo = ({ user }) => {
  const [name, setName] = useState(user?.name);

  const handleChange = async () => {
    const data = await editUser("user", 1, name);
    if (data.status < 400) {
      const user = await data.json();
      setName(user.name);
    }
  };

  const handleChangeName = (event) => {
    setName(event.target.value);
  };

  return (
    <figure className={style.user_info}>
      <Link to="/personal_account">
        <img src={user?.img} alt={user?.name} />
        <figcaption>{user?.name}</figcaption>
      </Link>
    </figure>
  );
};
