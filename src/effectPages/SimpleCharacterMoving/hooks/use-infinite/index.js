import { useEffect } from "react";

export default function useInfinite(fn) {
  useEffect(() => {
    setInterval(fn, 3000);
  });
}
