import React, { useCallback, useEffect, useState } from "react";
import style from "./header.module.css";
import { getUser } from "../../api/userServises";
import { UserInfo } from "./UserInfo";

const Header = () => {
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
    <div className={style.header}>
      <UserInfo user={user} />
    </div>
  );
};

export default Header;
