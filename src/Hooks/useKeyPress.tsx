import { useEffect } from "react";

type ModifierKey = "ctrlKey" | "shiftKey" | "altKey" | "metaKey";

const useKeyPress = (
  targetKey: string,
  modifierKey: ModifierKey,
  callback: any,
) => {
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event[modifierKey] && event.key === targetKey) {
        event.preventDefault();
        callback();
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [targetKey, modifierKey, callback]);
};

export default useKeyPress;
