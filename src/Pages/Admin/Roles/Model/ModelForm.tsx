import { Col, Row } from "reactstrap";
import ValidationField from "../../../../Components/ValidationField/ValidationField";

const Form = () => {
  return (
    <Row className="w-100">
      <Col>
        <ValidationField placeholder="name" label="name" name="name" />
      </Col>
    </Row>
  );
};

export default Form;
