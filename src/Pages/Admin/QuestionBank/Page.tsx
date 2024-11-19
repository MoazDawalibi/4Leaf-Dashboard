import { useTranslation } from "react-i18next";
import { lazy, Suspense } from "react";
import { Spin } from "antd";
import useSetPageTitle from "../../../Hooks/useSetPageTitle";
import { ModalEnum } from "../../../enums/Model";
import { useDeleteQuestion } from "../../../api/Question";
import PageHeader from "../../../Layout/Dashboard/PageHeader";
import FilterLayout from "../../../Layout/Dashboard/FilterLayout";
import FilterForm from "./Model/FilterForm";

const Table = lazy(() => import("./Table"));
const DeleteModalForm = lazy(
  () => import("../../../Layout/Dashboard/DeleteModels"),
);

const TableHeader = () => {
  const [t] = useTranslation();
  const deleteMutation = useDeleteQuestion();

  useSetPageTitle([
    { name: `${t(`page_header.home`)}`, path: "/" },
    { name: `${t(`page_header.Question`)}`, path: "Question" },
  ]);
  return (
    <div className="TableWithHeader">
      <Suspense fallback={<Spin />}>
        <PageHeader
          pageTitle="QuestionBank"
          ModelAbility={ModalEnum?.QUESTION_BANK_ADD}
          canAdd={false}
        />
        <FilterLayout
          width="700px"
          search_by="content"
          sub_children={<FilterForm />}
          filterTitle="table.QuestionBank"
        />
        <Table />
        <DeleteModalForm
          deleteMutation={deleteMutation}
          ModelEnum={ModalEnum?.QUESTION_BANK_DELETE}
        />
      </Suspense>
    </div>
  );
};

export default TableHeader;
