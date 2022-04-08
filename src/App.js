import style from './app.module.scss';
import { useState, useEffect } from 'react';
import Test from './test';
import View from './view';

export const ItemTypes = {
  CARD: 'CARD'
}

function App() {
  const [blocks, setBlocks] = useState([
    '1',
    '2',
    '3',
    '4',
    '5'
  ]);

  return (
    <div className = { style.wrapper }>
      <div className = { style.box }>
        <View
        items = { blocks }
        />
      </div>
      <div className = { style.box }>
        <Test
        items = { blocks }
        setItems = { setBlocks }
        />
      </div>
    </div>
  );
}

export default App;