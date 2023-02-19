import { createBrowserRouter } from "react-router-dom"
import Navbar from "../components/Navbar"

// routes
import FourOFour from '../views/404'
import Landing from '../views/Landing'
import Dashboard from '../views/Dashboard'

const Layout: any = ((View: any) => {
  return (
    <>
    <Navbar />
    <div className='max-w-7xl mx-auto'>
      { View }
    </div>
    </>
  )
})

const routesList = [
  {
    path: "/",
    element: Layout(<Landing />),
    errorElement: <FourOFour />
  },
  {
    path: "/dashboard",
    element: Layout(<Dashboard />)
  }
]

// router
const router = createBrowserRouter(routesList)

export default router
export const routes = routesList