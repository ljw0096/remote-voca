import { Button, Layout, Typo } from "@components/index"
import styled from "styled-components"
import { useNavigate } from "react-router-dom"
import { paths, routes } from "@lib/router/routes"

const Home = () => {
  const navigate = useNavigate()

  return (
    <Layout>
      <Header>
        <Typo.Title>Remote Voca</Typo.Title>
      </Header>
      <Footer>
        <ButtonContainer>
          <Button
            onClick={() => {
              navigate(paths.CREATE_TEST_PATH)
            }}
            half={true}
          >
            Create Test
          </Button>
          <Button
            onClick={() => {
              navigate(paths.RESULT_PATH)
            }}
            half={true}
          >
            Result
          </Button>
          <Button
            onClick={() => {
              navigate(paths.TEST_PATH)
            }}
          >
            Take a Test
          </Button>
        </ButtonContainer>
      </Footer>
    </Layout>
  )
}

export default Home

const Header = styled.div`
  display: flex;
  justify-content: center;
  width: 500px;
  padding: 64px;
`
const Footer = styled.div`
  display: flex;
  justify-content: center;
  position: absolute;
  bottom: 0;
`
const ButtonContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 0 8px;
  width: 500px;
  height: 160px;
`
