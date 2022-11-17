import Input from "@components/Input"
import Layout from "@components/Layout"
import SubLayout from "@components/SubLayout"
import Typo from "@components/Typo"
import { useEffect, useRef } from "react"
import { useLocation, useNavigate } from "react-router-dom"
import { paths } from "@lib/router/routes"

const CreatePassword = () => {
  const location = useLocation()
  const navigate = useNavigate()
  const inputRef = useRef<HTMLInputElement | null>(null)
  const handleClick = () => {
    navigate(paths.CREATE_PASSWORD, { state: { questionCount: inputRef.current?.value } })
  }

  return (
    <SubLayout subtitleText="Input Your Password" buttonText="Next" onClick={handleClick}>
      <Input validation={"NUMBER"} inputRef={inputRef} autoFocus />
    </SubLayout>
  )
}

export default CreatePassword
