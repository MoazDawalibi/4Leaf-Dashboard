import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { usePageTitleState } from "../../zustand/PageTitleState";
import { useFilterStateState } from "../../zustand/Filter";

const PageTitleComponent = () => {
  const { PageTitle } = usePageTitleState();
  const navigate = useNavigate();
  const location = useLocation();
  const { setFilter } = useFilterStateState();

  const handleNavigate = (path: string) => {
    const currentPath = location.pathname;
    const newPath = currentPath?.split(path)?.[0] + path;
    if (newPath !== currentPath) {
      setFilter({});
      navigate(newPath);
    }
  };
  return (
    <div className="PageTitle">
      {(Array.isArray(PageTitle) ? PageTitle : [])?.map((item, index) => {
        const lastItem = PageTitle?.length - 1 === index;
        return (
          <div
            key={index}
            className={`PageTitleItems ${lastItem ? "PageTitleLastItem" : ""} `}
            onClick={() => handleNavigate(item?.path)}
          >
            {item?.name} {lastItem ? "" : "/"}
          </div>
        );
      })}
    </div>
  );
};

export default PageTitleComponent;
