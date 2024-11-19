import ValidationField from "../../../../../Components/ValidationField/ValidationField";
import { Col, Row } from "reactstrap";
import { useGetAllUser } from "../../../../../api/user";

const FilterForm = () => {
  const { data:Users } = useGetAllUser();
  
  return (
    <div>
      <Row>
        <Col>
          <ValidationField placeholder="created_at" label="created_at" name="created_at" />

          <ValidationField placeholder="users" label="users" name="users" type="Select" option={Users?.data} fieldNames={{label:"username", value:"id"}} />

          <ValidationField placeholder="title" label="title" name="title" />
          
        </Col>
      </Row>
    </div>
  );
};

export default FilterForm;
