
import React from "react";
import ValidationField from "../../../Components/ValidationField/ValidationField";
import { Col, Row } from "reactstrap";
import { useFormikContext } from "formik";
import { OrderStatus } from "../../../config/OrderStatus";
import { useGetAllCustomers } from "../../../api/customers";

const FilterForm = () => {
  const formik = useFormikContext();
  const {data} = useGetAllCustomers();
  const Customers = data?.data?.data
   
  return (
    <div>
      <Row>
        <Col>
        <ValidationField name="status" placeholder="status" label="status" type="Select" option={OrderStatus} fieldNames={{value:"status",label:"status"}}/>
        <ValidationField name="customer_id" placeholder="customer_name" label="customer_name" type="Select" option={Customers} />        </Col>
      </Row>
    </div>
  );
};

export default FilterForm;

