import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { Divider, Select } from "antd";
import usePagination from "../../Layout/Dashboard/usePagination";
import { useNavigate } from "react-router-dom";
import { useFilterStateState } from "../../zustand/Filter";

const PaginationColumn = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const { Filter, setFilter } = useFilterStateState();

  const handleChange = (value: string) => {
    navigate(`?per_page=${value}`);

    setFilter({
      per_page: value,
    });
  };

  return (
    <div className="pagination_column">
      <Select
        className="pagination_select"
        style={{ width: 70 }}
        size="large"
        defaultValue={"10"}
        placeholder={"10"}
        onChange={handleChange}
        options={[
          { value: "10", label: t("10") },
          { value: "20", label: t("20") },
          { value: "50", label: t("50") },
          { value: "100", label: t("100") },
        ]}
      />
    </div>
  );
};

export default PaginationColumn;
