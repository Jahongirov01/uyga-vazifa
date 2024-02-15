import { RouterProvider, createBrowserRouter } from "react-router-dom"

import Root from "./pages/Root"
import Home from "./pages/Home"

const App = () => {
 const router =createBrowserRouter([
  {
    path:"/",
    element:<Root/>,
    children:[
      {
        path:"",
        element:<Home/>
      }
    ]
  }
 ])

  return (
    <>
    <RouterProvider router={router}></RouterProvider>
    </>


  )
}

export default App