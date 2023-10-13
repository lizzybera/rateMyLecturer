import {createBrowserRouter} from "react-router-dom"
import Register from "../pages/auth/Register"
import SignIn from "../pages/auth/SignIn"

export const mainRouter = createBrowserRouter ([
    {
        path : "/",
        element : <Register />
    },
    {
        path : "/sign-in",
        element : <SignIn />
    },
])