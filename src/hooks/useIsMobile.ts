import { useState, useEffect } from "react";

export function useIsMobile(breakpoint = 768) {
  // Always start at the server-rendered default (false / desktop) so the first
  // client render matches the prerendered HTML, then resolve the real value
  // after mount. Prevents hydration mismatches.
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= breakpoint);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [breakpoint]);

  return isMobile;
}
