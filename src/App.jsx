import { createContext, useState } from "react"
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Home from "./pages/Home"
import Login from "./pages/Login"

export const CredentialsContext = createContext()

function App() {
    const [user, setUser] = useState()

    const router = createBrowserRouter(
        [
            {
                path: '/',
                element: <Home />
            },
            {
                path: '/login',
                element: <Login />
            }
        ]
    )
    return (
        <CredentialsContext.Provider value={{user, setUser}} >
            <RouterProvider router={router} />
        </CredentialsContext.Provider >
    )
}

export default App