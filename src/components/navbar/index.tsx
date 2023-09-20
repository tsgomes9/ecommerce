import { Link } from '@mui/material'
import {
  NavItemStyle,
  NavbarActions,
  NavbarInput,
  NavbarItems,
  NavbarSearch,
  NavbarStyled,
  NavbarTitle,
} from './style'
import { Link as LinkRouter } from 'react-router-dom'
import { NavItems } from './items'
import Heart from '../../assets/Navbar/heart.svg'
import ShoppingCart from '../../assets/Navbar/shopping-cart.svg'

export function NavbarArea() {
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
        <NavbarSearch>
          <NavbarInput type="text" placeholder="search" />
        </NavbarSearch>
        <NavbarActions>
          <img src={Heart} style={{ margin: '0 20px' }} />
          <img src={ShoppingCart} style={{ margin: '0 20px' }} />
        </NavbarActions>
      </NavbarStyled>
    </>
  )
}
