import { FaPlus } from "react-icons/fa";
import useModalHandler from "../../../utils/useModalHandler";
import { ModalEnum } from "../../../enums/Model";
import { useTranslation } from "react-i18next";
import { lazy, Suspense } from "react";
import { Spin } from "antd";
import { canAddTags } from "../../../utils/hasAbilityFn";
import useSetPageTitle from "../../../Hooks/useSetPageTitle";
import { useDeleteTag } from "../../../api/tags";
import PageHeader from "../../../Layout/Dashboard/PageHeader";
import FilterLayout from "../../../Layout/Dashboard/FilterLayout";
import FilterForm from "./Model/FilterForm";
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
    { name: `${t(`page_header.tags`)}`, path: "tag" },
  ]);

  const deleteMutation = useDeleteTag();

  return (
    <div className="TableWithHeader">
      <Suspense fallback={<Spin />}>
        <PageHeader
          pageTitle="tags"
          ModelAbility={ModalEnum?.TAGS_ADD}
          canAdd={canAddTags}
        />
        <FilterLayout
          sub_children={<FilterForm />}
          filterTitle="sidebar.tags"
          haveFilter={false}
        />
        <Table />
        <DeleteModalForm
          deleteMutation={deleteMutation}
          ModelEnum={ModalEnum?.TAGS_DELETE}
        />
        <AddModalForm />
        <EditModalForm />
      </Suspense>
    </div>
  );
};

export default TableHeader;
