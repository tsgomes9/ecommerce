import axios from 'axios'
import { useQuery } from 'react-query'
import { ButtonArea, ButtonShowAll, ProductCardsContainer } from './style'
import { useRef } from 'react'
import TitleArea from '../../../../components/TitleArea'
import ProductCard from '../../../../components/ProductCard'
import { IProductCard } from '../../../../components/ProductCard/types'

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
          (item: IProductCard) =>
            item.flash_sales && (
              <ProductCard
                key={item.id}
                id={item.id}
                image={item.image}
                name={item.name}
                promotional_price={item.promotional_price}
                original_price={item.original_price}
                flash_sales={item.flash_sales}
              />
            ),
        )}
      </ProductCardsContainer>

      <ButtonArea>
        <ButtonShowAll>View All Products</ButtonShowAll>
      </ButtonArea>
    </>
  )
}
