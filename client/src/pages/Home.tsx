import { Button, Layout, Typo } from "@components/index"
import styled from "styled-components"
import { Link } from "react-router-dom"
import { paths } from "@lib/router/routes"

const Home = () => {
  return (
    <Layout>
      <Header>
        <Typo.Title>Remote Voca</Typo.Title>
      </Header>
      <Footer>
        <ButtonContainer>
          <Link to={paths.CREATE_TEST_PATH}>
            <Button half={true}>Create Test</Button>
          </Link>
          <Link to={paths.RESULT_PATH}>
            <Button half={true}>Result</Button>
          </Link>
          <Link to={paths.TEST_PATH}>
            <Button>Take a Test</Button>
          </Link>
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
  margin-bottom: 32px;
  bottom: 0;
`
const ButtonContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 16px 8px;
  width: 500px;
`
