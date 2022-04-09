import style from './app.module.scss';
import { useState, useEffect } from 'react';
import Test from './test';
import View from './view';
import _style from './box.module.scss';

const types = ['1', '2', '3', '4'];

const _items = [
  {
    id: '1',
    value: '1'
  },
  {
    id: '2',
    value: '2'
  },
  {
    id: '3',
    value: '3'
  },
  {
    id: '4',
    value: '4'
  },
]

const _types = {
  '1': {
    className: _style._1,
    sub_className: _style._1_sub
  },
  '2': {
    className: _style._2,
    sub_className: _style._2_sub
  },
  '3': {
    className: _style._3,
    sub_className: _style._3_sub
  },
  '4': {
    className: _style._4,
    sub_className: _style._4_sub
  }
}

export const ItemTypes = {
  CARD: 'CARD'
}

function Panel({
  setBlocksType,
  active_type
}) {
  return <div
  className = { style.panel }
  >
    {
      types.map((item) => (
        <span
        key = { item }
        className = { `${style.panel_item} ${active_type === item ? style.panel_item_active : ''}` }
        onClick = { setBlocksType }
        data-id = { item }

        >
          {
            item
          }
        </span>
      ))
    }
  </div>
}

function App() {
  const [boxType, setBoxType] = useState('1');
  const [blocks, setBlocks] = useState(_items.slice(0, 1));
  const [viewType, setViewType] = useState('normal');

  const changeBlockType = (e) => {
    const id = e.target.getAttribute('data-id');
    setBlocks(_items.slice(0, parseInt(id)));
    setBoxType(id);
  }


  console.log('viewType', viewType);

  return (
    <div className = { style.wrapper }>
      <div className = { style.box }>
        <View
        box_type = { _types[boxType] }
        items = { blocks }
        sub = { viewType === 'sub' }
        setViewType = { setViewType }
        />
      </div>
      <div className = { `${style.box} ${style.box_panel}` }>
        <Panel
        setBlocksType={ changeBlockType }
        active_type = { boxType }
        />
        <Test
        box_type = { _types[boxType] }
        items = { blocks }
        setItems = { setBlocks }
        setViewType = { setViewType }
        />
        {
          boxType !== '1' && <div className = { style.divider }></div>
        }
          <Test
          sub = { true }
          items = { blocks.map(block => ({
            ...block,
            id: `${block.id}_sub`
          })) }
          box_type = { _types[boxType] }
          setItems = { setBlocks }
          setViewType = { setViewType }
          />
      </div>
    </div>
  );
}

export default App;