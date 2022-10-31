import reset from "styled-reset"
import { createGlobalStyle } from "styled-components"

const GlobalStyle = createGlobalStyle`
  ${reset}

  *, *::before, *::after {
    box-sizing: border-box;
  }

  body {
    font-family: "Noto Sans", "Arial", sans-serif;
    line-height: 1.5;
  }
`

export default GlobalStyle
