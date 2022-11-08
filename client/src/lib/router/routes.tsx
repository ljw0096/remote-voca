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
]

export const paths = {
  HOME_PATH: "/",
  CREATE_TEST_PATH: "/create-test",
  RESULT_PATH: "/result",
  TEST_PATH: "/test",
}
