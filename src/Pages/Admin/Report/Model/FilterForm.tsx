import React from "react";
import ValidationField from "../../../../Components/ValidationField/ValidationField";
import { Col, Row } from "reactstrap";
import { useGetAllStudent } from "../../../../api/student";
import { useGetAllQuestion } from "../../../../api/Question";

const FilterForm = () => {
  const { data: StudentData } = useGetAllStudent();
  const { data: QuestionData } = useGetAllQuestion();

  console.log(QuestionData?.data);

  return (
    <div>
      <Row>
        <Col>
          <ValidationField
            placeholder="content"
            label="content"
            name="content"
          />
          <ValidationField
            placeholder="student_name"
            label="student_name"
            name="student_id"
            type="Select"
            option={StudentData?.data?.map((e: any) => ({
              ...e,
              fullName: `${e.first_name} ${e.last_name}`,
            }))}
            fieldNames={{
              label: "fullName",
              value: "id",
            }}
          />
        </Col>
        <ValidationField
          placeholder="question_content"
          label="question_content"
          name="question_id"
          type="Select"
          option={QuestionData?.data}
          fieldNames={{ label: "content", value: "id" }}
        />
      </Row>
    </div>
  );
};

export default FilterForm;
