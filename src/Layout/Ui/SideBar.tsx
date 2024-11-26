import React, { useState } from "react";
import { Divider } from "antd";
import { useLocation, useNavigate } from "react-router-dom";
import { menuItems } from "../../Routes";
import { MdLogout } from "react-icons/md";
import useAuthState from "../../zustand/AuthState";
import { hasAbility } from "../../utils/hasAbility";
import { useTranslation } from "react-i18next";
import { getLocalStorage } from "../../utils/LocalStorage";
import { BRANCH_OBJECT_KEY, TOKEN_KEY } from "../../config/AppKey";
import { MenuItem } from "../../Components/Layout/SideBar/MenuItem";
import { CiMenuBurger, CiSettings } from "react-icons/ci";
import { IoIosMenu } from "react-icons/io";
import { HiMenuAlt2, HiMenuAlt3 } from "react-icons/hi";
import { RoleByType } from "../../utils/RoleByType";
import { useFilterStateState } from "../../zustand/Filter";
import { useLogoutAdmin } from "../../api/users";

const SideBar = ({
  isOpen,
  setIsOpen,
}: {
  isOpen: boolean;
  setIsOpen: any;
}) => {
  const location = useLocation();
  const navigate = useNavigate();
  const { logout } = useAuthState();
  const { mutate } = useLogoutAdmin();
  const token = localStorage.getItem(TOKEN_KEY);
  
  const [t] = useTranslation();
  const handleLogout = () => {
    mutate({token})
  }
  const toggleSidebar = () => {
    setIsOpen((prev: boolean) => !prev);
  };

  return (
    <div className={isOpen ? "side_bar" : "side_bar side_bar_closed"}>
      <div className="side_bar_header">
        <img src={"/App/Logo.png"} alt="" />
        <HiMenuAlt3 onClick={toggleSidebar} />
      </div>
      <HiMenuAlt2
        className="side_bar_close_menu"
        style={isOpen ? { display: "none" } : { display: "inline" }}
        onClick={toggleSidebar}
      />
      <div className="side_bar_links">
        <p>{t("sidebar.main_menu")}</p>
        {menuItems.map((item, index) => {
          // const useAbility = hasAbility(item.abilities, item.abilities_value);
          // if (!useAbility) {
          //   return <React.Fragment key={index}></React.Fragment>;
          // }
          // if (!RoleByType(item)) {
          //   return <React.Fragment key={index}></React.Fragment>;
          // }
          return (
            <MenuItem
              key={index}
              item={item}
              location={location}
              index={index}
              isOpen={isOpen}
            />
          );
        })}
      </div>
      <div className="side_bar_setting">
        <p>{t("sidebar.setting")}</p>
        <div>
          <CiSettings />
          <span>{t("sidebar.setting")}</span>
        </div>
        <div
          className="logout_button"
          onClick={() => {
            handleLogout()
            logout();
            navigate("/auth");
          }}
        >
          <MdLogout />
          <span>{t("sidebar.logout")}</span>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
