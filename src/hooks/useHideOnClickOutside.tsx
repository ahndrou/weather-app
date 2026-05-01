import { useEffect, useRef } from "react";

/**
 * Returns a ref object, which can be associated with a HTML element via a ref prop.
 * When a click which does not overlap that object, the visibility state associated with
 * the setVisibility setter is set to false.
 */
export default function useHideOnClickOutside<T extends HTMLElement>(
  setVisibility: React.Dispatch<React.SetStateAction<boolean>>,
) {
  const elementRef = useRef<T | null>(null);

  useEffect(() => {
    function handleClick(event: PointerEvent) {
      if (!elementRef.current) {
        throw new Error(
          "Tried to access ref before it had a 'current' value set.",
        );
      }

      const target = event.target;

      if (!elementRef.current.contains(target as Node)) {
        setVisibility(false);
      }
    }

    document.addEventListener("click", handleClick);

    return () => document.removeEventListener("click", handleClick);
  }, []);

  return { elementRef };
}
