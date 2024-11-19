import { useTranslation } from "react-i18next";
import useSetPageTitle from "../../../Hooks/useSetPageTitle";
import PageHeader from "../../../Layout/Dashboard/PageHeader";
import { Suspense } from "react";
import { Spin } from "antd";
import { ModalEnum } from "../../../enums/Model";
import { canAddReSeller } from "../../../utils/hasAbilityFn";
import { Formik, Form } from "formik";
import { getInitialValues, getValidationSchema } from "./Form/formUtils";
import PersonalDetailsForm from "./Form/PersonalDetailsForm";
import TitleDetailsForm from "./Form/TitleDetailsForm";
import AttachmentForm from "./Form/AttachmentForm";
import PasswordDetailsForm from "./Form/PasswordDetailsForm";

const Page = () => {
  const [t] = useTranslation();
  useSetPageTitle(t(`page_header.add_reseller`));
  const handelSubmit = (values: any) => {
    console.log(values, "values");
  };
  useSetPageTitle([
    { name: `${t(`page_header.home`)}`, path: "/" },
    { name: `${t(`page_header.profile`)}`, path: "tag" },
  ]);
  return (
    <div className="TableWithHeader profile">
      <Suspense fallback={<Spin />}>
        <PageHeader
          pageTitle="profile"
          ModelAbility={ModalEnum?.RE_SELLER_ADD}
          canAdd={false}
        />
        <div>
          <Formik
            initialValues={getInitialValues({})}
            validationSchema={getValidationSchema}
            onSubmit={handelSubmit}
          >
            <Form className="Form_details_container">
              <PersonalDetailsForm />
              <TitleDetailsForm />
              <PasswordDetailsForm />
              <AttachmentForm />
              {/* <div className="resellerButton">
                <button type="button">{t("practical.cancel")}</button>
                <button type="submit">
                  {t("practical.add")} {t("models.reseller")}
                </button>
              </div> */}
            </Form>
          </Formik>
        </div>
      </Suspense>
    </div>
  );
};

export default Page;
