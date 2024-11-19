import React, { Suspense, useContext, useEffect, useMemo } from "react";
import { HolderOutlined } from "@ant-design/icons";
import type { DragEndEvent } from "@dnd-kit/core";
import { DndContext } from "@dnd-kit/core";
import type { SyntheticListenerMap } from "@dnd-kit/core/dist/hooks/utilities";
import { restrictToVerticalAxis } from "@dnd-kit/modifiers";
import {
  arrayMove,
  SortableContext,
  useSortable,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import { Button, Table } from "antd";
import { useParams } from "react-router-dom";
import { ParamsEnum } from "../../../enums/params";
import { useGetAllLesson, useUpdateLessonOrder } from "../../../api/lesson";

const NotFoundLottie = React.lazy(
  () => import("../../../Components/Lottie/NotFound/NotFoundLottie"),
);
const LoadingLottie = React.lazy(
  () => import("../../../Components/Lottie/Loading/LoadingLottie"),
);

import { useTranslation } from "react-i18next";
import { useColumns } from "./useTableColumns";
import { useFilterState } from "../../../Components/Utils/Filter/FilterState";
import { useFilterStateState } from "../../../zustand/Filter";

interface DataType {
  id: string; // Unique identifier for each row
  order: number;
  name: string;
  age: number;
  address: string;
}

interface RowContextProps {
  setActivatorNodeRef?: (element: HTMLElement | null) => void;
  listeners?: SyntheticListenerMap;
}

const RowContext = React.createContext<RowContextProps>({});

export const DragHandleLesson: React.FC = () => {
  const { setActivatorNodeRef, listeners } = useContext(RowContext);
  return (
    <Button
      type="text"
      size="small"
      icon={<HolderOutlined />}
      style={{ cursor: "move" }}
      ref={setActivatorNodeRef}
      {...listeners}
    />
  );
};

interface RowProps extends React.HTMLAttributes<HTMLTableRowElement> {
  "data-row-key": string;
}

const Row: React.FC<RowProps> = (props) => {
  const {
    attributes,
    listeners,
    setNodeRef,
    setActivatorNodeRef,
    transform,
    transition,
    isDragging,
  } = useSortable({ id: props["data-row-key"] });

  const style: React.CSSProperties = {
    ...props.style,
    transform: CSS.Translate.toString(transform),
    transition,
    ...(isDragging ? { position: "relative", zIndex: 9999 } : {}),
  };

  const contextValue = useMemo<RowContextProps>(
    () => ({ setActivatorNodeRef, listeners }),
    [setActivatorNodeRef, listeners],
  );

  return (
    <RowContext.Provider value={contextValue}>
      <tr {...props} ref={setNodeRef} style={style} {...attributes} />
    </RowContext.Provider>
  );
};

const DrapableTable: React.FC = () => {
  const { unit_id } = useParams<ParamsEnum>();
  const { filterState } = useFilterState();

  const { Filter } = useFilterStateState();
  const name = Filter?.name;
  const sort_by = Filter?.sort_by;

  const response = useGetAllLesson({
    unit_id: unit_id,
    isPaginated: false,
    name,
    sort_by,
    ...filterState,
  });

  // Assuming the response contains a unique id for each item
  const data =
    response?.data?.data?.map((item: any, index: number) => ({
      id: item.id, // Ensure this is a unique identifier
      order: index + 1, // Assign order based on index
      ...item,
    })) ?? [];

  const [dataSource, setDataSource] = React.useState<DataType[]>(data);

  useEffect(() => {
    // Update dataSource when the fetched data changes
    const sortedData = data.sort((a: any, b: any) => a.order - b.order);
    setDataSource(sortedData);
  }, [response?.data?.data]);

  const { mutate: orderLesson } = useUpdateLessonOrder();
  const onDragEnd = ({ active, over }: DragEndEvent) => {
    if (active.id !== over?.id) {
      setDataSource((prevState) => {
        const activeIndex = prevState.findIndex(
          (record) => record.id === active.id,
        );

        const overIndex = prevState.findIndex(
          //@ts-ignore
          (record) => record.id === over.id,
        );

        // Move the items in the array
        const newState = arrayMove(prevState, activeIndex, overIndex);
        const orderedNewState = newState.map((item, index) => ({
          ...item,
          order: index + 1, // Update the order based on the new index
        }));
        // Update the order based on the new positions
        const orderedNewStateWithNewChape = orderedNewState?.map(
          (item: any) => {
            return {
              lesson_id: item?.id,
              order: item?.order,
            };
          },
        );
        orderLesson({ lessons: orderedNewStateWithNewChape, _method: "PUT" });
        return orderedNewState;
      });
    }
  };

  const getRowClassName = (record: any, index: number): string => {
    return index % 2 === 0 ? "even-row" : "odd-row";
  };
  const [t] = useTranslation();
  const columns = useColumns();
  const sortedDataSource = dataSource.sort((a, b) => a.order - b.order);
  console.log(sortedDataSource, "sortedDataSource");
  const isLoading = response?.isLoading;
  return (
    <DndContext modifiers={[restrictToVerticalAxis]} onDragEnd={onDragEnd}>
      <SortableContext
        items={dataSource.map((i) => i.id)}
        strategy={verticalListSortingStrategy}
      >
        <Table
          rowKey="id"
          components={{ body: { row: Row } }}
          //@ts-ignore
          columns={columns}
          dataSource={sortedDataSource}
          pagination={false}
          rowClassName={(record, index) => getRowClassName(record, index)}
          className="DataTable"
          loading={{
            spinning: isLoading,
            indicator: (
              <Suspense fallback={<></>}>
                <LoadingLottie />
              </Suspense>
            ),
            size: "large",
          }}
          locale={{
            emptyText: isLoading ? (
              <></>
            ) : (
              <Suspense fallback={<></>}>
                <NotFoundLottie />
              </Suspense>
            ),
          }}
        />
      </SortableContext>
    </DndContext>
  );
};

export default DrapableTable;
