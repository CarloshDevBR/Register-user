import { Btn } from '../../Pages/Users/styles.js'
 import SetaImg from '../../assets/seta.svg'
 
 export const BackButton = ({ onClick }) => {
   return (
    <Btn onClick={ onClick }>
      <img src={SetaImg} alt='seta'/>
          Back
    </Btn>
  )
}