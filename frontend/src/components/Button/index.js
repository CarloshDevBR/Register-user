 import { Btn } from '../../Pages/Home/styles.js'
 import SetaImg from '../../assets/seta.svg'
 
 export const Button = ({ onClick }) => {
   return (
    <Btn onClick={ onClick }>
          Register
      <img src={SetaImg} alt='seta'/>
    </Btn>
  )
}