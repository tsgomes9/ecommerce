import styled from 'styled-components'

export const NavbarStyled = styled.div`
  display: flex;
  margin: auto;
  height: 30px;
  width: 90%;
  margin-top: 30px;
  padding-bottom: 10px;
  border-bottom: 1px solid #e1e1e1;
  @media screen and (max-width: 850px) {
    justify-content: center;
  }
`
export const NavbarTitle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: 'Poppins Bold';
  font-size: 24px;
  width: 20%;
  height: 30px;
  @media screen and (max-width: 850px) {
    display: none;
  }
`

export const NavbarItems = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 30px;
  width: 50%;
  @media screen and (max-width: 850px) {
    display: none;
  }
`
export const NavItemStyle = {
  margin: '0 20px',
  textDecoration: 'none',
  color: 'black',
}

export const NavbarSearch = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 30px;
  width: 15%;
  @media screen and (max-width: 850px) {
    width: 75%;
  }
  @media screen and (max-width: 767px) {
    width: 70%;
    margin-right: 5%;
  }
`

export const NavbarActions = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 30px;
  width: 15%;
`
export const NavbarInput = styled.input`
  height: 30px;
  background-color: #ededed;
  width: 100%;
  border: none;
  padding: 5px 10px;
`
export const MenuIcon = styled.div`
  display: none;
  margin-right: 5%;
  @media screen and (max-width: 850px) {
    display: block;
  }
`
