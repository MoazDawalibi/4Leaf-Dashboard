

import { useTranslation } from "react-i18next";
import { lazy, Suspense } from "react";
import { Spin } from "antd";
import useSetPageTitle from "../../Hooks/useSetPageTitle";
import { ModalEnum } from "../../enums/Model";
import { useDeleteOrder } from "../../api/Order";
import PageHeader from "../../Layout/Dashboard/PageHeader";
import FilterLayout from "../../Layout/Dashboard/FilterLayout";
import FilterForm from "./Model/FilterForm";
import { canAddOrder } from "../../utils/hasAbilityFn";

const Table = lazy(() => import("./Table"));
const AddModalForm = lazy(() => import("./Model/AddModel"));
const EditModalForm = lazy(() => import("./Model/EditModel"));
const DeleteModalForm = lazy(
  () => import("../../Layout/Dashboard/DeleteModels"),
);

const TableHeader = () => {
  const [t] = useTranslation();
  const deleteMutation = useDeleteOrder();

  useSetPageTitle([
    { name: t('page_header.home'), path: "/" },
    { name: `${t(`page_header.Shipment`)}`, path: `/shipment` },
    { name: t('page_header.Order'), path: "Order" },
  ]);

  return (
    <div className="TableWithHeader">
      <Suspense fallback={<Spin />}>
        <PageHeader
          pageTitle="Order"
          ModelAbility={ModalEnum?.ORDER_ADD}
          canAdd={canAddOrder}
        />
        <FilterLayout 
          sub_children={<FilterForm />} 
          filterTitle="table.Order" 
        />
        <Table />
        <AddModalForm />
        <EditModalForm />
        <DeleteModalForm
          deleteMutation={deleteMutation}
          ModelEnum={ModalEnum?.ORDER_DELETE}
        />
      </Suspense>
    </div>
  );
};

export default TableHeader;

