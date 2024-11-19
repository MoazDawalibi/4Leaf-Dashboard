import DataTable from "../../../../Layout/Dashboard/Table/DataTable";
import { useColumns } from "./useTableColumns";
import { useFormikContext } from "formik";
import { TableProps } from "antd";

interface IFormTable extends TableProps {
  response: any;
}
const FormTable = ({ response, ...props }: IFormTable) => {
  const { values } = useFormikContext<any>();

  return (
    <div>
      <DataTable
        response={response}
        useColumns={useColumns}
        dataSource={values}
        pagination={false}
        loading={false}
        rowKey={"name"}
        {...props}
      />
    </div>
  );
};

export default FormTable;
