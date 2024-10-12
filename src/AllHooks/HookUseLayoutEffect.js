import React, { useLayoutEffect } from "react";

const HookUseLayoutEffect = () => {
  // It occurs before useEffect() which is after the DOM has been updated but before the browser has painted the updates to the screen.
  
  useLayoutEffect(() => {
    console.log("hello");
  }, []);

  return <div>Hello</div>;
};

export default HookUseLayoutEffect;
