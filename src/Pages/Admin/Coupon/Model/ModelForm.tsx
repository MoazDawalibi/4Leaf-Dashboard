import { Col, Row } from "reactstrap";
import ValidationField from "../../../../Components/ValidationField/ValidationField";
import { useValidationValidationParamState } from "../../../../Components/ValidationField/state/ValidationValidationParamState";
import { useGetAllGrade } from "../../../../api/grade";

const Form = ({ Hide = false }: { Hide?: boolean }) => {
  const { ValidationParamState } = useValidationValidationParamState();

  const { GradeName, GradeCurrentPage } = ValidationParamState;

  const { data: Grade, isLoading: isLoadingGrade } = useGetAllGrade({
    name: GradeName,
    page: GradeCurrentPage,
  });
  const GradeOption = Grade?.data ?? [];
  const canChangeGradePage = !!Grade?.links?.next;
  const GradePage = Grade?.meta?.current_page;
  return (
    <Row className="w-100">
      <Col>
        <ValidationField name="name" placeholder="name" label="name" />
        <ValidationField
          name="amount"
          type="number"
          placeholder="amount"
          label="amount"
        />
      </Col>
      <Col>
        <ValidationField
          name="due_to"
          type="Date"
          Format="YYYY-MM-DD HH:mm:ss"
          placeholder="due_to"
          label="due_to"
          showTime
        />
        <ValidationField name="code" placeholder="code" label="code" />
        {/* 
              grade_id
        */}
        {!Hide && (
          <ValidationField
            searchBy="GradeName"
            name="grade_id"
            label="grade"
            placeholder="grade"
            type="Search"
            option={GradeOption}
            isLoading={isLoadingGrade}
            canChangePage={canChangeGradePage}
            PageName={"GradeCurrentPage"}
            page={GradePage}
          />
        )}
      </Col>
    </Row>
  );
};

export default Form;
