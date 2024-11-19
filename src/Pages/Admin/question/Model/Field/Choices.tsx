import React from "react";
import { Choice } from "../../../../../types/Item";
import ChoiceFields from "./ChoiceFields";
import { useFormikContext } from "formik";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import { FaIcons } from "react-icons/fa";
import { DragHandleUnit } from "../../../Unit/DrapableTable";
import { HolderOutlined } from "@ant-design/icons";

const Choices = () => {
  const formik = useFormikContext<any>();

  const handleDragEnd = (result: any) => {
    // Check if the item was dropped outside the list
    if (!result.destination) return;

    // Create a new array from the current answers
    const items = Array.from(formik?.values?.answers);

    // Remove the item from the original position
    const [reorderedItem] = items.splice(result.source.index, 1);

    // Insert the item at the new position
    items.splice(result.destination.index, 0, reorderedItem);

    // Update the order keys based on the new indices
    const updatedItems = items.map((item, index) => ({
      ...(item ?? {}),
      order: index + 1, // Update order to be 1-based index
    }));

    // Update the formik state with the new order
    console.log(updatedItems, "updatedItems");

    formik.setFieldValue("answers", updatedItems);
  };

  return (
    <>
      {formik?.values?.answers?.map((item: Choice, index: number) => {
        return (
          <div key={index} className="Choices">
            <ChoiceFields index={index} data={item} />
          </div>
        );
      })}

      {/* <DragDropContext onDragEnd={handleDragEnd}>
      <Droppable droppableId="choices">
        {(provided) => (
          <div {...provided.droppableProps} ref={provided.innerRef}>
            {formik?.values?.answers?.map((item: Choice, index: number) => {
              const draggableId = item.name
                ? item.name.toString()
                : `item-${index}`;

              return (
                <Draggable
                  key={draggableId}
                  draggableId={draggableId}
                  index={index}
                >
                  {(provided) => (
                    <div
                      ref={provided.innerRef}
                      {...provided.draggableProps}
                      {...provided.dragHandleProps}
                    >
                      <div className="HolderQuestion">
                        <HolderOutlined />
                      </div>
                      <ChoiceFields index={index} data={item} />
                    </div>
                  )}
                </Draggable>
              );
            })}
            {provided.placeholder} 
          </div>
        )}
      </Droppable>
    </DragDropContext> */}
    </>
  );
};

export default Choices;
