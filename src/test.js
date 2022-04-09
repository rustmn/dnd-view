import React, { useState, useEffect } from "react";
import {
  DndContext,
  closestCenter,
  KeyboardSensor,
  PointerSensor,
  useSensor,
  useSensors,
  DragOverlay
} from "@dnd-kit/core";
import {
  arrayMove,
  SortableContext,
  sortableKeyboardCoordinates,
  rectSortingStrategy
} from "@dnd-kit/sortable";
import Box from './box';

import SortableItem from "./SortableItem";

const App = ({
  items,
  setItems,
  box_type,
  sub,
  setViewType
}) => {
  const [activeId, setActiveId] = useState(null);
  const [isSubDrag, setIsSubDrag] = useState('normal');

  const sensors = useSensors(
    useSensor(PointerSensor),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates
    })
  );

  const handleDragStart = (event) => {
    setActiveId(event.active.id);
  };

  const handleDragEnd = (event) => {
    setActiveId(null);
    const { active, over } = event;

    if (active.id !== over.id) {
      setItems((items) => {
        const oldIndex = items.findIndex((el) => {
          if (`${el.id}_sub` === active.id || el.id === active.id) {
            return true;
          }
        });
        const newIndex = items.findIndex(el => {
          if (el.id === over.id || `${el.id}_sub` === over.id) {
            return true;
          }
        });
        const condition = over.id.includes('sub') || active.id.includes('sub');
        console.log('condition ', condition)
        setViewType(condition ? 'sub' : 'normal')
        return arrayMove(items, oldIndex, newIndex);
      });
    }
  };

  useEffect(() => {
    console.log('<-------------------------------------', isSubDrag);
    if (!setViewType) {
      return;
    }
    console.log('isSubDrag', isSubDrag);
    setViewType(isSubDrag);
    
  }, [isSubDrag]);

  useEffect(() => {
    console.log('CONTROL', isSubDrag);
  }, [isSubDrag]);

  return (
    <DndContext
      sensors={sensors}
      collisionDetection={closestCenter}
      onDragEnd={handleDragEnd}
      onDragStart={handleDragStart}
    >
      <Box
        sub = { sub }
        flex={true}
        wrap={true}
        direction="row"
        //style={{ maxWidth: "600px" }}
        type = { box_type || '1' }
      >
        <SortableContext items={items} strategy={rectSortingStrategy}>
          {items.map((item) => (
            <SortableItem key={item.id} id={item.id} value={item.value} />
          ))}
          <DragOverlay>
            {activeId ? (
              <div
                style={{
                  minWidth: "50px",
                  minHeight: "50px",
                  backgroundColor: "red"
                }}
              ></div>
            ) : null}
          </DragOverlay>
        </SortableContext>
      </Box>
    </DndContext>
  );
};

export default App;
