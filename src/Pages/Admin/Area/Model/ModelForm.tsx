import { Col, Row } from "reactstrap";
import ValidationField from "../../../../Components/ValidationField/ValidationField";

const Form = () => {
  return (
    <Row className="w-100">
      <Col>
        <ValidationField name="name" placeholder="name" label="name" />
      </Col>
    </Row>
  );
};

export default Form;
