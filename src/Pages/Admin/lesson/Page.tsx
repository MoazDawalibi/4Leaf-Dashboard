import { useTranslation } from "react-i18next";
import { lazy, Suspense } from "react";
import { Spin } from "antd";
import useSetPageTitle from "../../../Hooks/useSetPageTitle";
import { useParams } from "react-router-dom";
import { ParamsEnum } from "../../../enums/params";
import { useGetAllUnit } from "../../../api/unit";
import { ModalEnum } from "../../../enums/Model";
import { useDeleteLesson } from "../../../api/lesson";
import { useGetAllGrade } from "../../../api/grade";
import { useGetAllSubject } from "../../../api/subject";
import PageHeader from "../../../Layout/Dashboard/PageHeader";
import FilterLayout from "../../../Layout/Dashboard/FilterLayout";
import FilterForm from "./Model/FilterForm";
import { canAddLesson } from "../../../utils/hasAbilityFn";

const Table = lazy(() => import("./DrapableTable"));
const AddModalForm = lazy(() => import("./Model/AddModel"));
const EditModalForm = lazy(() => import("./Model/EditModel"));
const DeleteModelsForm = lazy(
  () => import("../../../Layout/Dashboard/DeleteModels"),
);

const TableHeader = () => {
  const [t] = useTranslation();
  const deleteMutation = useDeleteLesson();

  const { unit_id, grade_id, subject_id } = useParams<ParamsEnum>();
  const { data: unit } = useGetAllUnit({ show: unit_id });

  const { data: Subject } = useGetAllSubject({
    show: subject_id,
  });
  const { data: grade } = useGetAllGrade({
    show: grade_id,
  });

  const gradeName = grade?.data?.name ?? "";
  const SubjectName = Subject?.data?.name ?? "";
  const unitName = unit?.data?.name ?? "";

  useSetPageTitle([
    { name: `${t(`page_header.home`)}`, path: "/" },
    { name: `${t(`page_header.grade`)}`, path: "grade" },
    {
      name: ` ${t("header.subject_of_class")} (${gradeName})`,
      path: `grade/${grade_id}`,
    },
    { name: SubjectName, path: `subject/${subject_id}` },
    { name: unitName, path: `unit/${unit_id}` },
  ]);

  return (
    <div className="TableWithHeader">
      <Suspense fallback={<Spin />}>
        <PageHeader
          pageTitle="grade"
          ModelAbility={ModalEnum?.LESSON_ADD}
          canAdd={canAddLesson}
        />
        <FilterLayout
          sub_children={<FilterForm />}
          filterTitle={` ${SubjectName} (${unitName}) `}
        />
        <Table />
        <AddModalForm />
        <EditModalForm />
        <DeleteModelsForm
          deleteMutation={deleteMutation}
          ModelEnum={ModalEnum?.LESSON_DELETE}
        />
      </Suspense>
    </div>
  );
};

export default TableHeader;
