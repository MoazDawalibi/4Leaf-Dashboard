import React from "react";
import { useModalTabsState } from "../../../zustand/ModalTabsState";

const TabsBar = ({ steps }: any) => {
  const { ActiveTab, setActiveTab } = useModalTabsState((state) => state);

  function handleTabClick(index: number) {
    // setActiveTab(index);
  }

  return (
    <div className="ModelBodyTabs">
      {steps?.map(
        (step: any, index: any) =>
          !step.hidden && (
            <div
              onClick={() => handleTabClick(index)}
              className={`ModelBodyTab ${ActiveTab === index ? "activeModelTab" : ""}`}
              key={index}
            >
              <div>{index + 1}</div>
              <span>
                <h6>{step.title}</h6>
                <h4>{step.description}</h4>
              </span>
            </div>
          ),
      )}
    </div>
  );
};

export default TabsBar;
