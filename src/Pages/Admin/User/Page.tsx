import { ModalEnum } from "../../../enums/Model";
import { useTranslation } from "react-i18next";
import { lazy, Suspense } from "react";
import { Spin } from "antd";
import { canAddUser } from "../../../utils/hasAbilityFn";
import useSetPageTitle from "../../../Hooks/useSetPageTitle";
import { useDeleteTag } from "../../../api/tags";
import PageHeader from "../../../Layout/Dashboard/PageHeader";
import FilterLayout from "../../../Layout/Dashboard/FilterLayout";
import FilterForm from "./Model/FilterForm";
import { useDeleteUser } from "../../../api/user";
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
    { name: `${t(`page_header.user`)}`, path: "user" },
  ]);
  const deleteMutation = useDeleteUser();
  return (
    <div className="TableWithHeader">
      <Suspense fallback={<Spin />}>
        <PageHeader
          pageTitle="user"
          ModelAbility={ModalEnum?.USER_ADD}
          canAdd={canAddUser}
        />
        <FilterLayout
          sub_children={<FilterForm />}
          filterTitle="sidebar.user"
        />
        <Table />
        <DeleteModalForm
          deleteMutation={deleteMutation}
          ModelEnum={ModalEnum?.USER_DELETE}
        />
        <AddModalForm />
        <EditModalForm />
      </Suspense>
    </div>
  );
};

export default TableHeader;
