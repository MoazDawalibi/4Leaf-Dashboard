import { Select, Spin } from "antd";
import React, { useEffect, useState } from "react";
import useFormField from "../../../Hooks/useFormField";
import { ValidationFieldLabel } from "../components/ValidationFieldLabel";
import { ValidationFieldContainer } from "../components/ValidationFieldContainer";
import { SearchFieldProps } from "../utils/types";
import { useValidationValidationParamState } from "../state/ValidationValidationParamState";
import { useDebounce } from "../../../utils/useDebounce";

const SearchField = ({
  name,
  label,
  placeholder,
  isDisabled,
  searchBy = "search",
  option = [],
  isMulti,
  onChange,
  className,
  no_label,
  label_icon,
  isLoading,
  canChangePage,
  PageName,
  page,
  ...props
}: SearchFieldProps) => {
  const { errorMsg, isError, t, formik } = useFormField(name, props);
  const { pushValidationParamState, setValidationParamState } =
    useValidationValidationParamState();

  const [AllPagesOption, setAllPagesOption] = useState<any>([]);

  useEffect(() => {
    if (option?.length > 0) {
      const NewOption = [...option, ...AllPagesOption];
      const FilteredOption = NewOption.filter(
        (value, index, self) =>
          index === self.findIndex((t) => t.id === value.id),
      );
      const sortedNewOption = FilteredOption.sort((a, b) => a.id - b.id);
      setAllPagesOption(sortedNewOption);
    }
  }, [option]);
  useEffect(() => {
    if (page === 1) {
      setAllPagesOption(option);
    }
  }, [page]);

  const SelectableChange = (value: any, option: any) => {
    if (isMulti) {
      formik?.setFieldValue(name, option ?? []);
    } else {
      formik?.setFieldValue(name, option ?? {});
    }

    const isCleared = value?.length === 0 || !value;

    if (isCleared) {
      if (PageName) {
        setValidationParamState({
          [PageName]: 1,
        });
      }
    }
    console.log(value, "value");
  };

  const handleChange = useDebounce((value: string) => {
    if (PageName) {
      pushValidationParamState({
        [PageName]: 1,
      });
    }
    pushValidationParamState({
      [searchBy]: value,
    });
  });

  const handleBlur = () => {
    if (PageName && page === 1) {
      setValidationParamState({
        [PageName]: null,
      });
    }
    if (PageName && page !== 1) {
      setValidationParamState({
        [PageName]: 1,
      });
      // setAllPagesOption([]);
    }
  };

  const handleScroll = (event: any) => {
    const target = event.target;
    const isAtBottom =
      target.scrollHeight - 10 <=
      Math.floor(target.scrollTop + target.clientHeight);

    if (isAtBottom && canChangePage && PageName && page) {
      console.log("Scrolled to the last option!");
      let newPage = page + 1;
      pushValidationParamState({
        [PageName]: newPage,
      });
    }
  };

  console.log(AllPagesOption);
  console.log(option, "option");
  const value = isMulti
    ? formik.values[name]?.map((item: any) => {
        return item?.name ?? item;
      })
    : (formik.values[name]?.["name"] ?? "");
  console.log(value);

  return (
    <div className="ValidationField w-100">
      <ValidationFieldLabel
        name={name}
        label={label}
        label_icon={label_icon}
        no_label={no_label}
        placeholder={placeholder}
        t={t}
      />
      <ValidationFieldContainer isError={isError} errorMsg={errorMsg}>
        <Select
          placeholder={t(`input.${placeholder || label || name}`)}
          disabled={isDisabled}
          options={AllPagesOption}
          size="large"
          className={`${className} w-100`}
          value={value}
          loading={isLoading}
          allowClear
          {...(isMulti && { mode: "multiple" })}
          onChange={onChange || SelectableChange}
          showSearch
          optionFilterProp="name"
          notFoundContent={isLoading ? <Spin /> : t("validation.undefined")}
          onSearch={handleChange}
          onBlur={handleBlur}
          id={name}
          onPopupScroll={handleScroll}
          fieldNames={{ label: "name", value: "name" }}
          {...props}
        />
      </ValidationFieldContainer>
    </div>
  );
};

export default React.memo(SearchField);
