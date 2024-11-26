import { useTranslation } from "react-i18next";
import { lazy, Suspense } from "react";
import { Spin } from "antd";
import useSetPageTitle from "../../Hooks/useSetPageTitle";
import { ModalEnum } from "../../enums/Model";
import { useDeleteShippingFees } from "../../api/ShippingFees";
import PageHeader from "../../Layout/Dashboard/PageHeader";
import FilterLayout from "../../Layout/Dashboard/FilterLayout";
import FilterForm from "./Model/FilterForm";
import { canAddShippingFees } from "../../utils/hasAbilityFn";

const Table = lazy(() => import("./Table"));
const AddModalForm = lazy(() => import("./Model/AddModel"));
const EditModalForm = lazy(() => import("./Model/EditModel"));
const DeleteModalForm = lazy(
  () => import("../../Layout/Dashboard/DeleteModels"),
);

const TableHeader = () => {
  const [t] = useTranslation();
  const deleteMutation = useDeleteShippingFees();

  useSetPageTitle([
    { name: t('page_header.home'), path: "/" },
    { name: t('page_header.ShippingFees'), path: "ShippingFees" },
  ]);

  return (
    <div className="TableWithHeader">
      <Suspense fallback={<Spin />}>
        <PageHeader
          pageTitle="ShippingFees"
          ModelAbility={ModalEnum?.SHIPPING_FEES_ADD}
          canAdd={canAddShippingFees}
        />
        <FilterLayout 
          sub_children={<FilterForm />} 
          filterTitle="table.ShippingFees" 
        />
        <Table />
        <AddModalForm />
        <EditModalForm />
        <DeleteModalForm
          deleteMutation={deleteMutation}
          ModelEnum={ModalEnum?.SHIPPING_FEES_DELETE}
        />
      </Suspense>
    </div>
  );
};

export default TableHeader;

