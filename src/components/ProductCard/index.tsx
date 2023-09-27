import {
  PriceContainer,
  ProductCardItem,
  ProductName,
  ProductOriginalPrice,
  ProductPrice,
} from './styles'
import { IProductCard } from './types'

export default function ProductCard(props: IProductCard) {
  return (
    <ProductCardItem key={props.id}>
      <div style={{ border: '1px solid grey' }}>
        <img src={props.image} style={{ width: '80%' }} />
      </div>

      <ProductName>{props.name}</ProductName>
      <PriceContainer>
        <ProductPrice>R$ {props.promotional_price}</ProductPrice>
        <ProductOriginalPrice>R$ {props.original_price}</ProductOriginalPrice>
      </PriceContainer>
    </ProductCardItem>
  )
}
