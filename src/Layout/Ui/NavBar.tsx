import React, { lazy, Suspense } from "react";

import { useLocation, useNavigate } from "react-router-dom";
import { getPrevPathRoute } from "../../utils/getPrevPathRoute";
import { deletePathSegments } from "../../utils/deletePathSegments";
import NavBarRightSide from "../../Components/Layout/Navbar/NavBarRightSide";
import SearchFieldWithSelect from "../../Components/DataTable/SearchFieldWithSelect";
import { search_array } from "../../Routes";
import { translateOptions } from "../../utils/translatedOptions";
import { useTranslation } from "react-i18next";

// Lazy load the ChangePasswordModel
const ChangePasswordModel = lazy(() => import("./model/AddModel"));

const NavBar = ({ isOpen }: { isOpen: boolean }) => {
  const location = useLocation();
  const navigate = useNavigate();
  const PrevPath = getPrevPathRoute(location.pathname);
  const [t] = useTranslation();

  const translateArray = translateOptions(search_array, t);

  const handelNavigate = () => {
    if (PrevPath === 0) {
      return;
    }
    navigate(deletePathSegments(location.pathname, PrevPath));
  };

  return (
    <div className="NavBar">
      <Suspense fallback={<></>}>
        <div className="header_search">
          <SearchFieldWithSelect
            options={translateArray}
            placeholder={t("practical.search_here")}
            withIcon
          />
        </div>
        <NavBarRightSide />
        <ChangePasswordModel />
      </Suspense>
    </div>
  );
};

export default NavBar;
