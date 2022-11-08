import styled from "styled-components"

const Title = styled.h1`
  font-size: ${({ theme }) => theme.fontSize.title}px;
`

const SubTitle = styled.h2`
  font-size: ${({ theme }) => theme.fontSize.subTitle}px;
  font-weight: 700;
`

const Text = styled.span`
  font-size: ${({ theme }) => theme.fontSize.text}px;
  font-weight: 700;
`

export default { Title, SubTitle, Text }
