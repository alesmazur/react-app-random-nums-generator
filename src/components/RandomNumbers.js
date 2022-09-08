import { useState } from "react";

function generateNum() {
  return Math.floor(Math.random() * 1000);
}

function RandomNumbers() {
  const [num, setNum] = useState(generateNum());
  const changeNum = () => {
    setNum(generateNum());
  };
  return (
    <div>
      <h1>{num}</h1>
      <button onClick={changeNum}>Generate</button>
    </div>
  );
}

export default RandomNumbers;
