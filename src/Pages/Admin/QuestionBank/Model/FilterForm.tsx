import React from "react";
import ValidationField from "../../../../Components/ValidationField/ValidationField";
import { Col, Row } from "reactstrap";
import { useFormikContext } from "formik";
import { useGetAllGrade } from "../../../../api/grade";
import { useValidationValidationParamState } from "../../../../Components/ValidationField/state/ValidationValidationParamState";
import { useGetAllUnit } from "../../../../api/unit";
import { useGetAllSubject } from "../../../../api/subject";
import { useGetAllLesson } from "../../../../api/lesson";
import { useGetAllTag } from "../../../../api/tags";

const FilterForm = () => {
  const { ValidationParamState } = useValidationValidationParamState();
  const {
    GradeName,
    GradeCurrentPage,
    SubjectName,
    SubjectCurrentPage,
    UnitName,
    UnitCurrentPage,
    LessonName,
    LessonCurrentPage,
    TagName,
    TagCurrentPage,
  } = ValidationParamState;

  const { data: Grade, isLoading: isLoadingGrade } = useGetAllGrade({
    name: GradeName,
    page: GradeCurrentPage,
  });
  const GradeOption = Grade?.data ?? [];
  const canChangeGradePage = !!Grade?.links?.next;
  const GradePage = Grade?.meta?.current_page;

  /// subject_id
  const { data: Subject, isLoading: isLoadingSubject } = useGetAllSubject({
    name: SubjectName,
    page: SubjectCurrentPage,
  });
  const SubjectOption = Subject?.data ?? [];
  const canChangeSubjectPage = !!Subject?.links?.next;
  const SubjectPage = Subject?.meta?.current_page;

  /// unit_id
  const { data: Unit, isLoading: isLoadingUnit } = useGetAllUnit({
    name: UnitName,
    page: UnitCurrentPage,
  });
  const UnitOption = Unit?.data ?? [];
  const canChangeUnitPage = !!Unit?.links?.next;
  const UnitPage = Unit?.meta?.current_page;

  /// lessonsIds
  const { data: Lesson, isLoading: isLoadingLesson } = useGetAllLesson({
    name: LessonName,
    page: LessonCurrentPage,
  });
  const LessonOption = Lesson?.data ?? [];
  const canChangeLessonPage = !!Lesson?.links?.next;
  const LessonPage = Lesson?.meta?.current_page;

  /// TagsIds
  const { data: Tag, isLoading: isLoadingTag } = useGetAllTag({
    name: TagName,
    page: TagCurrentPage,
  });

  const TagOption = Tag?.data ?? [];
  const canChangeTagPage = !!Tag?.links?.next;
  const TagPage = Tag?.meta?.current_page;

  return (
    <div>
      <Row>
        <Col>
          {/* 
              grade_id
        */}
          <ValidationField
            searchBy="GradeName"
            name="grade_id"
            label="grade"
            type="Search"
            option={GradeOption}
            isLoading={isLoadingGrade}
            canChangePage={canChangeGradePage}
            PageName={"GradeCurrentPage"}
            page={GradePage}
          />

          {/* 
              subject_id
        */}

          <ValidationField
            searchBy="SubjectName"
            name="subject_id"
            label="subject"
            type="Search"
            option={SubjectOption}
            isLoading={isLoadingSubject}
            canChangePage={canChangeSubjectPage}
            PageName={"SubjectCurrentPage"}
            page={SubjectPage}
          />

          {/* 
              TagsIds
        */}

          <ValidationField
            searchBy="TagName"
            name="tagsIds"
            label="tag"
            type="Search"
            option={TagOption}
            isMulti
            isLoading={isLoadingTag}
            canChangePage={canChangeTagPage}
            PageName={"TagCurrentPage"}
            page={TagPage}
          />
        </Col>
        <Col>
          {/* 
              unit_id
        */}

          <ValidationField
            searchBy="UnitName"
            name="unit_id"
            label="unit"
            type="Search"
            option={UnitOption}
            isLoading={isLoadingUnit}
            canChangePage={canChangeUnitPage}
            PageName={"UnitCurrentPage"}
            page={UnitPage}
          />

          {/* 
              lessonsIds
        */}

          <ValidationField
            searchBy="LessonName"
            name="lessonsIds"
            label="lesson"
            type="Search"
            option={LessonOption}
            isMulti
            isLoading={isLoadingLesson}
            canChangePage={canChangeLessonPage}
            PageName={"LessonCurrentPage"}
            page={LessonPage}
          />
        </Col>
      </Row>
    </div>
  );
};

export default FilterForm;
