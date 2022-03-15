import styled from 'styled-components'

export const Btn = styled.button `
  display: flex;
  justify-content: center;
  align-items: center;
  align-self: center;
  gap: 25px;
  width: 85%;
  height: 50px;
  margin: 110px 0 10px 0;
  background: rgba(0, 0, 0, 0.8);
  border-radius: 14px;
  color: white;
  font-size: 12pt;
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
  
  img{
   width: 18px;
   height: 18px;
  }
  
  ${ props => props.back && `
    flex-direction: row-reverse;
    margin: 70px 0 10px 0;
    background: transparent;
    border: 1px solid white;
    
    img{
      transform: rotate(180deg);
    }
  `}
`