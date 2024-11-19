import { Col, Row } from "reactstrap";
import ValidationField from "../../../../Components/ValidationField/ValidationField";
import DynamicTags from "../synonyms/DynamicTags";

const Form = () => {
  return (
    <Row className="w-100">
      <Col>
        <ValidationField placeholder="name" label="name" name="name" />
      </Col>

      <div className="DynamicTags">
        <DynamicTags />
      </div>
    </Row>
  );
};

export default Form;
