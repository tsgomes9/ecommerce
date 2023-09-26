import { useRef, useState } from 'react'
import TitleArea from '../TitleArea'
import { categories } from './CategoriesList'
import { CategorieItem, CategoriesContainer } from './style'

export default function CategoriesArea() {
  const carousel = useRef<any>()
  const [activeItem, setActiveItem] = useState<number>(0)

  const handleCategorie = (idItem: number) => {
    setActiveItem(idItem)
  }

  const handleLeftClick = () => {
    carousel.current.scrollLeft -= carousel.current.offsetWidth
  }

  const handleRightClick = () => {
    carousel.current.scrollLeft += carousel.current.offsetWidth
  }
  return (
    <>
      <TitleArea
        title={'Browse By Category'}
        handleLeftClick={handleLeftClick}
        handleRightClick={handleRightClick}
      />
      <CategoriesContainer ref={carousel}>
        {categories.map((item, index) => (
          <CategorieItem
            key={index}
            onClick={() => handleCategorie(item.id)}
            active={activeItem === item.id}
          >
            <i className={item.class} style={{ fontSize: '48px' }}></i>
            <p>{item.name}</p>
          </CategorieItem>
        ))}
      </CategoriesContainer>
    </>
  )
}
