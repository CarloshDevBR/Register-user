import styled from 'styled-components'
import Bg from '../../assets/bg-img01.svg'

export const Container = styled.div `
  width: 100%;
  height: 100vh;
  background-image: url("${Bg}");
  background-size: cover;
  display: flex;
  align-items: center;
  flex-direction: column;
`

export const People = styled.img`
  align-self: center;
  width: 230px;
  height: 230px;
`