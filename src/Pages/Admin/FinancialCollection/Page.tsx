import { FaPlus } from "react-icons/fa";
import useModalHandler from "../../../utils/useModalHandler";
import { ModalEnum } from "../../../enums/Model";
import { useTranslation } from "react-i18next";
import { lazy, Suspense } from "react";
import { Spin } from "antd";
import {
  canAddFinancial_Collection,
  canAddTags,
} from "../../../utils/hasAbilityFn";
import useSetPageTitle from "../../../Hooks/useSetPageTitle";
import { useDeleteTag } from "../../../api/tags";
import PageHeader from "../../../Layout/Dashboard/PageHeader";
import FilterLayout from "../../../Layout/Dashboard/FilterLayout";
import FilterForm from "./Model/FilterForm";
import { useDeleteFinancialCollection } from "../../../api/financial_collection";
const Table = lazy(() => import("./Table"));
const AddModalForm = lazy(() => import("./Model/AddModel"));
const EditModalForm = lazy(() => import("./Model/EditModel"));
const DeleteModalForm = lazy(
  () => import("../../../Layout/Dashboard/DeleteModels"),
);

const TableHeader = () => {
  const [t] = useTranslation();

  useSetPageTitle([
    { name: `${t(`page_header.home`)}`, path: "/" },
    {
      name: `${t(`page_header.financial_collection`)}`,
      path: "financial_collection",
    },
  ]);

  const deleteMutation = useDeleteFinancialCollection();
  return (
    <div className="TableWithHeader">
      <Suspense fallback={<Spin />}>
        <PageHeader
          pageTitle="financial_collection"
          ModelAbility={ModalEnum?.Financial_Collection_ADD}
          canAdd={canAddFinancial_Collection}
        />
        <FilterLayout
          sub_children={<FilterForm />}
          filterTitle="sidebar.financial_collection"
        />
        <Table />
        <DeleteModalForm
          deleteMutation={deleteMutation}
          ModelEnum={ModalEnum?.Financial_Collection_DELETE}
        />
        <AddModalForm />
        <EditModalForm />
      </Suspense>
    </div>
  );
};

export default TableHeader;
