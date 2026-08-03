import { useState, type MouseEvent } from "react";

const AppXY = () => {
  const [pointerPos, setPointerPos] = useState({ x: 0, y: 100 });

  const handleMove = (e: MouseEvent<HTMLDivElement>) => {
    setPointerPos((prev) => ({ ...prev, x: e.pageX }));
  };

  return (
    <div className="container" onPointerMove={(e) => handleMove(e)}>
      <div className="pointer" style={{ transform: `translate(${pointerPos.x}px, ${pointerPos.y}px)` }}></div>
    </div>
  );
};

export default AppXY;
