import { useState } from "react";

const Count = ({ totalSum }: { totalSum: () => void }) => {
  const [count, setCount] = useState(0);

  const handleCount = () => {
    console.log("숫자 증가");
    setCount((count) => count + 1);

    totalSum();
  };

  return (
    <div>
      <button type="button" className="counter" onClick={handleCount}>
        Count is {count}
      </button>
    </div>
  );
};

export default Count;
