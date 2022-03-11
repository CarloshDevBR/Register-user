 import { Btn, Seta } from '../../Pages/Home/styles.js'
 import SetaImg from '../../assets/seta.svg'
 
 export const Button = ({ onClick }) => {
   return (
    <Btn onClick={ onClick }>
          Cadastrar
      <Seta src={SetaImg} alt='seta'/>
    </Btn>
  )
}