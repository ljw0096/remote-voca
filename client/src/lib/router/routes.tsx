import CreatePassword from "@pages/CreatePassword"
import { CreateTest, Home, Result, Test } from "@pages/index"

export const routes = [
  {
    name: "HOME_PATH",
    path: "/",
    view: <Home />,
  },
  {
    name: "CREATE_TEST_PATH",
    path: "/create-test",
    view: <CreateTest />,
  },
  {
    name: "RESULT_PATH",
    path: "/result",
    view: <Result />,
  },
  {
    name: "TEST_PATH",
    path: "/test",
    view: <Test />,
  },
  {
    name: "CREATE_PASSWORD",
    path: "/create-password",
    view: <CreatePassword />,
  },
]

export const paths = {
  HOME_PATH: "/",
  CREATE_TEST_PATH: "/create-test",
  RESULT_PATH: "/result",
  TEST_PATH: "/test",
  CREATE_PASSWORD: "/create-password",
}
