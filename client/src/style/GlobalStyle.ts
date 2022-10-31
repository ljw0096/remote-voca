import reset from "styled-reset"
import { createGlobalStyle } from "styled-components"

const GlobalStyle = createGlobalStyle`
  ${reset}

  *, *::before, *::after {
    box-sizing: border-box;
  }

  body {
    font-family: "Noto Sans", "Arial", sans-serif;
    background-color: ${({ theme }) => theme.colors.mainBlack};
    color: ${({ theme }) => theme.colors.mainWhite};
  }
`

export default GlobalStyle
