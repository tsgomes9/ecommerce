import axios from 'axios'
import { useQuery } from 'react-query'
import {
  ButtonArea,
  ButtonShowAll,
  PriceContainer,
  ProductCardItem,
  ProductCardsContainer,
  ProductName,
  ProductOriginalPrice,
  ProductPrice,
} from './style'
import { useRef } from 'react'
import TitleArea from '../TitleArea'

export default function FlashSalesProducts() {
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
      <TitleArea
        title={'Flash Sales'}
        handleLeftClick={handleLeftClick}
        handleRightClick={handleRightClick}
      />

      <ProductCardsContainer ref={carousel}>
        {data?.map(
          (item: any) =>
            item.flash_sales && (
              <ProductCardItem key={item.id}>
                <div style={{ border: '1px solid grey' }}>
                  <img src={item.image} style={{ width: '80%' }} />
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

      <ButtonArea>
        <ButtonShowAll>View All Products</ButtonShowAll>
      </ButtonArea>
    </>
  )
}
