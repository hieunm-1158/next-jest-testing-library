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
      {/* <div data-testid="count">count: {count}</div>
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
      </button> */}
      //example 2
      <div>
        <h1>Title</h1>
        <a className="active" href="https://www.example.com">
          link
        </a>
        <input type="text" placeholder="Enter your email" />
        <label htmlFor="username">Username:</label>
        <input type="text" id="username" />
        <button>Click me</button>
        <img src="landscape.jpg" alt="A beautiful landscape" />
        <div title="Important Note">Note: This is important!</div>
        <input type="text" value="Initial value" />
        <div>Hello, World!</div>
        <div data-testid="special-element">Special Element</div>
      </div>
    </>
  );
}
