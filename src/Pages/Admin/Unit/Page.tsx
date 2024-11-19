import { useTranslation } from "react-i18next";
import { lazy, Suspense } from "react";
import { Spin } from "antd";
import { useParams } from "react-router-dom";
import { ParamsEnum } from "../../../enums/params";
import { useGetAllSubject } from "../../../api/subject";
import useSetPageTitle from "../../../Hooks/useSetPageTitle";
import { ModalEnum } from "../../../enums/Model";
import { useDeleteUnit } from "../../../api/unit";
import { useGetAllGrade } from "../../../api/grade";
import PageHeader from "../../../Layout/Dashboard/PageHeader";
import FilterLayout from "../../../Layout/Dashboard/FilterLayout";
import FilterForm from "./Model/FilterForm";
import { canAddUnit } from "../../../utils/hasAbilityFn";

const Table = lazy(() => import("./DrapableTable"));
const AddModalForm = lazy(() => import("./Model/AddModel"));
const EditModalForm = lazy(() => import("./Model/EditModel"));
const DeleteModalForm = lazy(
  () => import("../../../Layout/Dashboard/DeleteModels"),
);

const TableHeader = () => {
  const [t] = useTranslation();
  const deleteMutation = useDeleteUnit();

  const { subject_id, grade_id } = useParams<ParamsEnum>();

  const { data: Subject } = useGetAllSubject({
    show: subject_id,
  });

  const { data: grade } = useGetAllGrade({
    show: grade_id,
  });

  const gradeName = grade?.data?.name ?? "";
  const SubjectName = Subject?.data?.name ?? "";
  useSetPageTitle([
    { name: `${t(`page_header.home`)}`, path: "/" },
    { name: `${t(`page_header.grade`)}`, path: "grade" },
    {
      name: ` ${t("header.subject_of_class")} (${gradeName})`,
      path: `grade/${grade_id}`,
    },
    { name: SubjectName, path: `subject/${subject_id}` },
  ]);

  return (
    <div className="TableWithHeader">
      <Suspense fallback={<Spin />}>
        <PageHeader
          pageTitle="grade"
          ModelAbility={ModalEnum?.UNIT_ADD}
          canAdd={canAddUnit}
        />
        <FilterLayout
          sub_children={<FilterForm />}
          filterTitle={` ${gradeName} (${SubjectName}) `}
        />
        <Table />
        <AddModalForm />
        <EditModalForm />
        <DeleteModalForm
          deleteMutation={deleteMutation}
          ModelEnum={ModalEnum?.UNIT_DELETE}
        />
      </Suspense>
    </div>
  );
};

export default TableHeader;
