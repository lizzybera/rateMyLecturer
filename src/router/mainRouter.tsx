import {createBrowserRouter} from "react-router-dom"
import Register from "../pages/auth/Register"
import SignIn from "../pages/auth/SignIn"
import Home from "../pages/Home"

export const mainRouter = createBrowserRouter ([
    {
        path : "/",
        element : <Home />
    },
    {
        path : "/register",
        element : <Register />
    },
    {
        path : "/sign-in",
        element : <SignIn />
    },
])