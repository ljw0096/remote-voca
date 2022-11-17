import { ChangeEvent, RefObject, useState } from "react"
import styled from "styled-components"

interface Props {
  validation: "NUMBER" | undefined
  autoFocus?: boolean
  inputRef: RefObject<HTMLInputElement>
}

type ValidateType = "NUMBER" | undefined

const validate = (type: ValidateType) => {
  switch (type) {
    case "NUMBER":
      return questionCountValidate
    default:
      return (value: string) => value
  }
}

const questionCountValidate = (value: string) => {
  return value.length >= 3 ? "100" : value.replace(/[^0-9]/g, "")
}

const Input = ({ validation, inputRef, autoFocus }: Props) => {
  const [questionCount, setQuestionCount] = useState("")

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const formatting = validate(validation)
    setQuestionCount(formatting(e.target.value))
  }

  return (
    <StyledInput
      ref={inputRef}
      value={questionCount}
      onChange={handleChange}
      autoFocus={autoFocus}
    />
  )
}

const StyledInput = styled.input<{ size?: "half" }>`
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
  caret-color: ${({ theme }) => theme.colors.mainWhite};
`

export default Input
