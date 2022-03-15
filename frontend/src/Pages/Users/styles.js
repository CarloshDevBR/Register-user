import styled from 'styled-components'
import Bg from '../../assets/bg-img02.png'

export const Container = styled.div `
  width: 100%;
  min-height: 100vh;
  background-image: url("${Bg}");
  background-size: cover;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`

export const People = styled.img`
  width: 250px;
  height: 220px;
`