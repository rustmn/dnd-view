import style from './app.module.scss';

const View = ({
  items
}) => {
  return (
    <div className = { style.view }>
      {
        items.map(item => (
          <div className = { style.view_item }>
            {
              item
            }
          </div>
        ))
      }
    </div>
  )
}

export default View;