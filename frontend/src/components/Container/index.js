import { Div } from './styles.js'

export const Box = ({children, isBlur}) => {
  return <Div isBlur={isBlur}>{children}</Div>
}