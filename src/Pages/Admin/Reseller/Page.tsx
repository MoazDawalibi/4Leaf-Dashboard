import { ModalEnum } from "../../../enums/Model";
import { useTranslation } from "react-i18next";
import { lazy, Suspense } from "react";
import { Spin } from "antd";
import { canAddReSeller } from "../../../utils/hasAbilityFn";
import useSetPageTitle from "../../../Hooks/useSetPageTitle";
import { useDeleteTag } from "../../../api/tags";
import PageHeader from "../../../Layout/Dashboard/PageHeader";
import FilterLayout from "../../../Layout/Dashboard/FilterLayout";
import FilterForm from "./Form/FilterForm";
import EditReSeller from "./Edit/Page";
import { useDeleteReseller } from "../../../api/reseller";
const Table = lazy(() => import("./Table"));
const DeleteModalForm = lazy(
  () => import("../../../Layout/Dashboard/DeleteModels"),
);
const SearchField = lazy(
  () => import("../../../Components/DataTable/SearchField"),
);

const TableHeader = () => {
  const [t] = useTranslation();
  useSetPageTitle([
    { name: `${t(`page_header.home`)}`, path: "/" },
    { name: `${t(`page_header.reseller`)}`, path: "reseller" },
  ]);
  const deleteMutation = useDeleteReseller();
  return (
    <div className="TableWithHeader">
      <Suspense fallback={<Spin />}>
        <PageHeader
          pageTitle="reseller"
          ModelAbility={ModalEnum?.RE_SELLER_ADD}
          canAdd={canAddReSeller}
          openModel={false}
          locationToNavigate={"add"}
        />
        <FilterLayout
          sub_children={<FilterForm />}
          filterTitle="table.reseller"
        />
        <Table />
        {/* <EditReSeller/> */}
        <DeleteModalForm
          deleteMutation={deleteMutation}
          ModelEnum={ModalEnum?.RE_SELLER_DELETE}
        />
      </Suspense>
    </div>
  );
};

export default TableHeader;
