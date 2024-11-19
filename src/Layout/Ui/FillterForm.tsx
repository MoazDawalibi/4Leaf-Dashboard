import React from "react";
import { Formik, Form, Field } from "formik"; // Import Formik components
import { Select } from "antd";
import { FaHome, FaSearch } from "react-icons/fa";
import { IoMdArrowDropdown } from "react-icons/io";
import ValidationField from "../../Components/ValidationField/ValidationField";

const initialValues = {
  selectedOption: "1", // Initial value for the Select component
};

const options = [
  {
    value: "1",
    label: "دمشق",
  },
  // Add more options as needed
];

const FillterForm: React.FC = () => (
  <Formik
    enableReinitialize
    initialValues={initialValues}
    onSubmit={(values, { resetForm }) => {
      // console.log(values);
      resetForm();
    }}
  >
    {({ handleSubmit }) => (
      <Form className="fillter_form" onSubmit={handleSubmit}>
        <div>
          {[1, 2, 3, 4, 5]?.map((item) => {
            return (
              <Field name="selectedOption">
                {({ field }: any) => (
                  <Select
                    {...field}
                    showSearch
                    style={{ width: "240px", height: "40px" }}
                    placeholder="Search to Select"
                    suffixIcon={
                      <IoMdArrowDropdown className="custom_select_icon" />
                    }
                    optionFilterProp="children"
                    filterOption={(input: any, option: any) =>
                      (option?.label ?? "").includes(input)
                    }
                    filterSort={(optionA: any, optionB: any) =>
                      (optionA?.label ?? "")
                        .toLowerCase()
                        .localeCompare((optionB?.label ?? "").toLowerCase())
                    }
                    className=" "
                    options={options}
                  />
                )}
              </Field>
            );
          })}
        </div>
        <button type="submit">
          <FaSearch />
        </button>
      </Form>
    )}
  </Formik>
);

export default FillterForm;
