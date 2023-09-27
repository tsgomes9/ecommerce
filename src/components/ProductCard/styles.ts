import styled from 'styled-components'

export const ProductCardItem = styled.div`
  flex-shrink: 0;
  width: 20%;
  margin-right: 1rem;
  @media screen and (max-width: 1200px) {
    width: 31%;
  }
  @media screen and (max-width: 768px) {
    width: 48%;
  }
`
export const ProductName = styled.p`
  font-size: 16px;
  font-weight: bolder;
  margin: 5px;
`
export const PriceContainer = styled.div`
  display: flex;
  align-items: center;
  height: 20px;
`
export const ProductPrice = styled.p`
  font-size: 14px;
  font-weight: bolder;
  margin: 0 5px;
  color: red;
`
export const ProductOriginalPrice = styled.p`
  font-size: 14px;
  color: grey;
  text-decoration: line-through;
`
