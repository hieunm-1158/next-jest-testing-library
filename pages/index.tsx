import { addFunc } from "@/utils/test";
import { useState } from "react";

export default function Home() {
  const [numberA, setSumberA] = useState(0);
  const [numberB, setSumberB] = useState(0);
  const [total, setTotal] = useState(0);
  const [count, setCount] = useState(0);

  const handleSetCount = () => {
    console.log(setCount);

    setCount((prev) => prev + 1);
  };

  const handleAdd = () => {
    const total = addFunc(numberA, numberB);
    setTotal(total);
  };

  return (
    <>
      <div data-testid="count">count: {count}</div>
      <button onClick={handleSetCount}>
        <span>Increase</span>
      </button>
      <hr />
      <label htmlFor="AName">Nhập A</label>
      <input
        type="text"
        aria-label="AName"
        id="AName"
        name="AName"
        onChange={(e) => setSumberA(Number(e.target.value))}
      />
      <label htmlFor="BName">Nhập B</label>
      <input
        type="text"
        aria-label="BName"
        id="BName"
        name="BName"
        onChange={(e) => setSumberB(Number(e.target.value))}
      />
      <div data-testid="total">result:{total}</div>
      <button onClick={handleAdd}>
        <span>Add 2 number</span>
      </button>
    </>
  );
}
