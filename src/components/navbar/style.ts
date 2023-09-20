import styled from 'styled-components'

export const NavbarStyled = styled.div`
  display: flex;
  height: 30px;
  width: 100%;
  margin-top: 30px;
  padding-bottom: 10px;
  border-bottom: 1px solid grey;
`
export const NavbarTitle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: 'Poppins Bold';
  font-size: 24px;
  width: 20%;
  height: 30px;
`

export const NavbarItems = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 30px;
  width: 50%;
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
