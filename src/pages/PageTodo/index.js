import React, { useCallback, useEffect, useState } from "react";
import { Button } from "../../components/Button";
import { Post } from "../../components/Post";
import { addPost, editPost, getPost } from "../../api/postsServises";
import { v4 as uuid } from "uuid";
import { Link } from "react-router-dom";

export const PageTodo = () => {
  const [posts, setPosts] = useState([]);
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [error, setError] = useState("");
  const [edited, setEdited] = useState(false);
  const [postId, setPostId] = useState(null);

  const loadData = useCallback(async () => {
    const data = await getPost("posts");
    if (data.status < 400) {
      const posts = await data.json();
      setPosts(posts);
    }
  }, []);

  const heandleTitle = (event) => {
    setTitle(event.target.value);
  };

  const heandleBody = (event) => {
    setBody(event.target.value);
  };

  const creatPost = useCallback(async () => {
    if (title && body) {
      const newPost = {
        id: uuid(),
        title: title,
        body: body,
      };
      const data = await addPost("posts", newPost);
      if (data.status < 400) {
        loadData();
      } else {
        setError("Упс, что то пошло не так");
      }
    } else {
      setError("Поле не должно быть пустым");
    }
  }, []);

  const editedPost = useCallback(async () => {
    const newPost = {
      id: postId,
      title: title,
      body: body,
    };

    const data = await editPost("posts", postId, newPost);
    if (data.status < 400) {
      loadData();
    }
  }, []);

  useEffect(() => {
    setError("");
  }, [title, body]);

  useEffect(() => {
    loadData();
  }, [loadData]);
  return (
    <div>
      <Link to="./">
        <button>Home</button>
      </Link>
      <input type="text" value={title} onChange={heandleTitle} />
      <input type="text" value={body} onChange={heandleBody} />
      {error && <p style={{ color: "red" }}>{error}</p>}
      {edited ? (
        <Button text={"Edit post"} func={editedPost} />
      ) : (
        <Button text={"Add post"} func={creatPost} />
      )}
      <div>
        {posts.map(({ id, title, body }) => (
          <Post
            setPostId={setPostId}
            setEdited={setEdited}
            setTitle={setTitle}
            setBody={setBody}
            loadData={loadData}
            key={id}
            id={id}
            title={title}
            body={body}
          />
        ))}
      </div>
    </div>
  );
};
