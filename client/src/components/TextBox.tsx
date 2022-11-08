import styled from "styled-components"

const TextBox = styled.div`
  display: flex;
  align-items: center;
  width: 400px;
  min-height: 168px;
  padding: 16px;
  background-color: ${({ theme }) => theme.colors.lightBlack};
  border: none;
  border-radius: 16px;
  font-size: ${({ theme }) => theme.fontSize.textLarge};
  font-weight: 700;
`
export default TextBox
