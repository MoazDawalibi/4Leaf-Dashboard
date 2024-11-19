import { useState } from "react";
import { useTranslation } from "react-i18next";
import { MdExpandLess, MdExpandMore } from "react-icons/md";
import { Link, useNavigate } from "react-router-dom";
import { useFilterStateState } from "../../../zustand/Filter";
import { Tooltip } from "antd";

export const MenuItem = ({ item, location, index, isOpen }: any) => {
  const isActive = location.pathname.split("/")[1] === item.path?.slice(1);
  const [openDropdown, setOpenDropdown] = useState<number | null>(null);
  const handleDropdown = (index: number) => {
    setOpenDropdown((prev) => (prev === index ? null : index));
  };
  const isDropdownOpen = openDropdown === index;
  const [t] = useTranslation();
  const navigate = useNavigate();
  const { setFilter } = useFilterStateState();
  const handleNavigate = () => {
    setFilter({});
    navigate(item.path || "/");
  };

  return (
    <>
      <div
        className={`link ${isActive ? "active" : ""} ${item?.children && "DropDownLink"}`}
        onClick={() => handleNavigate()}
      >
        <Tooltip placement="topLeft" title={t(item?.text)} color={"#E0E0E0"}>
          <i>{item.icon}</i>
        </Tooltip>
        {/* Conditionally render the text based on sidebar width */}
        <span style={{ display: isOpen === false ? "none" : "inline" }}>
          {t(item.text)}
        </span>
        {item?.children && (
          <>
            {isDropdownOpen ? (
              <div
                className="DropDownIcon"
                onClick={() => handleDropdown(index)}
              >
                <MdExpandLess className="sidebar_menu_icon" />
              </div>
            ) : (
              <div
                className="DropDownIcon"
                onClick={() => handleDropdown(index)}
              >
                <MdExpandMore className="sidebar_menu_icon" />
              </div>
            )}
          </>
        )}
      </div>

      {item?.children && isDropdownOpen && (
        <div className="sub-menu">
          {item.children.map((childItem: any, childIndex: number) => (
            <MenuItem
              key={childIndex}
              item={childItem}
              location={location}
              index={childIndex}
              isOpen={isOpen}
            />
          ))}
        </div>
      )}
    </>
  );
};
