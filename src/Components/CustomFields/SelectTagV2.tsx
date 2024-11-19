import React, { useState } from "react";
import { Select, Spin } from "antd";
import { useTranslation } from "react-i18next";
import { useDebounce } from "../../utils/useDebounce";
import { useGetAllTag } from "../../api/tags";
import { useFormikContext } from "formik";

const SelectTagV2: React.FC = () => {
  const [searchValue, setSearchValue] = useState<string>("");
  const [fieldValue, setFieldValue] = useState<string>("");
  const formik = useFormikContext<any>();

  // Fetch tags based on search value
  const { data, isLoading } = useGetAllTag({ name: searchValue });
  const { t } = useTranslation();

  // Get selected tags from Formik
  const CurrentTags = formik.values.tags ?? []; // Assuming tags are stored as array of objects
  console.log(CurrentTags, "CurrentTags");

  const NewShapeTags = CurrentTags?.map((item: any) => {
    return item?.name ?? item;
  });

  const handleChange = (_value: any[], option: any) => {
    // console.log(option,"option");
    console.log(_value);

    // const NewShapeOption = option?.map((item:any)=> {return ({name:item?.name,id:item?.id})})
    // console.log(NewShapeOption);

    // formik.setFieldValue("tags", NewShapeOption);
    // setSearchValue("");
    // setFieldValue("");
  };

  const handleSearch = useDebounce((value: string) => {
    setSearchValue(value);
  });

  const handleBlur = () => {
    setSearchValue("");
    setFieldValue("");
  };

  const options = data?.data ?? [];

  const additionalData =
    options.length < 1 && searchValue.length >= 1 && !isLoading
      ? [{ id: searchValue, name: searchValue }]
      : options;

  console.log(additionalData);

  return (
    <div className="SelectTag">
      <label>{t("models.tag")}</label>
      <Select
        mode="multiple"
        allowClear
        style={{ width: "100%", height: "40px" }}
        placeholder=""
        fieldNames={{ label: "name", value: "name" }}
        onChange={handleChange}
        options={additionalData}
        filterOption={false}
        loading={isLoading}
        notFoundContent={isLoading ? <Spin /> : t("practical.not_found")}
        onSearch={(value) => {
          handleSearch(value);
          setFieldValue(value);
        }}
        searchValue={fieldValue}
        onDropdownVisibleChange={(open) => {
          if (!open) {
            handleBlur();
          }
        }}
        value={NewShapeTags}
      />
    </div>
  );
};

export default SelectTagV2;
