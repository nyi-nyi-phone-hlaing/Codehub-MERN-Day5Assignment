import { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);
  return (
    <div className='counter'>
      <p>
        Counter: <span>{count}</span>
      </p>
      <div className='row'>
        <button
          onClick={() => {
            setCount((prev) => prev - 1);
          }}>
          Decrease
        </button>
        <button
          onClick={() => {
            setCount((prev) => prev + 1);
          }}>
          Increase
        </button>
      </div>
    </div>
  );
};

export default Counter;
