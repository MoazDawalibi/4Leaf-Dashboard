

import { Col, Row } from "reactstrap";
import ValidationField from "../../../Components/ValidationField/ValidationField";
import { OrderStatus } from "../../../config/OrderStatus";
import { useGetAllCustomers } from "../../../api/customers";

const ModelForm = ({isAdd = true}:{isAdd?:boolean}) => {
  const {data} = useGetAllCustomers();
  const Customers = data?.data?.data
   
  return (
    <Row className="w-100">
      <Col>
        <ValidationField name="status" placeholder="status" label="status" type="Select" option={OrderStatus} fieldNames={{value:"status",label:"status"}}/>
        <ValidationField name="shipment_id" placeholder="shipment_id" label="shipment_id" disabled/>
        <ValidationField name="customer_id" placeholder="customer_name" label="customer_name" type="Select" option={Customers} />
        {isAdd ? "" 
        :
        <>
          <ValidationField name="product_count" placeholder="product_count" label="product_count" type="number"/>
        </>
        }


      </Col>
      {isAdd ? "" 
        :
      <Col>
        <>
          <ValidationField name="shipping_fees_total_profit" placeholder="shipping_fees_total_profit" label="shipping_fees_total_profit" type="number"/>
          <ValidationField name="currency_profit" placeholder="currency_profit" label="currency_profit" type="number" />
          <ValidationField name="total_profit" placeholder="total_profit" label="total_profit" type="number" />
          <ValidationField name="total_price" placeholder="total_price" label="total_price" type="number" />
        </>
      </Col>
        }
    </Row>
  );
};

export default ModelForm;



