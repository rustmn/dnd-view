import React from 'react'
import { DndProvider } from 'react-dnd'
import { TouchBackend } from 'react-dnd-touch-backend';

function Board({
  children
}) {
  /* ... */
  return <DndProvider backend={TouchBackend}>
    {
      children
    }
  </DndProvider>
}

export default Board;