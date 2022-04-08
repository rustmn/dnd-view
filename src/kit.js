
import React, {useState} from 'react';
import {DndContext} from '@dnd-kit/core';
import {Draggable} from './Draggable';
import {Droppable} from './Droppable';
import style from './app.module.scss';

function Example({
  items
}) {
  const [parent, setParent] = useState(null);
  const draggable = (
    <Draggable id="draggable">
      Go ahead, drag me.
    </Draggable>
  );

  return (
    <DndContext onDragEnd={handleDragEnd}>
      
      {!parent ? <div id ='draggable'>
        {
          draggable
        }
      </div> : null}
      <div className = { style.droppable_box }>
        {
          items.map(item => (
            <Droppable id = { item.id }>
              {parent === "droppable" ? draggable : 'Drop here'}
            </Droppable>
          ))
        }
        
      </div>
    </DndContext>
  );

  function handleDragEnd({over}) {
    setParent(over ? over.id : null);
  }
}

export default Example;