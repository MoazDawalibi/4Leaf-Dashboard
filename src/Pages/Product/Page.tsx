

import { useTranslation } from "react-i18next";
import { lazy, Suspense } from "react";
import { Spin } from "antd";  
import useSetPageTitle from "../../Hooks/useSetPageTitle";
import { ModalEnum } from "../../enums/Model";
import { useDeleteProduct } from "../../api/Product";
import PageHeader from "../../Layout/Dashboard/PageHeader";
import FilterLayout from "../../Layout/Dashboard/FilterLayout";
import FilterForm from "./Model/FilterForm";
import { canAddProduct } from "../../utils/hasAbilityFn";
import { ParamsEnum } from "../../enums/params";
import { useParams } from "react-router-dom";

const Table = lazy(() => import("./Table"));
const AddModalForm = lazy(() => import("./Model/AddModel"));
const EditModalForm = lazy(() => import("./Model/EditModel"));
const DeleteModalForm = lazy(
  () => import("../../Layout/Dashboard/DeleteModels"),
);

const TableHeader = () => { 
  const [t] = useTranslation();
  const deleteMutation = useDeleteProduct();
  const {shipment_id}  = useParams<ParamsEnum>();  
  const { order_id } = useParams<ParamsEnum>();

  useSetPageTitle([
    { name: t('page_header.home'), path: "/" },
    { name: `${t(`page_header.Shipment`)}`, path: `/shipment` },
    { name: t('page_header.Order'), path: `/shipment/${shipment_id}` },
    { name: t('page_header.Product'), path: `/shipment/${shipment_id}/${order_id}` },
  ]);

  return (
    <div className="TableWithHeader">
      <Suspense fallback={<Spin />}>
        <PageHeader
          pageTitle="Product"
          ModelAbility={ModalEnum?.PRODUCT_ADD}
          canAdd={canAddProduct}
        />
        <FilterLayout 
          sub_children={<FilterForm />} 
          filterTitle="table.Product" 
        />
        <Table />
        <AddModalForm />
        <EditModalForm />
        <DeleteModalForm
          deleteMutation={deleteMutation}
          ModelEnum={ModalEnum?.PRODUCT_DELETE}
        />
      </Suspense>
    </div>
  );
};

export default TableHeader;

