import { useEffect } from "react";
import { setLocalStorageQuestions } from "../utils/setLocalStorageQuestions";

const useSaveOnDisconnect = (
  noChange: boolean,
  QUESTION_OBJECT_KEY: string,
  SavedQuestionData: any,
) => {
  useEffect(() => {
    const handleBeforeUnload = (event: BeforeUnloadEvent) => {
      console.log("disconnect");
      if (noChange) {
        if (SavedQuestionData?.isBase === 1) {
          setLocalStorageQuestions(QUESTION_OBJECT_KEY, SavedQuestionData);
        } else {
          setLocalStorageQuestions(QUESTION_OBJECT_KEY, SavedQuestionData);
        }
      }
    };

    const handleOffline = () => {
      console.log("disconnect");
      if (noChange) {
        if (SavedQuestionData?.isBase === 1) {
          setLocalStorageQuestions(QUESTION_OBJECT_KEY, SavedQuestionData);
        } else {
          setLocalStorageQuestions(QUESTION_OBJECT_KEY, SavedQuestionData);
        }
      }
    };

    // Add event listeners
    window.addEventListener("beforeunload", handleBeforeUnload);
    window.addEventListener("offline", handleOffline);

    // Cleanup function
    return () => {
      window.removeEventListener("beforeunload", handleBeforeUnload);
      window.removeEventListener("offline", handleOffline);
    };
  }, [noChange, QUESTION_OBJECT_KEY, SavedQuestionData]); // Add dependencies to the hook
};

export default useSaveOnDisconnect;
