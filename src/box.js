import style from './box.module.scss';
import { Box } from "grommet";


const Container = ({
  children,
  type,
  sub
}) => {
  const className = sub ? type.sub_className : type.className;

  return (
    <Box
    flex={true}
    wrap={true}
    direction="row"
    className = { className }
    >
      {
        children
      } 
    </Box>
  )
}

export default Container;