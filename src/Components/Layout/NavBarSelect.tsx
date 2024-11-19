import React, { useState } from "react";
import { CYCLE_OBJECT_KEY, TERM_OBJECT_KEY } from "../../config/AppKey";
import { Select } from "antd";
import { useGetAllTerm } from "../../api/term";
import { getLocalStorage } from "../../utils/LocalStorage";
import { useTranslation } from "react-i18next";
import useAuthState from "../../zustand/AuthState";
import useFormatCycleDataToSelect from "../../utils/useFormatCycleDataToSelect";

const NavBarSelect = () => {
  const [value, setValue] = useState(null);
  const cycle_id = getLocalStorage(CYCLE_OBJECT_KEY)?.id;
  const term_id = getLocalStorage(TERM_OBJECT_KEY)?.id;
  const { setTerm } = useAuthState();

  const [t] = useTranslation();

  const { data: TermData } = useGetAllTerm(
    { cy_id: cycle_id },
    { enabled: !!cycle_id },
  );

  const BranchTermData = useFormatCycleDataToSelect(TermData?.data);

  const handleSelectChange = (value: any, option: any) => {
    setValue(value);
    localStorage.setItem(TERM_OBJECT_KEY, JSON.stringify(option));
    setTerm(option?.id);
  };

  return (
    <div className="NavBarSelect">
      <Select
        style={{ width: "100%" }}
        onChange={handleSelectChange}
        options={BranchTermData}
        className="Auth_Select"
        placeholder={t("input.School_Term")}
        defaultValue={term_id}
      />
    </div>
  );
};

export default NavBarSelect;
