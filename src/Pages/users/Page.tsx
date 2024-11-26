

import { useTranslation } from "react-i18next";
import { lazy, Suspense } from "react";
import { Spin } from "antd";
import useSetPageTitle from "../../Hooks/useSetPageTitle";
import { ModalEnum } from "../../enums/Model";
import { useDeleteUsers } from "../../api/users";
import PageHeader from "../../Layout/Dashboard/PageHeader";
import FilterLayout from "../../Layout/Dashboard/FilterLayout";
import FilterForm from "./Model/FilterForm";
import { canAddUsers } from "../../utils/hasAbilityFn";

const Table = lazy(() => import("./Table"));
const AddModalForm = lazy(() => import("./Model/AddModel"));
const EditModalForm = lazy(() => import("./Model/EditModel"));
const DeleteModalForm = lazy(
  () => import("../../Layout/Dashboard/DeleteModels"),
);

const TableHeader = () => {
  const [t] = useTranslation();
  const deleteMutation = useDeleteUsers();

  useSetPageTitle([
    { name: t('page_header.home'), path: "/" },
    { name: t('page_header.users'), path: "users" },
  ]);

  return (
    <div className="TableWithHeader">
      <Suspense fallback={<Spin />}>
        <PageHeader
          pageTitle="users"
          ModelAbility={ModalEnum?.USERS_ADD}
          canAdd={canAddUsers}
        />
        <FilterLayout 
          sub_children={<FilterForm />} 
          filterTitle="table.users" 
        />
        <Table />
        <AddModalForm />
        <EditModalForm />
        <DeleteModalForm
          deleteMutation={deleteMutation}
          ModelEnum={ModalEnum?.USERS_DELETE}
        />
      </Suspense>
    </div>
  );
};

export default TableHeader;

