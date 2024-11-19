import { useTranslation } from "react-i18next";
import { lazy, Suspense } from "react";
import { Spin } from "antd";
import { useParams } from "react-router-dom";
import { ParamsEnum } from "../../../enums/params";
import { useGetAllSubject } from "../../../api/subject";
import useSetPageTitle from "../../../Hooks/useSetPageTitle";
import { ModalEnum } from "../../../enums/Model";
import { useDeleteCurriculum } from "../../../api/curriculum";
import { useGetAllGrade } from "../../../api/grade";
import PageHeader from "../../../Layout/Dashboard/PageHeader";
import FilterLayout from "../../../Layout/Dashboard/FilterLayout";
import FilterForm from "./Model/FilterForm";
import { canAddCurriculum } from "../../../utils/hasAbilityFn";

const Table = lazy(() => import("./Table"));
const AddModalForm = lazy(() => import("./Model/AddModel"));
const EditModalForm = lazy(() => import("./Model/EditModel"));
const DeleteModalForm = lazy(
  () => import("../../../Layout/Dashboard/DeleteModels"),
);

const TableHeader = () => {
  const [t] = useTranslation();
  const deleteMutation = useDeleteCurriculum();

  const { subject_id, grade_id } = useParams<ParamsEnum>();

  const { data: Subject } = useGetAllSubject({
    show: subject_id,
  });
  const { data: grade } = useGetAllGrade({
    show: grade_id,
  });

  const gradeName = grade?.data?.name ?? "";

  const SubjectName = Subject?.data?.name ?? "";

  useSetPageTitle(
    t(`page_header.grade`) +
      "/" +
      gradeName +
      "/" +
      t(`PageTitle.subject`) +
      "/" +
      SubjectName +
      "/" +
      t("PageTitle.curriculum"),
  );

  return (
    <div className="TableWithHeader">
      <Suspense fallback={<Spin />}>
        <PageHeader
          pageTitle="curriculum"
          ModelAbility={ModalEnum?.CURRICULUM_ADD}
          canAdd={canAddCurriculum}
        />
        <FilterLayout
          sub_children={<FilterForm />}
          filterTitle="sidebar.curriculum"
        />
        <Table />
        <AddModalForm />
        <EditModalForm />
        <DeleteModalForm
          deleteMutation={deleteMutation}
          ModelEnum={ModalEnum?.CURRICULUM_DELETE}
        />
      </Suspense>
    </div>
  );
};

export default TableHeader;
