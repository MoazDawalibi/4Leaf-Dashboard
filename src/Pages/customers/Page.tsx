

import { useTranslation } from "react-i18next";
import { lazy, Suspense } from "react";
import { Spin } from "antd";
import useSetPageTitle from "../../Hooks/useSetPageTitle";
import { ModalEnum } from "../../enums/Model";
import { useDeleteCustomers } from "../../api/customers";
import PageHeader from "../../Layout/Dashboard/PageHeader";
import FilterLayout from "../../Layout/Dashboard/FilterLayout";
import FilterForm from "./Model/FilterForm";
import { canAddCustomers } from "../../utils/hasAbilityFn";

const Table = lazy(() => import("./Table"));
const AddModalForm = lazy(() => import("./Model/AddModel"));
const EditModalForm = lazy(() => import("./Model/EditModel"));
const DeleteModalForm = lazy(
  () => import("../../Layout/Dashboard/DeleteModels"),
);

const TableHeader = () => {
  const [t] = useTranslation();
  const deleteMutation = useDeleteCustomers();

  useSetPageTitle([
    { name: t('page_header.home'), path: "/" },
    { name: t('page_header.customers'), path: "customers" },
  ]);

  return (
    <div className="TableWithHeader">
      <Suspense fallback={<Spin />}>
        <PageHeader
          pageTitle="customers"
          ModelAbility={ModalEnum?.CUSTOMERS_ADD}
          canAdd={canAddCustomers}
        />
        <FilterLayout 
          sub_children={<FilterForm />} 
          filterTitle="table.customers" 
        />
        <Table />
        <AddModalForm />
        <EditModalForm />
        <DeleteModalForm
          deleteMutation={deleteMutation}
          ModelEnum={ModalEnum?.CUSTOMERS_DELETE}
        />
      </Suspense>
    </div>
  );
};

export default TableHeader;

