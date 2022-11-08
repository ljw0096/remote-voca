import { MouseEventHandler, ReactNode } from "react"
import styled from "styled-components"

interface Props {
  half?: boolean
  children: ReactNode
  onClick: MouseEventHandler<HTMLButtonElement>
}

const Button = ({ children, onClick, half }: Props) => {
  return (
    <StyledButton half={half} onClick={onClick}>
      {children}
    </StyledButton>
  )
}

export default Button

const StyledButton = styled.button<Props>`
  padding: 16px;
  width: ${({ half }) => (half ? "200px" : "400px")};
  height: 64px;
  border: none;
  border-radius: 32px;
  background-color: ${({ theme }) => theme.colors.baseGreen};
  color: ${({ theme }) => theme.colors.mainWhite};
  font-size: ${({ theme }) => theme.fontSize.text}px;
  font-weight: 700;
  cursor: pointer;

  :hover {
    background-color: ${({ theme }) => theme.colors.lightGreen};
  }

  :active {
    background-color: ${({ theme }) => theme.colors.darkGreen};
  }
`
