import {createBrowserRouter} from "react-router-dom"
import Register from "../pages/auth/Register"
import SignIn from "../pages/auth/SignIn"
import ProfSignUp from "../pages/prof/profSignUp"

export const mainRouter = createBrowserRouter ([
    {
        path : "/",
        element : <Register />
    },
    {
        path : "/sign-in",
        element : <SignIn />
    },
    {
        path : "/prof",
        element : <ProfSignUp />
    },
])