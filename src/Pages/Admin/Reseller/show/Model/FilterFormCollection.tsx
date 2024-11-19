import { Col, Row } from "reactstrap";
import ValidationField from "../../../../../Components/ValidationField/ValidationField";

const FilterFormCollection = () => {
  return (
    <div>
      <Row>
        <Col>
          <ValidationField
            placeholder="description"
            label="description"
            name="description"
          />
          <ValidationField placeholder="amount" label="amount" name="amount" />
        </Col>
      </Row>
    </div>
  );
};

export default FilterFormCollection;
