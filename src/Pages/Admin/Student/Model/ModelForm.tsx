import { Col, Row } from "reactstrap";
import ValidationField from "../../../../Components/ValidationField/ValidationField";
import { useGetAllGrade } from "../../../../api/grade";
import { useValidationValidationParamState } from "../../../../Components/ValidationField/state/ValidationValidationParamState";

const Form = ({ isEdit = false }: { isEdit?: boolean }) => {
  const { ValidationParamState } = useValidationValidationParamState();
  const { GradeName, GradeCurrentPage } = ValidationParamState;

  const { data: Grade, isLoading: isLoadingGrade } = useGetAllGrade({
    name: GradeName,
    page: GradeCurrentPage,
  });
  const GradeOption = Grade?.data ?? [];
  const canChangeGradePage = !!Grade?.links?.next;
  const GradePage = Grade?.meta?.current_page;

  const sex = [
    { name: "male", id: "male" },
    { name: "female", id: "female" },
  ];

  return (
    <Row className="w-100">
      <Col>
        <ValidationField
          name="first_name"
          placeholder="first_name"
          label="first_name"
        />
        <ValidationField
          name="last_name"
          placeholder="last_name"
          label="last_name"
        />
        {!isEdit && (
          <>
            <ValidationField
              name="username"
              placeholder="username"
              label="username"
            />
            <ValidationField
              name="password"
              placeholder="password"
              label="password"
            />
          </>
        )}
      </Col>
      <Col>
        {!isEdit && (
          <>
            <ValidationField
              name="phone_number"
              placeholder="contact_number1"
              label="contact_number1"
            />
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
          </>
        )}
        <ValidationField type="Select" name="sex" option={sex} />
      </Col>
    </Row>
  );
};

export default Form;
