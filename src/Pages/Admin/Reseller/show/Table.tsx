import DataTable from "../../../../Layout/Dashboard/Table/DataTable";
import { useColumns } from "./useTableColumns";
import { useColumnsCollection } from "./useTableColumnsCollections";

const App = ({
  salesTable = false,
  response,
}: {
  salesTable?: boolean;
  response: any;
}) => {
  if (salesTable) {
    return <DataTable response={response} useColumns={useColumns} />;
  } else {
    return <DataTable response={response} useColumns={useColumnsCollection} />;
  }
};

export default App;
