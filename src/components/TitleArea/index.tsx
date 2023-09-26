import { TitleContainer, Title } from './styles'
import leftArrow from '../../assets/FlashSales/leftArrow.svg'
import rightArrow from '../../assets/FlashSales/rightArrow.svg'

interface ITitleArea {
  handleLeftClick: () => void
  handleRightClick: () => void
  title: string
}

export default function TitleArea({
  handleLeftClick,
  handleRightClick,
  title,
}: ITitleArea) {
  return (
    <TitleContainer>
      <Title>{title}</Title>
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
    </TitleContainer>
  )
}
