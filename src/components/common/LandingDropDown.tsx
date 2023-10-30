import { AiFillFacebook, AiOutlineInstagram, AiOutlineTwitter } from "react-icons/ai"
import { useDispatch, useSelector } from "react-redux"
import {  changedToggle3, logOut, toggleState, toggleState2 } from "../../global/GlobalState"
import Register from "../../pages/auth/Register"
import SignIn from "../../pages/auth/SignIn"


const LandingDropDown = () => {
    const dispatch = useDispatch()
    const user = useSelector((state : any) => state.user)
    const toggle = useSelector((state : any) => state.toggle)
    const toggle2 = useSelector((state : any) => state.toggle2)
  return (
      <>
      {toggle && <Register />}
      {toggle2 && <SignIn />}

        <div className='w-full h-[100vh] justify-center items-center bg-opacity-20 shadow-lg backdrop-blur-md backdrop-filter border border-opacity-18 border-white/5 rounded-10 fixed text-black z-[100]'
    onClick={()=>{
        dispatch(changedToggle3())
    }}
    >

        {
            !user ? (
<div className="mt-20 h-[250px] px-6 w-full bg-white flex flex-col justify-center">
        <div className="font-[700] text-[30px] mb-10">HOWDY </div>

        <div className="mb-5 font-[500] text-[20px]"
        onClick={()=>{
            dispatch(toggleState2())
        }}
        >Log in</div>
        <div className=" font-[500] text-[20px]"
        onClick={()=>{
            dispatch(toggleState())
        }}
        >Sign Up</div>

        <div className="flex w-[full] justify-center text-[23px] mt-10 cursor-pointer" >
        <div className="flex w-[110px] justify-between text-[23px] cursor-pointer">
                    <AiFillFacebook />
                    <AiOutlineInstagram />
                    <AiOutlineTwitter />
                </div>
                </div>
        </div>
            ) : (
                <div className="mt-20 h-[450px] px-6 w-full bg-white flex flex-col justify-center">
        <div className="font-[700] text-[30px] mb-10">Hey, {user?.name}</div>

        <div className="mb-5 font-[500] text-[18px]">Profile</div>
        <div className="mb-5 font-[500] text-[18px]">Account Settings</div>
        <div className="mb-5 font-[500] text-[18px]">Your Ratings</div>
        <div className=" font-[500] text-[18px]">My Saved Professors</div>

        <div className="flex w-[full] justify-center text-[23px] mt-10 cursor-pointer flex-col items-center" >
            <div className="mb-5 text-[17px]"
            onClick={()=>{
                dispatch(logOut())
            }}
            >Log Out</div>
        <div className="flex w-[110px] justify-between text-[23px] cursor-pointer">
                    <AiFillFacebook />
                    <AiOutlineInstagram />
                    <AiOutlineTwitter />
                </div>
                </div>
        </div>
            )
        }
        
          




    </div>
    </>
  )
}

export default LandingDropDown