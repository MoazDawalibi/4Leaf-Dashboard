import { useTranslation } from "react-i18next";
import { lazy, Suspense } from "react";
import { Spin } from "antd";
import useSetPageTitle from "../../../../Hooks/useSetPageTitle";
import { ModalEnum } from "../../../../enums/Model";
import PageHeader from "../../../../Layout/Dashboard/PageHeader";
import FilterLayout from "../../../../Layout/Dashboard/FilterLayout";
import FilterForm from "./Model/FilterForm";
import { canAddNotification } from "../../../../utils/hasAbilityFn";
import { useDeleteNotification } from "../../../../api/notification";
import { ABILITIES_ENUM } from "../../../../enums/abilities";

const Table = lazy(() => import("./Table"));
const AddModalForm = lazy(() => import("./Model/AddModel"));
const EditModalForm = lazy(() => import("./Model/EditModel"));
const DeleteModalForm = lazy(
  () => import("../../../../Layout/Dashboard/DeleteModels"),
);

const TableHeader = () => {
  const [t] = useTranslation();
  const deleteMutation = useDeleteNotification();

  useSetPageTitle([
    { name: `${t(`page_header.home`)}`, path: "/" },
    { name: `${t(`page_header.notification`)}`, path: "notification" },
  ]);

  return (
    <div className="TableWithHeader">
      <Suspense fallback={<Spin />}>
        <PageHeader
          pageTitle="notification"
          // ModelAbility={ModalEnum?.NOTIFICATION_ADD}
          canAdd={canAddNotification}
          locationToNavigate={`/${ABILITIES_ENUM?.NOTIFICATIONS}/add`}
          modelButtonTitle="add_notification"
          openModel={false}
        />

        <FilterLayout
          sub_children={<FilterForm />}
          filterTitle="table.notification"
        />
        <Table />
        {/* <AddModalForm /> */}
        <EditModalForm />
        <DeleteModalForm
          deleteMutation={deleteMutation}
          ModelEnum={ModalEnum?.NOTIFICATION_DELETE}
        />
      </Suspense>
    </div>
  );
};

export default TableHeader;
