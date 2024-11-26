

import { useTranslation } from "react-i18next";
import { lazy, Suspense } from "react";
import { Spin } from "antd";
import useSetPageTitle from "../../Hooks/useSetPageTitle";
import { ModalEnum } from "../../enums/Model";
import { useDeleteCategory } from "../../api/Category";
import PageHeader from "../../Layout/Dashboard/PageHeader";
import FilterLayout from "../../Layout/Dashboard/FilterLayout";
import FilterForm from "./Model/FilterForm";
import { canAddCategory } from "../../utils/hasAbilityFn";

const Table = lazy(() => import("./Table"));
const AddModalForm = lazy(() => import("./Model/AddModel"));
const EditModalForm = lazy(() => import("./Model/EditModel"));
const DeleteModalForm = lazy(
  () => import("../../Layout/Dashboard/DeleteModels"),
);

const TableHeader = () => {
  const [t] = useTranslation();
  const deleteMutation = useDeleteCategory();

  useSetPageTitle([
    { name: t('page_header.home'), path: "/" },
    { name: t('page_header.Category'), path: "Category" },
  ]);

  return (
    <div className="TableWithHeader">
      <Suspense fallback={<Spin />}>
        <PageHeader
          pageTitle="Category"
          ModelAbility={ModalEnum?.CATEGORY_ADD}
          canAdd={canAddCategory}
        />
        <FilterLayout 
          sub_children={<FilterForm />} 
          filterTitle="table.Category" 
        />
        <Table />
        <AddModalForm />
        <EditModalForm />
        <DeleteModalForm
          deleteMutation={deleteMutation}
          ModelEnum={ModalEnum?.CATEGORY_DELETE}
        />
      </Suspense>
    </div>
  );
};

export default TableHeader;

