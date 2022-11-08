import Input from "@components/Input"
import Layout from "@components/Layout"
import SubLayout from "@components/SubLayout"
import Typo from "@components/Typo"

const CreateTest = () => {
  return (
    <SubLayout subtitleText="How many questions?" buttonText="Next">
      <Input autoFocus />
    </SubLayout>
  )
}

export default CreateTest
