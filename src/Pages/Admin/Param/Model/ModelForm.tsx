import { Col, Row } from "reactstrap";
import ValidationField from "../../../../Components/ValidationField/ValidationField";

const Form = ({ isEdit }: { isEdit?: boolean }) => {
  return (
    <Row className="w-100">
      <Col>
        <ValidationField
          placeholder="key"
          label="key"
          name="key"
          disabled={isEdit ? true : false}
        />
        <ValidationField placeholder="value" label="value" name="value" />
      </Col>
    </Row>
  );
};

export default Form;
