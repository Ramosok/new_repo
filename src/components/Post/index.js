import React, { memo, useCallback } from "react";
import { removePost } from "../../api/postsServises";
import { Button } from "../Button";
//import "../PageTodo/todo.css";
import style from "../../pages/PageTodo/todo.module.css";
import { ButtonDanger } from "../../pages/PageTodo/components";

export const Post = memo(
  ({ setPostId, setEdited, setBody, setTitle, loadData, id, title, body }) => {
    const handleDelete = useCallback(async () => {
      const data = await removePost("posts", id);
      if (data.status < 400) {
        loadData();
      }
    }, []);

    const handleEdit = useCallback(() => {
      setPostId(id);
      setTitle(title);
      setBody(body);
      setEdited(true);
    }, []);

    return (
      <div className={style.app}>
        <p className={style.btn}>{title}</p>
        <p>{body}</p>
        <Button text={"delete"} func={handleDelete} />
        <Button text={"Edit"} func={handleEdit} />
        <ButtonDanger>Danger</ButtonDanger>
      </div>
    );
  }
);
