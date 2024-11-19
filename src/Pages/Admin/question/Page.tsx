import { useTranslation } from "react-i18next";
import { lazy, Suspense, useEffect } from "react";
import { Spin } from "antd";
import { useParams } from "react-router-dom";
import { ParamsEnum } from "../../../enums/params";
import { useGetAllUnit } from "../../../api/unit";
import useSetPageTitle from "../../../Hooks/useSetPageTitle";
import { useGetAllLesson } from "../../../api/lesson";
import { useDeleteQuestion } from "../../../api/Question";
import DeleteModels from "../../../Layout/Dashboard/DeleteModels";
import { ModalEnum } from "../../../enums/Model";
import { useGetAllSubject } from "../../../api/subject";
import { useGetAllGrade } from "../../../api/grade";
import PageHeader from "../../../Layout/Dashboard/PageHeader";
import { ABILITIES_ENUM } from "../../../enums/abilities";
import { canAddQuestion } from "../../../utils/hasAbilityFn";
import FilterLayout from "../../../Layout/Dashboard/FilterLayout";
import FilterForm from "./FilterForm";
import { useObjectToEdit } from "../../../zustand/ObjectToEditState";
import QrCodeModels from "../../../Layout/Dashboard/QrCodeModels";
const Table = lazy(() => import("./Table"));

const TableHeader = () => {
  const [t] = useTranslation();

  const deleteMutation = useDeleteQuestion();

  const { unit_id, grade_id, subject_id, lesson_id } = useParams<ParamsEnum>();
  const { data: unit } = useGetAllUnit({ show: unit_id });

  const { data: Subject } = useGetAllSubject({
    show: subject_id,
  });
  const { data: grade } = useGetAllGrade({
    show: grade_id,
  });

  const { data: Lesson } = useGetAllLesson({
    show: lesson_id,
  });

  const gradeName = grade?.data?.name ?? "";
  const SubjectName = Subject?.data?.name ?? "";
  const unitName = unit?.data?.name ?? "";
  const LessonName = Lesson?.data?.name ?? "";

  useSetPageTitle([
    { name: `${t(`page_header.home`)}`, path: "/" },
    { name: `${t(`page_header.grade`)}`, path: "grade" },
    {
      name: ` ${t("header.subject_of_class")} (${gradeName})`,
      path: `grade/${grade_id}`,
    },
    { name: SubjectName, path: `subject/${subject_id}` },
    { name: unitName, path: `unit/${unit_id}` },
    { name: LessonName, path: `lesson/${lesson_id}` },
  ]);
  const { objectToEdit, setObjectToEdit } = useObjectToEdit();

  useEffect(() => {
    if (objectToEdit) {
      setObjectToEdit(null);
    }
  }, []);

  return (
    <div className="TableWithHeader">
      <Suspense fallback={<Spin />}>
        <PageHeader
          pageTitle="grade"
          ModelAbility={ModalEnum?.QUESTION_ACCEPT}
          canAdd={canAddQuestion}
          locationToNavigate={`${ABILITIES_ENUM?.QUESTION}/add`}
          openModel={false}
        />
        <FilterLayout
          sub_children={<FilterForm />}
          filterTitle={` ${unitName} (${LessonName}) `}
          search_by="content"
          haveFilter={false}
        />
        <Table />
      </Suspense>
      <DeleteModels
        deleteMutation={deleteMutation}
        ModelEnum={ModalEnum?.QUESTION_DELETE}
      />
      <QrCodeModels ModelEnum={ModalEnum?.QUESTION_QR} />
    </div>
  );
};

export default TableHeader;
