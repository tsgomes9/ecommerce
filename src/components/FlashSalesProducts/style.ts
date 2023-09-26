import styled from 'styled-components'

export const ProductCardsContainer = styled.div`
  display: flex;
  margin: 40px auto;
  flex-wrap: nowrap;
  overflow-x: auto;
  text-align: left;
  scroll-behavior: smooth;

  @media screen and (max-width: 1200px) {
    margin: 20px auto;
  }
  @media screen and (max-width: 768px) {
    margin: 10px auto;
  }

  &::-webkit-scrollbar {
    display: none;
  }

  -ms-overflow-style: none;
  scrollbar-width: none;
`
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
export const ButtonShowAll = styled.button`
  background: #db4444;
  width: 200px;
  height: 50px;
  color: white;
  border-radius: 5px;
  border: none;
  margin: auto;
  cursor: pointer;
`
export const ButtonArea = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 3rem;
`

export const TitleArea = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`
export const Title = styled.h1`
  font-size: 24px;
  @media screen and (max-width: 1000px) {
    font-size: 20px;
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
