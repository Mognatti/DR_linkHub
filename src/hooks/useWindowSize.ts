import { useState } from "react";

export default function useWindowSize() {
  const [windowSize, setWindowSize] = useState(window.innerWidth);

  window.addEventListener("resize", () => {
    setWindowSize(window.innerWidth);
  });

  return [{ windowSize }];
}
