import styled from 'styled-components'

export const HeaderStyled = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  background-color: black;
  height: 30px;
  width: 100%;
  color: white;
  /* padding: 15px; */
  @media screen and (max-width: 850px) {
    font-size: 14px;
  }
  @media screen and (max-width: 500px) {
    font-size: 10px;
  }
`
