import styled from 'styled-components'
import Bg from '../../assets/bg-img01.svg'

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

export const BoxImg = styled.div `
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 170px;
`

export const People = styled.img`
  width: 200px;
  height: 200px;
`

export const BoxOrigin = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 300px;
  height: 100%;
  border-radius: 61px 61px 0px 0px;
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

export const InputItem = styled.input `
  width: 90%;
  height: 45px;
  border-radius: 14px;
  background: rgba(255, 255, 255, 0.25);
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border: none;
  margin: 0 0 25px 0;
  padding-left: 20px;
  font-size: 13pt;
  line-height: 28px;
  color: white;
`

export const P = styled.p `
  padding: 0 150px 0 0;
  color: white;
  line-height: 22px;
  font-size: 10pt;
`

export const Btn = styled.button `
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
  width: 85%;
  height: 50px;
  margin: 60px 0 10px 0;
  background: rgba(0, 0, 0, 0.8);
  border-radius: 14px;
  color: white;
  font-size: 11pt;
  line-height: 28px;
  cursor: pointer;
  transition: ease-in-out .1s ;
  border: none;
  
  :hover{
   opacity: .5;
  }

  active{
   opacity: .8;
  }
`

export const Seta = styled.img `
  width: 18px;
  height: 18px;
`

export const Ul = styled.ul `
  width: 100%;
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