

import { Col, Row } from "reactstrap";
import ValidationField from "../../../Components/ValidationField/ValidationField";
import { RoleType } from "../../../config/RoleType";

const ModelForm = ({isEdit = false}:{isEdit?:boolean}) => {
  console.log(RoleType);
  
  return (
    <Row className="w-100">
      <Col>
        {isEdit ? "" : <ValidationField placeholder="email" label="email" name="email" />}
        {/* {isEdit ? "" :   */}
        <ValidationField name="password" placeholder="password" label="password" type="password"/>
        {/* } */}
      </Col>
      <Col>
        <ValidationField placeholder="role_type" label="role_type" name="role_type" option={RoleType} fieldNames={{value:"role_type",label:"role_type"}} type="Select" />
      </Col>
    </Row>
  );
};

export default ModelForm;



