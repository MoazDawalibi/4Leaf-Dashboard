import { useEffect } from "react";

type KeyCombination = {
  ctrlKey?: boolean;
  shiftKey?: boolean;
  code: string; // Use string here for flexibility
};

const useKeyCombination = (
  keyCombination: KeyCombination,
  callback: () => void,
) => {
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      const matches =
        (keyCombination.ctrlKey === undefined ||
          event.ctrlKey === keyCombination.ctrlKey) &&
        (keyCombination.shiftKey === undefined ||
          event.shiftKey === keyCombination.shiftKey) &&
        event.code === keyCombination.code;

      if (matches) {
        callback();
        event.preventDefault(); // Prevent the default action for the event
        event.stopPropagation(); // Stop the event from propagating further
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [keyCombination, callback]);
};

export default useKeyCombination;
