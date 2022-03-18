import { useState, useEffect } from "react";

export default function useWidth() {
  const [width, setWidth] = useState({ width: 0 });

  useEffect(() => {
    function handleWidthResize() {
      setWidth({ width: window.innerWidth });
    }
    window.addEventListener("resize", handleWidthResize);
    return () => window.removeEventListener("resize", handleWidthResize);
  }, []);

  return width;
}
