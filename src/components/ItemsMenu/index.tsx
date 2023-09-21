import { menuList } from './menuList'

export default function ItemsMenu() {
  return (
    <>
      {menuList.map((item) => (
        <div>
          <p>{item.name}</p>
        </div>
      ))}
    </>
  )
}
