import {createBrowserRouter} from "react-router-dom"
import Register from "../pages/auth/Register"
import SignIn from "../pages/auth/SignIn"
import ProfSignUp from "../pages/prof/profSignUp"
import LayOut from "../components/common/LayOut"
import ProfMainSign from "../pages/prof/ProfMainSign"

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
    {
        path : "/prof/signup",
        element : <LayOut />,
        children : [
            {
                index : true,
                element : <ProfMainSign />
            }

        ]
    },
])