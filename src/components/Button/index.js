 import { Btn, Seta } from '../../Pages/Home/styles.js'
 import SetaImg from '../../assets/seta.svg'
 
 export const Button = ({ onClick }) => {
   return (
    <Btn onClick={ onClick }>
          Register
      <Seta src={SetaImg} alt='seta'/>
    </Btn>
  )
}