import { useTranslation } from "react-i18next";
import { lazy, Suspense } from "react";
import { Spin } from "antd";
import useSetPageTitle from "../../../Hooks/useSetPageTitle";
import { ModalEnum } from "../../../enums/Model";
import { useDeleteStudent } from "../../../api/student";
import PageHeader from "../../../Layout/Dashboard/PageHeader";
import { canAddStudent } from "../../../utils/hasAbilityFn";
import FilterLayout from "../../../Layout/Dashboard/FilterLayout";
import FilterForm from "./Model/FilterForm";

const Table = lazy(() => import("./Table"));
const AddModalForm = lazy(() => import("./Model/AddModel"));
const EditModalForm = lazy(() => import("./Model/EditModel"));
const DeleteModalForm = lazy(
  () => import("../../../Layout/Dashboard/DeleteModels"),
);

const TableHeader = () => {
  const [t] = useTranslation();
  const deleteMutation = useDeleteStudent();

  useSetPageTitle([
    { name: `${t(`page_header.home`)}`, path: "/" },
    { name: `${t(`page_header.student`)}`, path: "student" },
  ]);
  return (
    <div className="TableWithHeader">
      <Suspense fallback={<Spin />}>
        <PageHeader
          pageTitle="users"
          ModelAbility={ModalEnum?.STUDENT_ADD}
          canAdd={canAddStudent}
        />
        <FilterLayout
          sub_children={<FilterForm />}
          filterTitle="table.student"
        />
        <Table />
        <AddModalForm />
        <EditModalForm />
        <DeleteModalForm
          deleteMutation={deleteMutation}
          ModelEnum={ModalEnum?.STUDENT_DELETE}
        />
      </Suspense>
    </div>
  );
};

export default TableHeader;
