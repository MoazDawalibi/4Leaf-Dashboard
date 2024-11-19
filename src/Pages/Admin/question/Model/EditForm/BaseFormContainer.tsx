import { Form, Formik } from "formik";
import React from "react";
import { MdOutlineArrowForwardIos } from "react-icons/md";
import { useLocation, useNavigate } from "react-router-dom";
import { getInitialValuesBase, getValidationSchemaBase } from "../../formUtil";
import { Checkbox, Popover, Spin } from "antd";
import { SettingFilled } from "@ant-design/icons";
import { CheckboxProps } from "antd/lib";
import { LocalStorageEnum } from "../../../../../enums/LocalStorageEnum";
import { useObjectToEdit } from "../../../../../zustand/ObjectToEditState";
import ModelForm from "../../Model/Malty/Form";

const BaseFormContainer = ({
  objectToEdit,
  handleSubmit,
  Loading,
  handleValidateBaseQuestion,
  t,
}: {
  objectToEdit: any;
  handleSubmit: any;
  Loading: any;
  handleValidateBaseQuestion: any;
  t: any;
}) => {
  const location = useLocation();
  const navigate = useNavigate();
  const {
    ShowHint,
    setShowHint,
    ShowLatexOption,
    setShowLatexOption,
    setObjectToEdit,
  } = useObjectToEdit();
  const handleCancel = () => {
    setObjectToEdit({});
    navigate(-1);
  };
  const handleNavigateToPage = () => {
    const cleanedUrl = location.pathname.replace(/\/Question\/\d+$/, "");
    navigate(cleanedUrl);
  };

  const onChangeHint: CheckboxProps["onChange"] = (e) => {
    setShowHint(e.target.checked);
    localStorage?.setItem(
      LocalStorageEnum.HINT_INPUT,
      e.target.checked ? "true" : "false",
    );
  };

  const onChangeLatexOption: CheckboxProps["onChange"] = (e) => {
    setShowLatexOption(e.target.checked);
    localStorage?.setItem(
      LocalStorageEnum.LATEX_OPTION_INPUT,
      e.target.checked ? "true" : "false",
    );
  };

  const contentSetting = (
    <div>
      <Checkbox checked={ShowHint} onChange={onChangeHint}>
        {t("header.show_hint")}
      </Checkbox>

      <Checkbox checked={ShowLatexOption} onChange={onChangeLatexOption}>
        {t("header.show_MMl")}
      </Checkbox>
    </div>
  );

  return (
    <div className="QuestionPractical">
      <header>
        <MdOutlineArrowForwardIos onClick={handleNavigateToPage} />{" "}
        {t("header.edit_question")}
      </header>

      <div className="exercise_add">
        <Formik
          onSubmit={handleSubmit}
          initialValues={getInitialValuesBase(objectToEdit)}
          validationSchema={getValidationSchemaBase}
          enableReinitialize
        >
          {({ values, isValid, handleSubmit, dirty }) => (
            <Form className="w-100">
              <main className="w-100 exercise_add_main">
                {/* <Header/> */}
                <header className="exercise_add_header mb-4">
                  <div>
                    {t("practical.edit")} {t("models.exercise")}{" "}
                  </div>
                  <div className="SettingEdit">
                    <Popover trigger="click" content={contentSetting}>
                      <SettingFilled />
                    </Popover>
                    <div>{t("header.exercise")}</div>
                  </div>
                </header>
                <ModelForm />
                <div className="exercise_add_buttons">
                  <div onClick={handleCancel}>{t("practical.back")}</div>
                  <button
                    disabled={Loading}
                    className={`relative ${dirty ? "" : "disabled"}`}
                    type="button"
                    onClick={() => {
                      handleValidateBaseQuestion(
                        values,
                        isValid,
                        handleSubmit,
                        t,
                      );
                    }}
                    onSubmit={() => {
                      handleValidateBaseQuestion(
                        values,
                        isValid,
                        handleSubmit,
                        t,
                      );
                    }}
                  >
                    {" "}
                    {t("practical.edit")}
                    {Loading && (
                      <span className="Spinier_Div">
                        <Spin />
                      </span>
                    )}
                  </button>
                </div>
              </main>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default BaseFormContainer;
