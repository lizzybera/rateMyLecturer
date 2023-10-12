import {createBrowserRouter} from "react-router-dom"
import Register from "../pages/auth/Register"

export const mainRouter = createBrowserRouter ([
    {
        path : "/register",
        element : <Register />
    }
])