import styled from 'styled-components'

export const CategoriesContainer = styled.div`
  display: flex;
  flex-wrap: nowrap;
  overflow-x: auto;
  text-align: left;
  scroll-behavior: smooth;
  &::-webkit-scrollbar {
    display: none;
  }
  -ms-overflow-style: none;
  scrollbar-width: none;
  margin-bottom: 40px;
`

interface ICategoriesItem {
  active: boolean
}

export const CategorieItem = styled.div<ICategoriesItem>`
  flex-shrink: 0;
  border: 2px solid #e3e3e3;
  border-radius: 5px;
  width: 15%;
  padding: 1rem;
  margin-right: 1rem;
  cursor: pointer;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  background-color: ${(props: any) =>
    props.active ? props.theme.red1 : 'white'};
  color: ${(props: any) => (props.active ? 'white' : 'black')};

  @media screen and (max-width: 1200px) {
    width: 35%;
  }
`
