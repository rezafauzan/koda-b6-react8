import { createContext, } from "react"
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Home from "./pages/Home"
import Login from "./pages/Login"
import useLocalStorage from "/src/lib/useLocalStorage"

export const CredentialsContext = createContext()

function App() {
    const [user, setUser] = useLocalStorage("user")

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