 import { Btn } from './styles.js'
 import SetaImg from '../../assets/seta.svg'
 
 export const Button = ({ onClick, children, back }) => {
   return (
    <Btn onClick={ onClick } back={back}>
        { children }
      <img src={SetaImg} alt='seta'/>
    </Btn>
  )
}