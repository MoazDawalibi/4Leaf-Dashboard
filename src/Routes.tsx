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

const Grade = React.lazy(() => import("./Pages/Admin/Grade/Page"));
const City = React.lazy(() => import("./Pages/Admin/City/Page"));
const Area = React.lazy(() => import("./Pages/Admin/Area/Page"));

const Subject = React.lazy(() => import("./Pages/Admin/subject/Table/Page"));
const Tags = React.lazy(() => import("./Pages/Admin/Tags/Page"));
const Unit = React.lazy(() => import("./Pages/Admin/Unit/Page"));
const Lesson = React.lazy(() => import("./Pages/Admin/lesson/Page"));

const Question = React.lazy(() => import("./Pages/Admin/question/Page"));
const AddQuestionPage = React.lazy(
  () => import("./Pages/Admin/question/AddPage"),
);
const EditQuestionPage = React.lazy(
  () => import("./Pages/Admin/question/EditPage"),
);

const Student = React.lazy(() => import("./Pages/Admin/Student/Page"));
const ShowStudent = React.lazy(() => import("./Pages/Admin/Student/show/Page"));
const Manager = React.lazy(() => import("./Pages/Admin/Manager/Page"));
const AddManager = React.lazy(() => import("./Pages/Admin/Manager/Add/Page"));
const EditManager = React.lazy(() => import("./Pages/Admin/Manager/Edit/Page"));

const FinancialCollection = React.lazy(
  () => import("./Pages/Admin/FinancialCollection/Page"),
);

const ReSeller = React.lazy(() => import("./Pages/Admin/Reseller/Page"));
const ShowReSeller = React.lazy(
  () => import("./Pages/Admin/Reseller/show/Page"),
);
const AddReSeller = React.lazy(() => import("./Pages/Admin/Reseller/Add/Page"));
const EditReSeller = React.lazy(
  () => import("./Pages/Admin/Reseller/Edit/Page"),
);

const User = React.lazy(() => import("./Pages/Admin/User/Page"));
const QuestionBank = React.lazy(
  () => import("./Pages/Admin/QuestionBank/Page"),
);
const AllNotifications = React.lazy(
  () => import("./Pages/Admin/Notifications/Page"),
);
const Notifications = React.lazy(
  () => import("./Pages/Admin/Notifications/AddNotification/Page"),
);
const AddNotification = React.lazy(
  () => import("./Pages/Admin/Notifications/AddNotification/Add/Page"),
);

const Profile = React.lazy(() => import("./Pages/Admin/Profile/Page"));
const Setting = React.lazy(() => import("./Pages/Admin/Setting/Page"));

const Permissions = React.lazy(
  () => import("./Pages/Admin/Roles/Permissions/Page"),
);
const Roles = React.lazy(() => import("./Pages/Admin/Roles/Page"));
const Coupon = React.lazy(() => import("./Pages/Admin/Coupon/Page"));

const Report = React.lazy(() => import("./Pages/Admin/Report/Page"));
const ShowReport = React.lazy(() => import("./Pages/Admin/Report/Show/Page"));
const Param = React.lazy(() => import("./Pages/Admin/Param/Page"));


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
    header: "page_header.user",
    element: <User />,
    icon: <FaUser />,
    text: "sidebar.users",
    path: `/${ABILITIES_ENUM?.USER}`,
    abilities: ABILITIES_ENUM?.USER,
    abilities_value: ABILITIES_VALUES_ENUM.INDEX,
    prevPath: 0,
    children: [
      {
        header: "page_header.student",
        element: <Student />,
        icon: <GoDotFill className="transparent_bg" />,
        text: "sidebar.student",
        path: `/${ABILITIES_ENUM?.STUDENT}`,
        abilities: ABILITIES_ENUM?.STUDENT,
        abilities_value: ABILITIES_VALUES_ENUM.INDEX,
        prevPath: 0,
      },
      {
        header: "page_header.managers",
        element: <Manager />,
        icon: <GoDotFill className="transparent_bg" />,
        text: "sidebar.managers",
        path: `/${ABILITIES_ENUM?.MANAGERS}`,
        abilities: ABILITIES_ENUM?.MANAGERS,
        abilities_value: ABILITIES_VALUES_ENUM.INDEX,
        prevPath: 0,
      },
    ],
  },
];

export const CrudRoute: TCrudRoute[] = [
  {
    header: "page_header.Subject",
    element: <Subject />,
    path: `/${ABILITIES_ENUM?.GRADE}/:${ParamsEnum?.GRADE_ID}`,
    abilities: ABILITIES_ENUM?.SUBJECT,
    abilities_value: ABILITIES_VALUES_ENUM.INDEX,
    prevPath: 1,
  },

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
