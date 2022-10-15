import React, { memo } from "react";

export const Button = memo(({ text, func }) => {
  return (
    <button style={{ backgroundColor: "gold" }} onClick={func}>
      {text}
    </button>
  );
});
