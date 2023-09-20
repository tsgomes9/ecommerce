import { Outlet } from 'react-router-dom'
import Header from '../Header'
// import { NavbarArea } from '../Navbar'

export default function Layout() {
  return (
    <>
      <Header />
      {/* <NavbarArea /> */}
      <Outlet />
    </>
  )
}
