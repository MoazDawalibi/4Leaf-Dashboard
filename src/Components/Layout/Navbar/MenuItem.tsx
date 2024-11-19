import { useState } from "react";
import { useTranslation } from "react-i18next";
import { Link, useNavigate } from "react-router-dom";
import DropdownToggle from "./DropdownToggle"; // Adjust the import path as necessary
import SubMenu from "./SubMenu"; // Adjust the import path as necessary

export const MenuItem = ({ item, location, index }: any) => {
  const isActive = location.pathname.split("/")[1] === item.path?.slice(1);
  const [openDropdown, setOpenDropdown] = useState<number | null>(null);
  const [t] = useTranslation();
  const navigate = useNavigate();

  const handleDropdown = (index: number) => {
    setOpenDropdown((prev) => (prev === index ? null : index));
  };

  const isDropdownOpen = openDropdown === index;

  return (
    <>
      <div
        className={`link ${isActive ? "active" : ""} ${item?.children && "DropDownLink"}`}
        onClick={() => navigate(item.path || "/")}
      >
        <i>{item.icon}</i>
        <Link to={item.path || "/"}>{t(item.text)}</Link>
        {item?.children && (
          <DropdownToggle
            isOpen={isDropdownOpen}
            onClick={() => handleDropdown(index)}
          />
        )}
      </div>

      {item?.children && isDropdownOpen && (
        <SubMenu items={item.children} location={location} />
      )}
    </>
  );
};
