import { useLayoutEffect, useState } from "react";

function debounce(fn, ms) {
  let timer;
  return _ => {
    clearTimeout(timer);
    timer = setTimeout(_ => {
      timer = null;
      fn.apply(this, arguments);
    }, ms);
  };
}

export default function useWindowSize() {
  const [size, setSize] = useState({
    height: window.innerHeight,
    width: window.innerWidth
  });
  useLayoutEffect(() => {
    const debouncedHandleResize = debounce(function updateSize() {
      setSize({ width: window.innerWidth, height: window.innerHeight });
    }, 0);
    window.addEventListener("resize", debouncedHandleResize);
    debouncedHandleResize();
    return () => window.removeEventListener("resize", debouncedHandleResize);
  }, []);
  return size;
}
