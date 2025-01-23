import React from "react";
import { getLocalStorage } from "../../../utils/LocalStorage";
import { USER_KEY } from "../../../config/AppKey";
import { translateOptions } from "../../../utils/translatedOptions";
import { search_array } from "../../../Routes";
import { useTranslation } from "react-i18next";
import SearchFieldWithSelect from "../../DataTable/SearchFieldWithSelect";
import { Tooltip } from "antd";
import useModalHandler from "../../../utils/useModalHandler";
import { ModalEnum } from "../../../enums/Model";
import Image from "../../Ui/Image";
import { BsPlus } from "react-icons/bs";
import { IoIosNotificationsOutline } from "react-icons/io";
import { CiCirclePlus } from "react-icons/ci";
import { TbWorld } from "react-icons/tb";
import TooltipComp from "./Tooltip";
import { useNavigate } from "react-router-dom";

const NavBarRightSide = () => {
  const userData = getLocalStorage(USER_KEY);
  const [t] = useTranslation();
  const Navigate = useNavigate();
  // const translateArray = translateOptions(search_array, t);

  const { handel_open_model } = useModalHandler();

  return (
    <article>
      <span className="header_icons">
        <TooltipComp
          note="change_language"
          color="#E0E0E0"
          icon={<TbWorld size={25} />}
        />
        <TooltipComp
          note="add"
          color="#E0E0E0"
          icon={<CiCirclePlus size={25} />}
        />
        <TooltipComp
          // onClick={() => Navigate("/notifications")}
          className="NotificationsIcon"
          note="notification"
          color="#E0E0E0"
          icon={
            <>
              {" "}
              <IoIosNotificationsOutline size={25} />{" "}
            </>
          }
        />
      </span>
      <div className="header_profile">
        {/* <span>
          <h6>{userData?.username}</h6>
          <p>{userData?.type}</p>
        </span> */}
        <Image
          // onClick={()=>(Navigate('/profile'))}
          src="/Image/faker_user.png"
          alt="Profile"
        />
      </div>
    </article>
  );
};

export default NavBarRightSide;
