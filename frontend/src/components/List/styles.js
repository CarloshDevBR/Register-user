import styled from 'styled-components'

export const Ul = styled.ul `
  width: 100%;
  height: 450px;
  overflow: scroll;
  scroll-bars: none;
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
  min-height: 45px;
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