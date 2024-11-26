

import { useTranslation } from "react-i18next";
import { lazy, Suspense } from "react";
import { Spin } from "antd";
import useSetPageTitle from "../../Hooks/useSetPageTitle";
import { ModalEnum } from "../../enums/Model";
import { useDeleteStaticInfo } from "../../api/StaticInfo";
import PageHeader from "../../Layout/Dashboard/PageHeader";
import FilterLayout from "../../Layout/Dashboard/FilterLayout";
import FilterForm from "./Model/FilterForm";
import { canAddStaticInfo } from "../../utils/hasAbilityFn";

const Table = lazy(() => import("./Table"));
const AddModalForm = lazy(() => import("./Model/AddModel"));
const EditModalForm = lazy(() => import("./Model/EditModel"));
const DeleteModalForm = lazy(
  () => import("../../Layout/Dashboard/DeleteModels"),
);

const TableHeader = () => {
  const [t] = useTranslation();
  const deleteMutation = useDeleteStaticInfo();

  useSetPageTitle([
    { name: t('page_header.home'), path: "/" },
    { name: t('page_header.StaticInfo'), path: "StaticInfo" },
  ]);

  return (
    <div className="TableWithHeader">
      <Suspense fallback={<Spin />}>
        <PageHeader
          pageTitle="StaticInfo"
          ModelAbility={ModalEnum?.STATIC_INFO_ADD}
          canAdd={canAddStaticInfo}
        />
        <FilterLayout 
          sub_children={<FilterForm />} 
          filterTitle="table.StaticInfo" 
        />
        <Table />
        <AddModalForm />
        <EditModalForm />
        <DeleteModalForm
          deleteMutation={deleteMutation}
          ModelEnum={ModalEnum?.STATIC_INFO_DELETE}
        />
      </Suspense>
    </div>
  );
};

export default TableHeader;

