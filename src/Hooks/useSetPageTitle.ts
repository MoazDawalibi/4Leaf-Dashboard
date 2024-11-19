import { useEffect } from "react";
import { usePageTitleState } from "../zustand/PageTitleState";

const useSetPageTitle = (title: any) => {
  const setPageTitle = usePageTitleState((state) => state.setPageTitle);

  useEffect(() => {
    setPageTitle(title);
  }, [title, setPageTitle]);
};

export default useSetPageTitle;
