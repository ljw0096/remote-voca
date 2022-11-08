import { ReactNode } from "react"
import styled, { keyframes } from "styled-components"
import Button from "./Button"
import Typo from "./Typo"

interface Props {
  subtitleText: string
  buttonText?: string
  children?: ReactNode
  onClick?: () => void
}

const SubLayout = ({ subtitleText, buttonText, children, onClick }: Props) => {
  return (
    <Container>
      <Wrapper>
        <Header>
          <SubtitleArea>
            <Typo.SubTitle>{subtitleText}</Typo.SubTitle>
          </SubtitleArea>
        </Header>
        <Content>{children}</Content>
        <Footer>
          <Button
            onClick={() => {
              onClick
            }}
          >
            {buttonText}
          </Button>
        </Footer>
      </Wrapper>
    </Container>
  )
}

export default SubLayout

const Container = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  height: 100vh;
`

const Wrapper = styled.div`
  max-width: 500px;
`

const Header = styled.div`
  display: flex;
  width: 500px;
`

const appear = keyframes`
  from {
    opacity: 0;
    transform: translateY(-5%);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`

const SubtitleArea = styled.div`
  margin-top: 64px;
  width: 240px;
  animation: ${appear} 1s;
`

const Content = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 500px;
  padding: 32px;
`

const Footer = styled.div`
  display: flex;
  width: 500px;
  justify-content: center;
  position: absolute;
  margin-bottom: 32px;
  bottom: 0;
`
