import { useEffect, useState } from "react";

function HookUseEffect() {
  const [count, setCount] = useState({
    num: 1,
    id: "abcd",
  });

  const handleAdd = () => {
    setCount((prev) => {
      return {
        ...prev,
        num: prev.num + 1,
      };
    });
  };

  const handleSubstract = () => {
    setCount((prev) => {
      return {
        ...prev,
        num: prev.num - 1,
      };
    });
  };

  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
        setScreenWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);
    console.log("ran");

    return () => {
    window.removeEventListener("resize", handleResize);
      console.log("ran returned");
    };
  }, []);

  return (
    <>
      <button onClick={handleSubstract}>-</button>
      <span>{count.num}</span>
      <span>{count.id}</span>
      <button onClick={handleAdd}>+</button>
      <p>{screenWidth}</p>
    </>
  );
}

export default HookUseEffect;
