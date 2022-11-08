import styled, { keyframes } from "styled-components"

const spinnerRotate = keyframes`
    from {
    transform: rotate(0deg);
  } to {
    transform: rotate(360deg);
  }
`
const Spinner = styled.div`
  width: 180px;
  height: 180px;
  border-radius: 50%;
  border-right: 2px solid ${({ theme }) => theme.colors.baseGreen};
  animation: ${spinnerRotate} 1.5s linear infinite;
`

export default Spinner
