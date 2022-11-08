import { ReactNode } from "react"
import styled from "styled-components"

interface Props {
  children: ReactNode
}

const Layout = ({ children }: Props) => {
  return (
    <Container>
      <Wrapper>{children}</Wrapper>
    </Container>
  )
}

export default Layout

const Container = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  height: 100vh;
`

const Wrapper = styled.div`
  max-width: 500px;
`
