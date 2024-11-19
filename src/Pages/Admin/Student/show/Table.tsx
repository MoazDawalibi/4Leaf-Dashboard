import DataTable from "../../../../Layout/Dashboard/Table/DataTable";
import { useColumns } from "./useTableColumns";
const App = ({ response }: { response: any }) => {
  return <DataTable response={response} useColumns={useColumns} />;
};

export default App;
