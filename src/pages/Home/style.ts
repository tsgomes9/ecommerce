import styled from 'styled-components'

export const MenuArea = styled.div`
  display: flex;
  height: 25rem;
  width: 80%;
  margin: auto;
`

export const MenuItems = styled.div`
  padding-top: 2rem;
  height: 25rem;
  width: 20%;
  border-right: 1px solid #e1e1e1;
  @media screen and (max-width: 1000px) {
    display: none;
  }
`

export const PromoArea = styled.div`
  padding: 2rem 1rem;
  display: flex;
  align-items: center;
  height: 25rem;
  width: 70%;
  text-align: center;
  @media screen and (max-width: 1000px) {
    width: 100%;
    display: block;
  }
`
