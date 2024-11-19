import { ModalEnum } from "../../../enums/Model";
import { useTranslation } from "react-i18next";
import { lazy, Suspense } from "react";
import { Spin } from "antd";
import { canAddRole, canAddTags } from "../../../utils/hasAbilityFn";
import useSetPageTitle from "../../../Hooks/useSetPageTitle";
import PageHeader from "../../../Layout/Dashboard/PageHeader";
import FilterLayout from "../../../Layout/Dashboard/FilterLayout";
import FilterForm from "./Model/FilterForm";
import { useDeleteRole } from "../../../api/role";
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
    { name: `${t(`page_header.role`)}`, path: "role" },
  ]);

  const deleteMutation = useDeleteRole();
  return (
    <div className="TableWithHeader">
      <Suspense fallback={<Spin />}>
        <PageHeader
          pageTitle="role"
          ModelAbility={ModalEnum?.ROLE_ADD}
          canAdd={canAddRole}
        />
        <FilterLayout
          sub_children={<FilterForm />}
          filterTitle="sidebar.role"
          haveFilter={false}
        />
        <Table />
        <DeleteModalForm
          deleteMutation={deleteMutation}
          ModelEnum={ModalEnum?.ROLE_DELETE}
        />
        <AddModalForm />
        <EditModalForm />
      </Suspense>
    </div>
  );
};

export default TableHeader;
