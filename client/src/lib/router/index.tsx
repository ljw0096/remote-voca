import { BrowserRouter, Routes, Route } from "react-router-dom"
import { routes } from "./routes"

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        {routes.map(({ path, view }) => (
          <Route path={path} key={path} element={view} />
        ))}
      </Routes>
    </BrowserRouter>
  )
}
export default Router
