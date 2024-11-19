import { useEffect } from "react";
import { useTranslation } from "react-i18next";

const useUnsavedChangesWarning = (unsavedChanges: boolean) => {
  const [t] = useTranslation();

  useEffect(() => {
    const handleBeforeUnload = (event: BeforeUnloadEvent) => {
      if (unsavedChanges) {
        // Prevent default action and stop the event
        event.preventDefault();
        // Optionally set returnValue to an empty string
        event.returnValue = "";
      }
    };

    const handleNavigation = (event: MouseEvent) => {
      if (unsavedChanges) {
        console.log(t("Access denied: You have unsaved changes!"));
        event.preventDefault();
      }
    };

    window.addEventListener("beforeunload", handleBeforeUnload);

    // Intercept link clicks (example for <a> elements)
    document.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", handleNavigation);
    });

    return () => {
      window.removeEventListener("beforeunload", handleBeforeUnload);

      // Clean up event listeners
      document.querySelectorAll("a").forEach((link) => {
        link.removeEventListener("click", handleNavigation);
      });
    };
  }, [unsavedChanges, t]);
};

export default useUnsavedChangesWarning;
