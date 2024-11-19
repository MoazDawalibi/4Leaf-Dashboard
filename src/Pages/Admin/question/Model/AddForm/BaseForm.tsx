import { Form, Formik } from "formik";
import { useTranslation } from "react-i18next";
import { MdOutlineArrowForwardIos } from "react-icons/md";
import { getInitialValuesBase, getValidationSchemaBase } from "../../formUtil";
import Header from "../../../../../Components/exercise/Header";
import { useNavigate } from "react-router-dom";
import { Spin } from "antd";
import BaseForm from "../../Model/Malty/Form";

const BaseFormContainer = ({
  handleFormSubmit,
  Loading,
  handleValidateBaseQuestion,
}: {
  handleFormSubmit: any;
  Loading: any;
  handleValidateBaseQuestion: any;
}) => {
  const [t] = useTranslation();
  const navigate = useNavigate();

  const handleNavigateToPage = () => {
    const cleanedUrl = location.pathname?.replace("/Question/add", "");
    navigate(cleanedUrl);
  };
  const handleCancel = () => {
    navigate(-1);
  };

  return (
    <div className="QuestionPractical">
      <header>
        <MdOutlineArrowForwardIos onClick={handleNavigateToPage} />{" "}
        {t("header.add_new_question")}
      </header>

      <div className="exercise_add">
        <Formik
          onSubmit={handleFormSubmit}
          initialValues={getInitialValuesBase({} as any)}
          validationSchema={getValidationSchemaBase}
          enableReinitialize
        >
          {({ values, isValid, handleSubmit, dirty }) => (
            <Form className="w-100">
              <main className="w-100 exercise_add_main">
                <Header />
                <BaseForm />

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
                  >
                    {t("practical.add")}

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
