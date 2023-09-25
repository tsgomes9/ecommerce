import ItemsMenu from '../../components/ItemsMenu'
import {
  Container,
  MenuArea,
  MenuItems,
  PromoArea,
  TopicArea,
  TopicDiv,
} from './style'
import blackFriday from '../../assets/Home/blackFriday.jpg'
import ProductCards from '../../components/ProductCards'

export default function Home() {
  return (
    <>
      <Container>
        <MenuArea>
          <MenuItems>
            <ItemsMenu />
          </MenuItems>
          <PromoArea>
            <img src={blackFriday} style={{ width: '100%' }} />
          </PromoArea>
        </MenuArea>

        <TopicArea>
          <TopicDiv />
          Today's
        </TopicArea>

        <ProductCards />
      </Container>
    </>
  )
}
