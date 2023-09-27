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
import FlashSalesProducts from './components/FlashSalesProducts'
import CategoriesArea from './components/Categories'
import { Divider } from '@mui/material'

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

        <FlashSalesProducts />

        <Divider sx={{ m: 4 }} />

        <TopicArea>
          <TopicDiv />
          Categories
        </TopicArea>

        <CategoriesArea />
      </Container>
    </>
  )
}
