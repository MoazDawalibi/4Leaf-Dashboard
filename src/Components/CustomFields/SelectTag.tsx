import React, { useState, useMemo } from "react";
import { Select, Spin } from "antd";
import { useTranslation } from "react-i18next";
import { useDebounce } from "../../utils/useDebounce";
import { useGetAllTag } from "../../api/tags";
import { useFormikContext } from "formik";

const SelectTag: React.FC = () => {
  const [searchValue, setSearchValue] = useState<string>("");

  const [fieldValue, setFieldValue] = useState<string>("");
  const [NewAdditionalData, setNewAdditionalData] = useState({});
  const formik = useFormikContext<any>();
  const handleChange = (value: any, option: any) => {
    console.log(option);
    console.log(value);
    const newSelectedOption = option?.pop();
    console.log(newSelectedOption);

    const newObject = {
      id: newSelectedOption?.id,
      name: newSelectedOption?.name,
    };
    setNewAdditionalData(newObject);
    formik.setFieldValue("tags", value);
    setSearchValue("");
    setFieldValue("");
  };

  const handleSearch = useDebounce((value: string) => {
    console.log(value, "value");

    setSearchValue(value);
  });

  const handleFieldChange = (value: string) => {
    setFieldValue(value);
  };

  const handleBlur = () => {
    setSearchValue("");
    setFieldValue("");
  };

  const { data, isLoading } = useGetAllTag({
    name: searchValue,
  });

  const [t] = useTranslation();
  const initialData =
    formik?.values?.tags?.filter((item: any) => {
      return item?.id;
    }) ?? [];

  const options = data?.data ?? [];
  const additionalData =
    options.length < 1 && searchValue.length > 1 && !isLoading
      ? [{ id: searchValue, name: searchValue }]
      : [];

  const value =
    formik?.values?.tags?.map((item: any) => item?.id ?? item) ?? [];

  const AllOptions = [
    ...options,
    ...additionalData,
    NewAdditionalData,
    ...initialData,
  ];

  const uniqueOptions = Array.from(
    new Map(
      AllOptions.filter((item) => Object.keys(item).length > 0) // Filter out empty objects
        .map((item) => [item.id, item]), // Create [id, item] pairs to ensure uniqueness
    ).values(),
  );

  return (
    <div className="SelectTag">
      <label htmlFor="">{t("models.tag")}</label>
      <Select
        mode="multiple"
        allowClear
        style={{ width: "100%", height: "40px" }}
        placeholder=""
        fieldNames={{ label: "name", value: "id" }}
        onChange={handleChange}
        options={uniqueOptions}
        filterOption={false}
        loading={isLoading}
        notFoundContent={isLoading ? <Spin /> : t("practical.not_found")}
        onSearch={(value) => {
          handleSearch(value);
          handleFieldChange(value);
        }}
        searchValue={fieldValue}
        onDropdownVisibleChange={(open) => {
          if (!open) {
            handleBlur();
          }
        }}
        value={value}
      />
    </div>
  );
};

export default SelectTag;
