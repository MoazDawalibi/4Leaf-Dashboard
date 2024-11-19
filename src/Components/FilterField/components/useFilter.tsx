import React, { useCallback, useState } from "react";
import "../styles/index.scss";
import CustomInput from "../design-system/CustomInput";
import { Button } from "antd";
import { useTranslation } from "react-i18next";

interface IFilterBody {
  children: React.ReactNode;
}

const useFilter = () => {
  const [isBodyVisible, setIsBodyVisible] = useState(true);

  const toggleBodyVisibility = () => {
    setIsBodyVisible((prev) => !prev);
  };

  const FilterButton = () => {
    return (
      <button onClick={toggleBodyVisibility}>
        {isBodyVisible ? "Hide Filter" : "Show Filter"}
      </button>
    );
  };

  const FilterBody = ({ children }: IFilterBody) => {
    const [values, setValues] = useState({ name1: "", name2: "" });
    const handleChange = useCallback(
      (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setValues((prev) => ({ ...prev, [name]: value }));
      },
      [],
    );

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
      event.preventDefault();
      console.log(values, "values");
    };

    const [t] = useTranslation();
    return (
      <div className={`filter_body ${isBodyVisible ? "visible" : "hidden"}`}>
        <form onSubmit={handleSubmit}>
          {children}
          <CustomInput
            name="name1"
            value={values.name1}
            onChange={handleChange}
          />
          <CustomInput
            name="name2"
            value={values.name2}
            onChange={handleChange}
          />
          <Button block htmlType="submit" type="primary">
            {" "}
            {t("practical.submit")}{" "}
          </Button>
        </form>
      </div>
    );
  };

  return {
    FilterButton,
    FilterBody,
  };
};

export default useFilter;
