import { ModalEnum } from "../../../../enums/Model";
import useModalHandler from "../../../../utils/useModalHandler";
import { FaPlus } from "react-icons/fa";
import { useTranslation } from "react-i18next";
import useSetPageTitle from "../../../../Hooks/useSetPageTitle";
import { canAddSubject } from "../../../../utils/hasAbilityFn";
import { useDeleteSubject } from "../../../../api/subject";
import { lazy } from "react";
import { useGetAllCurriculum } from "../../../../api/curriculum";
import { useParams } from "react-router-dom";
import { ParamsEnum } from "../../../../enums/params";
import { useGetAllGrade } from "../../../../api/grade";
import PageHeader from "../../../../Layout/Dashboard/PageHeader";
import FilterLayout from "../../../../Layout/Dashboard/FilterLayout";
import FilterForm from "../Model/FilterForm";
const Table = lazy(() => import("./TablePage"));
const AddModalForm = lazy(() => import("../Model/AddModel"));
const EditModalForm = lazy(() => import("../Model/EditModel"));
const DeleteModalForm = lazy(
  () => import("../../../../Layout/Dashboard/DeleteModels"),
);

const TableWithHeader = () => {
  const [t] = useTranslation();
  const deleteMutation = useDeleteSubject();

  const { grade_id } = useParams<ParamsEnum>();

  const { data: grade } = useGetAllGrade({
    show: grade_id,
  });

  const gradeName = grade?.data?.name ?? "";

  useSetPageTitle([
    { name: `${t(`page_header.home`)}`, path: "/" },
    { name: `${t(`page_header.grade`)}`, path: "grade" },
    {
      name: ` ${t("header.subject_of_class")} (${gradeName})`,
      path: `grade/${grade_id}`,
    },
  ]);

  return (
    <div className="TableWithHeader">
      <PageHeader
        pageTitle="grade"
        ModelAbility={ModalEnum?.SUBJECT_ADD}
        canAdd={canAddSubject}
      />
      <FilterLayout
        sub_children={<FilterForm />}
        filterTitle={`${t("header.subject_of_class")} (${gradeName})`}
      />
      <Table />

      <AddModalForm />
      <EditModalForm />
      <DeleteModalForm
        deleteMutation={deleteMutation}
        ModelEnum={ModalEnum?.SUBJECT_DELETE}
      />
    </div>
  );
};

export default TableWithHeader;
