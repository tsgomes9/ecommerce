import styled from 'styled-components'

export const Container = styled.div`
  width: 80%;
  margin: auto;
`

export const MenuArea = styled.div`
  display: flex;
  height: 25rem;
  margin: auto;

  @media screen and (max-width: 950px) {
    height: 22rem;
  }
  @media screen and (max-width: 850px) {
    height: 20rem;
  }
  @media screen and (max-width: 750px) {
    height: 18rem;
  }
  @media screen and (max-width: 650px) {
    height: 16rem;
  }
  @media screen and (max-width: 550px) {
    height: 14rem;
  }
  @media screen and (max-width: 450px) {
    height: 12rem;
  }
`

export const MenuItems = styled.div`
  padding-top: 2rem;
  height: 25rem;
  width: 20%;
  border-right: 1px solid #e1e1e1;
  @media screen and (max-width: 1000px) {
    display: none;
  }
`

export const PromoArea = styled.div`
  padding: 2rem 1rem;
  display: flex;
  align-items: center;
  height: 25rem;
  width: 70%;
  text-align: center;

  @media screen and (max-width: 1000px) {
    width: 100%;
    display: block;
  }
`

export const TopicArea = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
  margin: 5% auto 0;
  color: red;
  font-size: 14px;
  font-weight: bold;
  @media screen and (max-width: 1000px) {
    margin: 3% auto 0;
  }
`

export const TopicDiv = styled.div`
  width: 20px;
  height: 2rem;
  background-color: red;
  border-radius: 5px;
`
