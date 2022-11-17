import Input from "@components/Input"
import Layout from "@components/Layout"
import SubLayout from "@components/SubLayout"
import Typo from "@components/Typo"
import { paths } from "@lib/router/routes"
import { ChangeEvent, useRef, useState } from "react"
import { useNavigate } from "react-router-dom"

const CreateTest = () => {
  const navigate = useNavigate()
  const inputRef = useRef<HTMLInputElement | null>(null)
  const handleClick = () => {
    navigate(paths.CREATE_PASSWORD, { state: { questionCount: inputRef.current?.value } })
  }
  return (
    <SubLayout subtitleText="How many questions?" buttonText="Next" onClick={handleClick}>
      <Input validation={"NUMBER"} inputRef={inputRef} autoFocus />
    </SubLayout>
  )
}

export default CreateTest
