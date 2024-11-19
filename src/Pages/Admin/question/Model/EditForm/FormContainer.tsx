import { Form, Formik } from "formik";
import { MdOutlineArrowForwardIos } from "react-icons/md";
import { useLocation, useNavigate } from "react-router-dom";
import { getInitialValues, getValidationSchema } from "../../formUtil";
import { Checkbox, Popover, Spin } from "antd";
import { SettingFilled } from "@ant-design/icons";
import { CheckboxProps } from "antd/lib";
import { LocalStorageEnum } from "../../../../../enums/LocalStorageEnum";
import { useObjectToEdit } from "../../../../../zustand/ObjectToEditState";
import ModelForm from "../../Model/ModelForm";

const FormContainer = ({
  objectToEdit,
  handleSubmit,
  Loading,
  handleValidateSingleQuestion,
  t,
}: {
  objectToEdit: any;
  handleSubmit: any;
  Loading: any;
  handleValidateSingleQuestion: any;
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
    setObjectToEdit({});
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
          enableReinitialize={true}
          initialValues={getInitialValues(objectToEdit)}
          validationSchema={getValidationSchema}
          onSubmit={(values) => {
            handleSubmit(values);
          }}
        >
          {({ values, dirty, isValid, handleSubmit }) => (
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
                  <div
                    className={`relative ${dirty ? "" : "disabled"}`}
                    onClick={() => {
                      Loading
                        ? () => {}
                        : handleValidateSingleQuestion(
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
                  </div>
                </div>
              </main>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default FormContainer;
