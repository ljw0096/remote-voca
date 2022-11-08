import { CreateTest, Home, Result, Test } from "@pages/index"

export const routes = [
  {
    path: "/",
    view: <Home />,
  },
  {
    path: "/create-test",
    view: <CreateTest />,
  },
  {
    path: "/result",
    view: <Result />,
  },
  {
    path: "/test",
    view: <Test />,
  },
]
