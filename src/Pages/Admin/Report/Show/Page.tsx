import React from "react";
import ReportInfo from "./ReportInfo";
const EditQuestionPage = React.lazy(() => import("../../question/EditPage"));
const Page = () => {
  return (
    <>
      <ReportInfo />
      <EditQuestionPage />
    </>
  );
};

export default Page;
