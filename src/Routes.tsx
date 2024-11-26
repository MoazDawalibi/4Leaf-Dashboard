import { TCrudRoute, TMenuItem } from "./types/App";
import {
  FaCashRegister,
  FaCity,
  FaHome,
  FaInfo,
  FaMonero,
  FaMoneyBill,
  FaPaperclip,
  FaSellcast,
  FaTag,
  FaUser,
  FaUsers,
  FaUserShield,
} from "react-icons/fa";
import { GoDotFill } from "react-icons/go";
import { MdOutlineSell } from "react-icons/md";
import { CgProfile } from "react-icons/cg";
import { GrGroup } from "react-icons/gr";
import React from "react";

const Dummy = React.lazy(() => import("./Pages/Home/Dummy"));
const ShippingFees = React.lazy(() => import("./Pages/ShippingFees/Page"));
const Customers = React.lazy(() => import("./Pages/customers/Page"));
const Category = React.lazy(() => import("./Pages/Category/Page"));
const User = React.lazy(() => import("./Pages/users/Page"));
const StaticInfo = React.lazy(() => import("./Pages/StaticInfo/Page"));







import { hasAbility } from "./utils/hasAbility";
import { ABILITIES_ENUM, ABILITIES_VALUES_ENUM } from "./enums/abilities";
import { ParamsEnum } from "./enums/params";
import { TbCategory } from "react-icons/tb";
import { UserTypeEnum } from "./enums/UserType";
import { FaTags } from "react-icons/fa6";
import { CiSquareQuestion } from "react-icons/ci";
import { IoNotifications } from "react-icons/io5";

export const menuItems: TMenuItem[] = [
  {
    header: "page_header.dashboard",
    element: <Dummy />,
    icon: <FaHome />,
    text: "sidebar.dashboard",
    path: "/",
    abilities: ABILITIES_ENUM?.PASS,
    abilities_value: ABILITIES_VALUES_ENUM.INDEX,
    type: UserTypeEnum?.PASS,
    prevPath: 0,
  },

  {
    header: "page_header.shipping_fees",
    element: <ShippingFees />,
    icon: <FaMoneyBill />,
    text: "sidebar.shipping_fees",
    path: "/shipping_fees",
    abilities: ABILITIES_ENUM?.ShippingFees,
    abilities_value: ABILITIES_VALUES_ENUM.INDEX,
    type: UserTypeEnum?.PASS,
    prevPath: 0,
  },

  {
    header: "page_header.customers",
    element: <Customers />,
    icon: <FaUsers />,
    text: "sidebar.customers",
    path: "/customers",
    abilities: ABILITIES_ENUM?.Customers,
    abilities_value: ABILITIES_VALUES_ENUM.INDEX,
    type: UserTypeEnum?.PASS,
    prevPath: 0,
  },

  {
    header: "page_header.category",
    element: <Category />,
    icon: <FaUsers />,
    text: "sidebar.category",
    path: "/category",
    abilities: ABILITIES_ENUM?.Category,
    abilities_value: ABILITIES_VALUES_ENUM.INDEX,
    type: UserTypeEnum?.PASS,
    prevPath: 0,
  },

  {
    header: "page_header.user",
    element: <User />,
    icon: <FaUsers />,
    text: "sidebar.users",
    path: "/user",
    abilities: ABILITIES_ENUM?.User,
    abilities_value: ABILITIES_VALUES_ENUM.INDEX,
    type: UserTypeEnum?.PASS,
    prevPath: 0,
  },

  {
    header: "page_header.static_info",
    element: <StaticInfo />,
    icon: <FaInfo />,
    text: "sidebar.static_infos",
    path: "/static_info",
    abilities: ABILITIES_ENUM?.StaticInfo,
    abilities_value: ABILITIES_VALUES_ENUM.INDEX,
    type: UserTypeEnum?.PASS,
    prevPath: 0,
  },
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
