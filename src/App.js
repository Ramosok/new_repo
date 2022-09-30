import { useState } from "react";

function App() {
  const BASE_URL = "https://jsonplaceholder.typicode.com";
  const [id, setId] = useState(1);

  fetch(`${BASE_URL}/todos/${id}`)
    .then((response) => response.json())
    .then((json) => console.log(json));

  return (
    <div onClick={(event) => setId(event.target.id)}>
      <button id="2">inck</button>
      <button id="34">decr</button>
      <button id="27">decr</button>
      <button id="55">decr</button>
      <button id="11">decr</button>
      <button id="89">decr</button>
      <button id="90">decr</button>
      <button id="92">decr</button>
      <button id="96">decr</button>
    </div>
  );
}
export default App;
