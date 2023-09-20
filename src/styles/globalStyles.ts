import { createGlobalStyle } from 'styled-components'
import PoppinsRegular from './fonts/Poppins-Regular.ttf'
import PoppinsBold from './fonts/Poppins-Bold.ttf'

const GlobalStyle = createGlobalStyle`

    @font-face {
        font-family: 'Poppins Regular';
        src: url(${PoppinsRegular}) format('woff')
    }
    @font-face {
        font-family: 'Poppins Bold';
        src: url(${PoppinsBold}) format('woff')
    }

    body {
        margin: 0;
        padding: 0;
        background-color: white;
    }

    * {
        font-family: 'Poppins Regular', sans-serif;
    }

    h1 {
        font-family: 'Poppins Bold', sans-serif;
    }
`
export default GlobalStyle
