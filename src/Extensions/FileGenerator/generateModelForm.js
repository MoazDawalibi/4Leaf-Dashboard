const fs = require('fs');

// Get the file name from the command line arguments
const fileName = process.argv[2];

// Check if a file name is provided
if (!fileName) {
  console.error('Please provide a file name.');
  process.exit(1);
}

let FileContainer = `

import { Col, Row } from "reactstrap";
import ValidationField from "../../../Components/ValidationField/ValidationField";

const ModelForm = () => {
  return (
    <Row className="w-100">
      <Col>
        <ValidationField name="name" placeholder="name" label="name" />
      </Col>
    </Row>
  );
};

export default ModelForm;



`
fs.writeFileSync('src/Pages/' + fileName +"/Model"+"/"+"ModelForm.tsx",
  FileContainer
);

console.log(`File "${fileName}" generated successfully.`);


