import { ThemeProvider } from "styled-components"
import { theme } from "../style/Theme"
import GlobalStyle from "../style/GlobalStyle"
import Button from "./components/Button"

const App = () => {
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <div>Remote Voca</div>
        <Button
          onClick={(e) => {
            console.log("hi")
          }}
        >
          Hi
        </Button>
      </ThemeProvider>
    </>
  )
}

export default App
