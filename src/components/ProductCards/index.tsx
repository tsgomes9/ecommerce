import axios from 'axios'
import { useQuery } from 'react-query'
import {
  PriceContainer,
  ProductCardItem,
  ProductCardsContainer,
  ProductName,
  ProductOriginalPrice,
  ProductPrice,
  Title,
  TitleArea,
} from './style'
import { useRef } from 'react'
import leftArrow from '../../assets/FlashSales/leftArrow.svg'
import rightArrow from '../../assets/FlashSales/rightArrow.svg'

export default function ProductCards() {
  const { data } = useQuery('productsData', () =>
    axios
      .get('https://prolevel.up.railway.app/product')
      .then((response) => response.data),
  )

  const carousel = useRef<any>()

  const handleLeftClick = () => {
    carousel.current.scrollLeft -= carousel.current.offsetWidth
  }

  const handleRightClick = () => {
    carousel.current.scrollLeft += carousel.current.offsetWidth
  }

  return (
    <>
      <TitleArea>
        <Title>Flash Sales</Title>
        <div>
          <img
            src={leftArrow}
            onClick={handleLeftClick}
            style={{ cursor: 'pointer' }}
          />
          <img
            src={rightArrow}
            onClick={handleRightClick}
            style={{ cursor: 'pointer' }}
          />
        </div>
      </TitleArea>
      <ProductCardsContainer ref={carousel}>
        {data?.map(
          (item: any) =>
            item.flash_sales && (
              <ProductCardItem key={item.id}>
                <div style={{ border: '1px solid grey' }}>
                  <img src={item.image} style={{ width: '100%' }} />
                </div>

                <ProductName>{item.name}</ProductName>
                <PriceContainer>
                  <ProductPrice>R$ {item.promotional_price}</ProductPrice>
                  <ProductOriginalPrice>
                    R$ {item.original_price}
                  </ProductOriginalPrice>
                </PriceContainer>
              </ProductCardItem>
            ),
        )}
      </ProductCardsContainer>
    </>
  )
}
