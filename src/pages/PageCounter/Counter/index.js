import React, { useEffect, useRef, useState } from "react";

export const Counter = () => {
  const myRef = useRef(null);

  const [count, setCount] = useState(0);
  const [isOpen, setIsOpen] = useState(false);

  const handleInc = () => {
    setCount(count + 1);
  };
  const handleDec = () => {
    setCount(count - 1);
  };

  // if (count === 10) {
  //   throw new Error("что то пошло не так");
  // }
  const handleClicks = () => {
    setIsOpen(!isOpen);
  };

  const handleClick = (event) => {
    const target = event?.target;

    if (myRef.current?.contains(target)) {
      setIsOpen(false);
    }
  };

  const keydownHandler = ({ key }: KeyboardEvent) => {
    if (key === "Escape") {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleClick);
    document.addEventListener("keydown", keydownHandler);

    return () => {
      document.removeEventListener("click", handleClick);
      document.removeEventListener("keydown", keydownHandler);
    };
  }, []);

  return (
    <div style={{ padding: "100px" }}>
      <h3>{count}</h3>
      <button onClick={handleInc}>inc</button>
      <button onClick={handleDec}>dec</button>
      <button onClick={handleClicks}>Modal</button>
      {isOpen && (
        <div
          ref={myRef}
          style={{
            width: "700px",
            height: "700px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "rgba(0, 0, 0, 0.1)",
          }}
        >
          <div
            style={{
              width: "200px",
              height: "200px",
              backgroundColor: "white",
              border: "3px solid black",
            }}
          >
            Моё модальное окно
          </div>
        </div>
      )}
    </div>
  );
};
