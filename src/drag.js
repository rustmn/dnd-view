import React from 'react'
import { ItemTypes } from './App';
import { useDrag } from 'react-dnd';

function Knight() {
  const [{isDragging}, drag] = useDrag(() => ({
    type: ItemTypes.CARD,
    collect: monitor => ({
      isDragging: !!monitor.isDragging(),
    }),
  }))

  return (
    <div
      ref={drag}
      style={{
        opacity: isDragging ? 0.5 : 1,
        fontSize: 25,
        fontWeight: 'bold',
        cursor: 'move',
      }}
    >
      ♘
    </div>
  )
}

export default Knight