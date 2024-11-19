const fs = require('fs');

// Get the file name from the command line arguments
const fileName = process.argv[2];

// Check if a file name is provided
if (!fileName) {
  console.error('Please provide a file name.');
  process.exit(1);
}

let FileContainer = `
import React from "react";
import ValidationField from "../../../Components/ValidationField/ValidationField";
import { Col, Row } from "reactstrap";
import { useFormikContext } from "formik";

const FilterForm = () => {
  const formik = useFormikContext();

  return (
    <div>
      <Row>
        <Col>
          <ValidationField placeholder="name" label="name" name="name" />
        </Col>
      </Row>
    </div>
  );
};

export default FilterForm;

`
fs.writeFileSync('src/Pages/' + fileName +"/Model"+"/"+"FilterForm.tsx",
  FileContainer
);

console.log(`File "${fileName}" generated successfully.`);





function capitalizeFirstLetter(word) {
  return (word).charAt(0).toUpperCase() + (word).slice(1);
}