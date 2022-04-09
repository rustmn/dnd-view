import React from "react";
import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import { Box } from "grommet";

const SortableItem = (props) => {
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
    isDragging
  } = useSortable({ id: props.id });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
    width: "100px",
    height: "100px",
    border: "2px solid red",
    backgroundColor: "#cccccc",
    //margin: "10px",
    zIndex: isDragging ? "100" : "auto",
    opacity: isDragging ? 0.3 : 1,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  };

  return (
    <div ref={setNodeRef} style={style}>
      <Box
      {...listeners} {...attributes}
      style = {{
        cursor: 'move'
      }}
      >
        <div
          style={{
            minWidth: "15px",
            minHeight: "15px",
            border: "1px solid balck",
            borderColor: "black",
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'
          }}
        >
          {props.value}
        </div>
      </Box>
    </div>
  );
};

export default SortableItem;
