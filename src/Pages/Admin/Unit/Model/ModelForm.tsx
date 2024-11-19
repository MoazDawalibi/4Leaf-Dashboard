import { Col, Row } from "reactstrap";
import ValidationField from "../../../../Components/ValidationField/ValidationField";
import { TermEnum } from "../../../../enums/Term";
import { enumToArray } from "../../../../api/utils/enumToArray";

const Form = () => {
  const termsArray = enumToArray(TermEnum);
  console.log(termsArray);

  return (
    <Row className="w-100">
      <Col>
        <ValidationField name="name" placeholder="name" label="name" />
      </Col>
      <Col>
        <ValidationField
          name="term"
          type="Select"
          placeholder="term"
          label="term"
          option={termsArray}
        />
      </Col>
    </Row>
  );
};

export default Form;
