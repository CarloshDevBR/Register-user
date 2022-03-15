import styled from 'styled-components'

export const Div = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  width: 300px;
  height: 100%;
  border-radius: 50px 50px 0px 0px;
  background: 
    linear-gradient(157.44deg, 
    rgba(255, 255, 255, 0.6) 0.84%, 
    rgba(255, 255, 255, 0.6) 0.85%, 
    rgba(255, 255, 255, 0.15) 100%);
    
  ${ props => props.isBlur && `
    backdrop-filter: blur(45px);
    height: 100vh;
  `}
`