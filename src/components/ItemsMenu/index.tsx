import { menuList } from './menuList'

export default function ItemsMenu() {
  return (
    <>
      {menuList.map((item) => (
        <div key={item.name}>
          <p>{item.name}</p>
        </div>
      ))}
    </>
  )
}
