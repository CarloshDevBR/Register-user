import { BoxOne, P, InputItem } from '../../components/Input/styles.js'

export const Input = ({ Name, Age }) => {
  return(
    <BoxOne>
      <P>Nome:</P>
      <InputItem type='text' placeholder='Nome' ref={Name} />
      <P>Idade:</P>
      <InputItem type='number' placeholder='Idade' ref={Age} />
    </BoxOne>
  )
}