import styled from "styled-components"

interface Props {
  size?: "half"
}

const Input = styled.input<Props>`
  width: ${({ size }) => (size === "half" ? "140" : "280")}px;
  padding: 4px;
  font-size: ${({ theme }) => theme.fontSize.textLarge}px;
  color: ${({ theme }) => theme.colors.mainWhite};
  text-align: center;
  background-color: transparent;
  caret-color: black;
  outline: none;
  border: none;
  border-bottom: 2px solid ${({ theme }) => theme.colors.baseGreen};
`

export default Input
