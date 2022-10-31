import { MouseEventHandler, ReactNode } from "react"
import styled from "styled-components"

interface Props {
  children: ReactNode
  onClick: MouseEventHandler<HTMLButtonElement>
}

const Button = ({ children, onClick }: Props) => {
  return <StyledButton onClick={onClick}>{children}</StyledButton>
}

export default Button

const StyledButton = styled.button`
  background-color: ${({ theme }) => theme.colors.baseGreen};
`
