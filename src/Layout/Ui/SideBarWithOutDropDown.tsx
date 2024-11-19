import React from "react";
import Image from "../../Components/Ui/Image";
import { Divider } from "antd";
import { Link, useLocation } from "react-router-dom";
import { menuItems } from "../../Routes";
import { MdLogout } from "react-icons/md";

const SideBar = () => {
  const location = useLocation();

  return (
    <div className="side_bar">
      {/* <div className='logo'>
        <Image src='../Layout/Logo.png' />
      </div>
    */}
      <h1>إعدادية أحمد الصباغ (للبنات)</h1>
      <Divider />
      <div className="side_bar_links">
        {menuItems?.map((item, index) => {
          // Check if the current path matches the item's path exactly
          const isActive =
            location.pathname.split("/")[1] == item.path?.slice(1);

          return (
            <div key={index} className={`link ${isActive ? "active" : ""}`}>
              <i>{item.icon}</i>
              <Link to={item.path || "/"}>{item.text}</Link>
            </div>
          );
        })}
      </div>
      <button>
        <MdLogout /> تسجيل الخروج
      </button>
    </div>
  );
};

export default SideBar;
