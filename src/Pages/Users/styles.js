import styled from 'styled-components'
import Bg from '../../assets/bg-img02.png'

export const Container = styled.div `
  width: 100%;
  height: 100vh;
  background-image: url("${Bg}");
  background-size: cover;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`

export const People = styled.img`
  width: 250px;
  height: 250px;
`

export const BoxOrigin = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 300px;
  height: 100%;
  border-radius: 61px 61px 0px 0px;
  backdrop-filter: blur(15px);
  background: 
    linear-gradient(157.44deg, 
    rgba(255, 255, 255, 0.6) 0.84%, 
    rgba(255, 255, 255, 0.6) 0.85%, 
    rgba(255, 255, 255, 0.15) 100%);
`

export const Title = styled.div `
  width: 100%;
  height: 110px;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  color: white;
  font-size: 11pt;
`

export const H1 = styled.h1 `
:first-letter{
   font-size: 140%;
   color: purple;
   opacity: .5;
 }
`

export const BoxOne = styled.div `
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`

export const Btn = styled.button `
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
  width: 85%;
  height: 50px;
  margin: 110px 0 10px 0;
  background: transparent;
  border-radius: 14px;
  border: 1px solid white;
  color: white;
  font-size: 13pt;
  line-height: 28px;
  cursor: pointer;
  transition: ease-in-out .1s ;
  
  :hover{
   opacity: .5;
  }

  active{
   opacity: .8;
  }
  
  img{
    width: 18px;
    height: 18px;
    transform: rotate(180deg);
  }
`

export const Ul = styled.ul `
  width: 100%;
  height: 210px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`

export const Li = styled.li `
  display: flex;
  justify-content: center;
  align-items: center;
  justify-content: space-around;
  width: 60%;
  height: 45px;
  border-radius: 14px;
  background: rgba(255, 255, 255, 0.25);
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  font-size: 13pt;
  line-height: 28px;
  color: white;
  list-style: none;
  margin: 10px 0;
`

export const Trash = styled.img `
  #trash{
    cursor: pointer;
  }
  
  #trash:active{
    opacity: .7;
  }
`