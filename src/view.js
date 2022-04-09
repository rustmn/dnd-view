import style from './app.module.scss';
import Box from './box';

const View = ({
  items,
  box_type,
  sub,
  setViewType
}) => {

  return (
    <Box
    type = { box_type }
    sub = { sub }
    setViewType = { setViewType }
    >
      {
        items.map(item => (
          <div
          key = { item.value }
          className = { style.view_item }>
            {
              item.value
            }
          </div>
        ))
      }
    </Box>
  )
}

export default View;