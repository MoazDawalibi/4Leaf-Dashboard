

import { Col, Row } from "reactstrap";
import ValidationField from "../../../Components/ValidationField/ValidationField";
import { useGetAllShippingFees } from "../../../api/ShippingFees";

const ModelForm = () => {
    const {data} = useGetAllShippingFees();
    const ShippingFees = data?.data?.data
    
  return (
    <Row className="w-100">
      <Col>
        <ValidationField name="name" placeholder="name" label="name" />
        <ValidationField name="order_id" placeholder="order_name" label="order_name" disabled/>
        <ValidationField 
          name="shipping_fees" 
          placeholder="shipping_fees" 
          label="shipping_fees" 
          type="Select" 
          option={ShippingFees?.map((fee: { id: any; name: any; price: any; }):any => ({ value: fee.id, label: `${fee.name} (${fee.price})` }))} 
          fieldNames={{ value: "value", label: "label" }} 
        />
        <ValidationField name="product_quantity" placeholder="product_quantity" label="product_quantity" type="number"/>

      </Col>
      <Col>
        <ValidationField name="price" placeholder="price" label="price" type="number"/>
        <ValidationField name="discount" placeholder="discount" label="discount" type="number"/>
        <ValidationField name="product_options" placeholder="product_options" label="product_options" type="TextArea" />
      </Col>
    </Row>
  );
};

export default ModelForm;



