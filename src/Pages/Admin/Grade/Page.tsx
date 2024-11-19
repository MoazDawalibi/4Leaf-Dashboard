import { useTranslation } from "react-i18next";
import { lazy, Suspense } from "react";
import { Spin } from "antd";
import useSetPageTitle from "../../../Hooks/useSetPageTitle";
import { ModalEnum } from "../../../enums/Model";
import { useDeleteGrade } from "../../../api/grade";
import PageHeader from "../../../Layout/Dashboard/PageHeader";
import FilterLayout from "../../../Layout/Dashboard/FilterLayout";
import FilterForm from "./Model/FilterForm";
import { canAddGrade } from "../../../utils/hasAbilityFn";

const Table = lazy(() => import("./Table"));
const AddModalForm = lazy(() => import("./Model/AddModel"));
const EditModalForm = lazy(() => import("./Model/EditModel"));
const DeleteModalForm = lazy(
  () => import("../../../Layout/Dashboard/DeleteModels"),
);

const TableHeader = () => {
  const [t] = useTranslation();
  const deleteMutation = useDeleteGrade();

  useSetPageTitle([
    { name: `${t(`page_header.home`)}`, path: "/" },
    { name: `${t(`page_header.grade`)}`, path: "grade" },
  ]);

  return (
    <div className="TableWithHeader">
      <Suspense fallback={<Spin />}>
        <PageHeader
          pageTitle="grade"
          ModelAbility={ModalEnum?.GRADE_ADD}
          canAdd={canAddGrade}
        />
        <FilterLayout sub_children={<FilterForm />} filterTitle="table.grade" />
        <Table />
        <AddModalForm />
        <EditModalForm />
        <DeleteModalForm
          deleteMutation={deleteMutation}
          ModelEnum={ModalEnum?.GRADE_DELETE}
        />
      </Suspense>
    </div>
  );
};

export default TableHeader;
