import { createBrowserRouter } from 'react-router-dom'
import Layout from '../components/Layout'
import Product from '../pages/Product'
import Home from '../pages/Home'
import Contact from '../pages/Contact'
import About from '../pages/About'
import SignUp from '../pages/SignUp'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/contact',
        element: <Contact />,
      },
      {
        path: '/about',
        element: <About />,
      },
      {
        path: '/signup',
        element: <SignUp />,
      },
      {
        path: '/product',
        element: <Product />,
      },
    ],
  },
])

export default router
