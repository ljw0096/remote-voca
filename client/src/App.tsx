import { ThemeProvider } from "styled-components"
import { theme } from "@style/Theme"
import GlobalStyle from "@style/GlobalStyle"
import Button from "@components/Button"
import Layout from "@components/Layout"
import { Title } from "@components/Text"

const App = () => {
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Layout>
          <Title>Remote Voca</Title>
          <Button
            onClick={(e) => {
              console.log("hi")
            }}
          >
            Hi
          </Button>
        </Layout>
      </ThemeProvider>
    </>
  )
}

export default App
