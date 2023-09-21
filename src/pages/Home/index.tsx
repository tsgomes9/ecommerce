import ItemsMenu from '../../components/ItemsMenu'
import { MenuArea, MenuItems, PromoArea } from './style'
import blackFriday from '../../assets/Home/blackFriday.jpg'

export default function Home() {
  return (
    <>
      <MenuArea>
        <MenuItems>
          <ItemsMenu />
        </MenuItems>
        <PromoArea>
          <img src={blackFriday} style={{ width: '100%' }} />
        </PromoArea>
      </MenuArea>
    </>
  )
}
