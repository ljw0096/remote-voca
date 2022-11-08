import { ThemeProvider } from "styled-components"
import { theme } from "@style/Theme"
import GlobalStyle from "@style/GlobalStyle"

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
    </ThemeProvider>
  )
}

export default App
