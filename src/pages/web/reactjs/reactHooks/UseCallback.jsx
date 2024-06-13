import { useState } from "react";

export default function UseCallback() {
  return (
    <div>
      UseCallback
      <UseCallback1 />
    </div>
  );
}

function UseCallback1() {
  const [count, setCount] = useState(0);
  const [count2, setCount2] = useState(0);
  const increment = () => {
    console.log("increment count");
    setCount((prev) => prev + 1);
  };
  const increment2 = () => {
    console.log("increment count2");
    setCount2((prev) => prev + 1);
  };

  return (
    <div className="flex flex-col border rounded max-w-min p-2">
      <div>count: {count}</div>
      <div>count2: {count2}</div>
      <button onClick={increment} className="border rounded p-1 leading-none min-w-max">
        + count
      </button>
      <button onClick={increment2} className="border rounded p-1 leading-none min-w-max">
        + count2
      </button>
    </div>
  );
}
