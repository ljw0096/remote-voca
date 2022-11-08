import { ThemeProvider } from "styled-components"
import { theme } from "@style/Theme"
import GlobalStyle from "@style/GlobalStyle"
import Router from "@lib/router"

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Router />
    </ThemeProvider>
  )
}

export default App
