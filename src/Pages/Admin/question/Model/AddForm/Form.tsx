import { Form, Formik, useFormikContext } from "formik";
import { useTranslation } from "react-i18next";
import { MdOutlineArrowForwardIos } from "react-icons/md";
import { getInitialValues, getValidationSchema } from "../../formUtil";
import Header from "../../../../../Components/exercise/Header";
import { useNavigate } from "react-router-dom";
import { Spin } from "antd";
import ModelForm from "../../Model/ModelForm";

const FormContainer = ({
  handleFormSubmit,
  Loading,
  handleValidateSingleQuestion,
}: {
  handleFormSubmit: any;
  Loading: any;
  handleValidateSingleQuestion: any;
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
          enableReinitialize={true}
          initialValues={getInitialValues({} as any)}
          validationSchema={getValidationSchema}
          validateOnMount={true}
          onSubmit={(values) => {
            handleFormSubmit(values);
          }}
        >
          {({ values, isValid, handleSubmit, dirty }) => (
            <Form className="w-100">
              <main className="w-100 exercise_add_main">
                <Header />
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
                    {t("practical.add")}

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
