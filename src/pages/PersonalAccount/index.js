import React, { useContext, useEffect, useState } from "react";
import { UserContext } from "../../App";
import { useFetch } from "../../CustomHooks/useFetch";
import { editUser } from "../../api/userServises";

export const PersonalAccount = () => {
  const { firstName, lastName, img, age, nickName } = useContext(UserContext);
  const [isEdit, setIsEdit] = useState(false);
  const [changeData, setChangeData] = useState({
    firstName: firstName,
    lastName: lastName,
    age: age,
    img: img,
    nickName: nickName,
  });

  const [data, fetchFunc] = useFetch(editUser);

  const handleEditData = () => {
    setIsEdit(!isEdit);
  };

  const handleChangeData = (event) => {
    const name = event.target["name"];
    const newData = {
      ...changeData,
      [name]: event.target.value,
    };
    setChangeData(newData);
  };

  const handleSave = () => {
    fetchFunc("user", 1, changeData);
  };

  useEffect(() => {
    if (data) {
      setChangeData(data);
      setIsEdit(false);
    }
  }, [data]);

  return (
    <div>
      <button onClick={handleEditData}>Edit</button>

      {isEdit && <button onClick={handleSave}>Save</button>}
      <h1>
        {changeData.firstName} - {changeData.lastName} - возраст:{" "}
        {changeData.age}
      </h1>
      {isEdit && (
        <>
          <input
            value={changeData.firstName}
            onChange={handleChangeData}
            name={"firstName"}
            type="text"
            placeholder={"first name"}
          />
          <input
            value={changeData.lastName}
            onChange={handleChangeData}
            name={"lastName"}
            type="text"
            placeholder={"last name"}
          />
          <input
            value={changeData.age}
            onChange={handleChangeData}
            name={"age"}
            type="number"
            placeholder={"age"}
          />
        </>
      )}
      <p>{changeData.nickName}</p>

      <figure>
        <img width="300" height="300" src={changeData.img} alt="Картинка" />
      </figure>
    </div>
  );
};
