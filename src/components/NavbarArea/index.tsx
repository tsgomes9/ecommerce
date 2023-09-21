import { Link } from '@mui/material'
import {
  CloseIcon,
  MenuIcon,
  NavItem,
  NavItemStyle,
  NavbarActions,
  NavbarInput,
  NavbarItems,
  NavbarSearch,
  NavbarStyled,
  NavbarTitle,
  Sidebar,
} from './style'
import { Link as LinkRouter } from 'react-router-dom'
import { NavItems } from './items'
import Heart from '../../assets/Navbar/heart.svg'
import ShoppingCart from '../../assets/Navbar/shopping-cart.svg'
import Menu from '../../assets/Navbar/menu.svg'
import { useState } from 'react'
import Close from '../../assets/Navbar/close.svg'

export function NavbarArea() {
  const [isOpen, setIsOpen] = useState(false)

  const handleSidebar = () => {
    setIsOpen(!isOpen)
  }

  return (
    <>
      <NavbarStyled>
        <NavbarTitle>Exclusive</NavbarTitle>

        <NavbarItems>
          {NavItems.map((item) => (
            <Link
              key={item.path}
              component={LinkRouter}
              to={item.path}
              sx={NavItemStyle}
            >
              {item.name}
            </Link>
          ))}
        </NavbarItems>

        <Sidebar isOpen={isOpen}>
          <CloseIcon onClick={handleSidebar}>
            <img src={Close} />
          </CloseIcon>
          {NavItems.map((item) => (
            <NavItem>
              <Link
                key={item.path}
                component={LinkRouter}
                to={item.path}
                sx={NavItemStyle}
                onClick={handleSidebar}
              >
                {item.name}
              </Link>
            </NavItem>
          ))}
        </Sidebar>

        <MenuIcon onClick={handleSidebar}>
          <img src={Menu} />
        </MenuIcon>
        <NavbarSearch>
          <NavbarInput type="text" placeholder="search" />
        </NavbarSearch>
        <NavbarActions>
          <img src={Heart} style={{ margin: '0 5%' }} />
          <img src={ShoppingCart} style={{ margin: '0 5%' }} />
        </NavbarActions>
      </NavbarStyled>
    </>
  )
}
