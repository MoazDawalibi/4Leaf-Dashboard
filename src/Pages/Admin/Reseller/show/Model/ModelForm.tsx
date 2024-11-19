import { Col, Row } from "reactstrap";
import ValidationField from "../../../../../Components/ValidationField/ValidationField";

const Form = () => {
  return (
    <Row className="w-100">
      <Col>
        <ValidationField
          placeholder="description"
          label="description"
          name="description"
        />
        <ValidationField placeholder="amount" label="amount" name="amount" />
        <ValidationField
          type="Date"
          placeholder="date"
          label="date"
          name="date"
        />
      </Col>
    </Row>
  );
};

export default Form;
