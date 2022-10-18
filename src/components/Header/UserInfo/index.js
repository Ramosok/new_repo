import React, { useContext, useEffect, useState } from "react";
import style from "../header.module.css";
import { editUser } from "../../../api/userServises";
import { Link } from "react-router-dom";
import { UserContext } from "../../../App";

export const UserInfo = () => {
  let user = useContext(UserContext);
  //const [name, setName] = useState(user);
  console.log(user);

  // const handleChange = async () => {
  //   const data = await editUser("user", 1, name);
  //   if (data.status < 400) {
  //     const user = await data.json();
  //     //setName(user.name);
  //   }
  // };

  const handleChangeName = (event) => {
    // setName(event.target.value);
  };

  return (
    <figure className={style.user_info}>
      <Link to="/personal_account">
        <img src={user?.img} alt={""} />
        <figcaption>{user.nickName}</figcaption>
      </Link>
    </figure>
  );
};
