import React, { useContext } from "react";
import { UserContext } from "../../App";

export const PersonalAccount = () => {
  let { firstName, lastName, img, age, nickName } = useContext(UserContext);

  return (
    <div>
      <h1>
        {firstName} - {lastName} - возраст: {age}{" "}
      </h1>
      <p>{nickName}</p>
      <figure>
        <img width="300" height="300" src={img} img="" />
      </figure>
    </div>
  );
};
