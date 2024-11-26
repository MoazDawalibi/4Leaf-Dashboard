

import { useTranslation } from "react-i18next";
import { lazy, Suspense } from "react";
import { Spin } from "antd";
import useSetPageTitle from "../../Hooks/useSetPageTitle";
import { ModalEnum } from "../../enums/Model";
import { useDeleteShipment } from "../../api/Shipment";
import PageHeader from "../../Layout/Dashboard/PageHeader";
import FilterLayout from "../../Layout/Dashboard/FilterLayout";
import FilterForm from "./Model/FilterForm";
import { canAddShipment } from "../../utils/hasAbilityFn";

const Table = lazy(() => import("./Table"));
const AddModalForm = lazy(() => import("./Model/AddModel"));
const EditModalForm = lazy(() => import("./Model/EditModel"));
const DeleteModalForm = lazy(
  () => import("../../Layout/Dashboard/DeleteModels"),
);

const TableHeader = () => {
  const [t] = useTranslation();
  const deleteMutation = useDeleteShipment();

  useSetPageTitle([
    { name: t('page_header.home'), path: "/" },
    { name: t('page_header.Shipment'), path: "Shipment" },
  ]);

  return (
    <div className="TableWithHeader">
      <Suspense fallback={<Spin />}>
        <PageHeader
          pageTitle="Shipment"
          ModelAbility={ModalEnum?.SHIPMENT_ADD}
          canAdd={canAddShipment}
        />
        <FilterLayout 
          sub_children={<FilterForm />} 
          filterTitle="table.Shipment" 
        />
        <Table />
        <AddModalForm />
        <EditModalForm />
        <DeleteModalForm
          deleteMutation={deleteMutation}
          ModelEnum={ModalEnum?.SHIPMENT_DELETE}
        />
      </Suspense>
    </div>
  );
};

export default TableHeader;

