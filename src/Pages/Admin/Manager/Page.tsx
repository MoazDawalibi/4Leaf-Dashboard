import { useTranslation } from "react-i18next";
import { lazy, Suspense } from "react";
import { Spin } from "antd";
import useSetPageTitle from "../../../Hooks/useSetPageTitle";
import { ModalEnum } from "../../../enums/Model";
import PageHeader from "../../../Layout/Dashboard/PageHeader";
import { canAddManager } from "../../../utils/hasAbilityFn";
import FilterLayout from "../../../Layout/Dashboard/FilterLayout";
import FilterForm from "./Model/FilterForm";
import { useDeleteManager } from "../../../api/manager";

const Table = lazy(() => import("./Table"));
const DeleteModalForm = lazy(
  () => import("../../../Layout/Dashboard/DeleteModels"),
);

const TableHeader = () => {
  const [t] = useTranslation();
  const deleteMutation = useDeleteManager();

  useSetPageTitle([
    { name: `${t(`page_header.home`)}`, path: "/" },
    { name: `${t(`page_header.users`)}`, path: "user" },
    { name: `${t(`page_header.managers`)}`, path: "managers" },
  ]);
  return (
    <div className="TableWithHeader">
      <Suspense fallback={<Spin />}>
        <PageHeader
          pageTitle="users"
          ModelAbility={ModalEnum?.MANAGER_ADD}
          canAdd={canAddManager}
          openModel={false}
          locationToNavigate={"add"}
        />
        <FilterLayout
          sub_children={<FilterForm />}
          filterTitle="table.managers_list"
        />
        <Table />
        <DeleteModalForm
          deleteMutation={deleteMutation}
          ModelEnum={ModalEnum?.MANAGER_DELETE}
        />
      </Suspense>
    </div>
  );
};

export default TableHeader;
