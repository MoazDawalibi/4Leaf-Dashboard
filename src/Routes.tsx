import { TCrudRoute, TMenuItem } from "./types/App";
import {
  FaCashRegister,
  FaCity,
  FaHome,
  FaMonero,
  FaMoneyBill,
  FaPaperclip,
  FaSellcast,
  FaTag,
  FaUser,
  FaUserShield,
} from "react-icons/fa";
import { GoDotFill } from "react-icons/go";
import { MdOutlineSell } from "react-icons/md";
import { CgProfile } from "react-icons/cg";
import { GrGroup } from "react-icons/gr";
import React from "react";

const Dummy = React.lazy(() => import("./Pages/Home/Dummy"));


import { hasAbility } from "./utils/hasAbility";
import { ABILITIES_ENUM, ABILITIES_VALUES_ENUM } from "./enums/abilities";
import { ParamsEnum } from "./enums/params";
import { TbCategory } from "react-icons/tb";
import { UserTypeEnum } from "./enums/UserType";
import { FaTags } from "react-icons/fa6";
import { CiSquareQuestion } from "react-icons/ci";
import { IoNotifications } from "react-icons/io5";

export const menuItems: TMenuItem[] = [
  // {
  //   header: "page_header.dashboard",
  //   element: <Dummy />,
  //   icon: <FaHome />,
  //   text: "sidebar.dashboard",
  //   path: "/",
  //   abilities: ABILITIES_ENUM?.PASS,
  //   abilities_value: ABILITIES_VALUES_ENUM.INDEX,
  //   type: UserTypeEnum?.PASS,
  //   prevPath: 0,
  // },
];

export const CrudRoute: TCrudRoute[] = [
  // {
  //   header: "page_header.Subject",
  //   element: <Subject />,
  //   path: `/${ABILITIES_ENUM?.GRADE}/:${ParamsEnum?.GRADE_ID}`,
  //   abilities: ABILITIES_ENUM?.SUBJECT,
  //   abilities_value: ABILITIES_VALUES_ENUM.INDEX,
  //   prevPath: 1,
  // },

];

export const AppRoutes: Record<string, string> = Object.fromEntries(
  menuItems.map((route) => [
    route.path,
    route.header ? route.header : route.text,
  ]),
);

export const CrudRoutes: any = Object.fromEntries(
  CrudRoute.map((route) => [route?.path, route?.header]),
);
export const search_array: { label: string; value: string; type: string }[] =
  menuItems
    ?.filter((item: TMenuItem) => {
      return hasAbility(item.abilities, item.abilities_value);
    })
    .map((item: TMenuItem) => ({
      label: item.header as string,
      value: item.path as string,
      type: item.type ? item.type : "admin",
    }));

const AllRoute = [...menuItems, ...CrudRoute];

export const PrevRoutes: any = AllRoute.map((route) => ({
  path: route.path,
  prevPath: route.prevPath,
}));
