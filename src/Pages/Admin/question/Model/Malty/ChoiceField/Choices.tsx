import React from "react";
import ChoiceFields from "./ChoiceFields";
import { Choice } from "../../../../../../types/Item";
// import { useFormikContext } from "formik";
// import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";
// import { HolderOutlined } from "@ant-design/icons";

const Choices = React.memo(
  ({ setFieldValue, values, parent_index }: any) => {
    const handleDragEnd = (result: any) => {
      // Check if the item was dropped outside the list
      console.log(1);
      console.log(result.destination);

      if (!result.destination) return;

      console.log(values?.Questions?.[parent_index]?.answers);

      // Create a new array from the current answers
      const items = Array.from(values?.Questions?.[parent_index]?.answers);
      console.log(items);
      // Remove the item from the original position
      const [reorderedItem] = items.splice(result.source.index, 1);
      console.log(items);
      // Insert the item at the new position
      items.splice(result.destination.index, 0, reorderedItem);

      // Update the order keys based on the new indices
      console.log(items, "items");

      const updatedItems = items.map((item, index) => ({
        ...(item ?? {}),
        order: index + 1, // Update order to be 1-based index
      }));

      // Update the state with the new order
      console.log(updatedItems, "updatedItems");

      setFieldValue(`Questions.${parent_index}.answers`, updatedItems);
    };

    return (
      <>
        <div>
          {(values?.Questions?.[parent_index]?.answers || []).map(
            (item: Choice, index: number) => {
              return (
                <div className="Choices ChoicesMalty" key={index}>
                  <ChoiceFields
                    key={index}
                    parent_index={parent_index}
                    index={index}
                    setFieldValue={setFieldValue}
                    values={values}
                  />
                </div>
              );
            },
          )}
        </div>
        {/* <DragDropContext onDragEnd={handleDragEnd}>
        <Droppable droppableId="choices">
          {(provided) => (
            <div {...provided.droppableProps} ref={provided.innerRef}>
              {(
                (formik?.values as any)?.Questions?.[parent_index]?.answers ||
                []
              ).map((item: Choice, index: number) => {
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
                        <ChoiceFields
                          key={index}
                          parent_index={parent_index}
                          index={index}
                          data={item}
                        />
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
  },
  (prevProps, nextProps) => {
    return (
      prevProps.values?.Questions?.[prevProps?.parent_index]?.answers ===
      nextProps.values?.Questions?.[nextProps?.parent_index]?.answers
    );
  },
);

export default Choices;
